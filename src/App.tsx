import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  Truck, 
  Package, 
  Stethoscope, 
  Utensils, 
  Factory,
  Plus,
  Minus,
  Trash2,
  CheckCircle2,
  CreditCard,
  MapPin,
  Mail,
  User,
  ArrowRight,
  ArrowLeft,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product, CartItem, Category, OrderDetails } from './types';
import { PRODUCTS, CATEGORIES } from './constants';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'shipping' | 'payment' | 'success'>('cart');
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [viewingProduct, setViewingProduct] = useState<Product | null>(null);
  const [detailQuantity, setDetailQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'specs' | 'reviews'>('specs');

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('mysku_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart', e);
      }
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('mysku_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setCheckoutStep('success');
      setCart([]);
      localStorage.removeItem('mysku_cart');
    }, 2000);
  };

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Material Handling': return <Truck className="w-5 h-5" />;
      case 'Shipping & Packaging': return <Package className="w-5 h-5" />;
      case 'Medical & Spa': return <Stethoscope className="w-5 h-5" />;
      case 'Food Service': return <Utensils className="w-5 h-5" />;
      case 'Industrial': return <Factory className="w-5 h-5" />;
      default: return <Package className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => setSelectedCategory('All')}>
                <div className="bg-blue-600 p-1.5 rounded-lg">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900">MYSKU<span className="text-blue-600">.</span></span>
              </div>
              
              <div className="hidden md:flex items-center bg-slate-100 rounded-full px-4 py-1.5 w-96">
                <Search className="w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search products, categories..." 
                  className="bg-transparent border-none focus:ring-0 text-sm w-full ml-2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <ShoppingCart className="w-6 h-6" />
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                    {cart.reduce((a, b) => a + b.quantity, 0)}
                  </span>
                )}
              </button>
              <button className="md:hidden p-2 text-slate-600">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
            alt="Warehouse" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-3 py-1 bg-blue-600 text-xs font-bold rounded-full mb-4 uppercase tracking-widest">Canada's Trusted Supplier</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Premium Warehouse & <br />
              <span className="text-blue-400">Shipping Supplies</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Wholesale prices on material handling, packaging, medical supplies, and more. 
              Free shipping on eligible orders across Canada.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-all flex items-center gap-2">
                Shop All Products <ChevronRight className="w-4 h-4" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-lg font-bold transition-all">
                View Catalog
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Popular Categories</h2>
            <button 
              onClick={() => setSelectedCategory('All')}
              className="text-blue-600 font-semibold text-sm hover:underline"
            >
              View All
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name as Category)}
                className={`flex flex-col items-center gap-3 p-6 rounded-2xl border transition-all ${
                  selectedCategory === cat.name 
                    ? 'bg-blue-50 border-blue-200 text-blue-600 shadow-sm' 
                    : 'bg-slate-50 border-transparent text-slate-600 hover:bg-white hover:border-slate-200 hover:shadow-md'
                }`}
              >
                <div className={`p-3 rounded-xl ${selectedCategory === cat.name ? 'bg-blue-600 text-white' : 'bg-white text-slate-400 shadow-sm'}`}>
                  {getCategoryIcon(cat.name)}
                </div>
                <span className="text-sm font-bold text-center">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail or Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatePresence mode="wait">
          {viewingProduct ? (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              {/* Breadcrumbs */}
              <nav className="flex items-center gap-2 text-sm text-slate-500">
                <button onClick={() => setViewingProduct(null)} className="hover:text-blue-600 transition-colors">Products</button>
                <ChevronRight className="w-4 h-4" />
                <span className="text-slate-900 font-medium">{viewingProduct.name}</span>
              </nav>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Image Gallery */}
                <div className="space-y-4">
                  <div className="aspect-square rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm group">
                    <img 
                      src={viewingProduct.image} 
                      alt={viewingProduct.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-125"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="aspect-square rounded-xl bg-white border border-slate-200 overflow-hidden cursor-pointer hover:border-blue-600 transition-all">
                        <img src={viewingProduct.image} alt="" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col">
                  <div className="mb-8">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-4 uppercase tracking-widest">
                      {viewingProduct.category}
                    </span>
                    <h1 className="text-4xl font-black text-slate-900 mb-4 leading-tight">{viewingProduct.name}</h1>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                      </div>
                      <span className="text-sm text-slate-500 font-medium">(48 Reviews)</span>
                      <span className="text-slate-300">|</span>
                      <span className="text-sm text-green-600 font-bold">In Stock ({viewingProduct.stock} units)</span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-8">
                      <span className="text-4xl font-black text-blue-600">${viewingProduct.price.toFixed(2)}</span>
                      <span className="text-slate-400 font-medium">/ {viewingProduct.unit}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {viewingProduct.description}
                      <br /><br />
                      This premium product is engineered for durability and high performance in demanding industrial environments. 
                      Meets all Canadian safety standards and comes with a 1-year manufacturer warranty.
                    </p>
                  </div>

                  <div className="space-y-6 mt-auto">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-2">
                        <button 
                          onClick={() => setDetailQuantity(q => Math.max(1, q - 1))}
                          className="p-2 hover:bg-slate-50 rounded-xl text-slate-400 hover:text-blue-600 transition-all"
                        >
                          <Minus className="w-5 h-5" />
                        </button>
                        <span className="text-xl font-bold w-8 text-center">{detailQuantity}</span>
                        <button 
                          onClick={() => setDetailQuantity(q => q + 1)}
                          className="p-2 hover:bg-slate-50 rounded-xl text-slate-400 hover:text-blue-600 transition-all"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                      <button 
                        onClick={() => addToCart(viewingProduct, detailQuantity)}
                        className="flex-grow bg-slate-900 hover:bg-blue-600 text-white py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-200"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart - ${(viewingProduct.price * detailQuantity).toFixed(2)}
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-100">
                      <div className="text-center">
                        <div className="bg-slate-50 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Truck className="w-5 h-5 text-slate-400" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Fast Shipping</span>
                      </div>
                      <div className="text-center">
                        <div className="bg-slate-50 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                          <CheckCircle2 className="w-5 h-5 text-slate-400" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Quality Assured</span>
                      </div>
                      <div className="text-center">
                        <div className="bg-slate-50 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Package className="w-5 h-5 text-slate-400" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Bulk Pricing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs for Specs and Reviews */}
              <div className="pt-12 border-t border-slate-200">
                <div className="flex gap-8 border-b border-slate-200 mb-8">
                  <button 
                    onClick={() => setActiveTab('specs')}
                    className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all border-b-2 ${activeTab === 'specs' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                  >
                    Product Specifications
                  </button>
                  <button 
                    onClick={() => setActiveTab('reviews')}
                    className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all border-b-2 ${activeTab === 'reviews' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                  >
                    Customer Reviews ({viewingProduct.reviews?.length || 0})
                  </button>
                </div>

                <div className="min-h-[300px]">
                  {activeTab === 'specs' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                      {viewingProduct.specs ? (
                        Object.entries(viewingProduct.specs).map(([key, value]) => (
                          <div key={key} className="flex justify-between py-3 border-b border-slate-100">
                            <span className="text-slate-500 font-medium">{key}</span>
                            <span className="text-slate-900 font-bold">{value}</span>
                          </div>
                        ))
                      ) : (
                        <p className="text-slate-500 italic">No specifications available for this product.</p>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-8">
                      {viewingProduct.reviews && viewingProduct.reviews.length > 0 ? (
                        viewingProduct.reviews.map((review, idx) => (
                          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h4 className="font-bold text-slate-900">{review.user}</h4>
                                <div className="flex items-center gap-1 text-amber-400 mt-1">
                                  {[1, 2, 3, 4, 5].map(i => (
                                    <Star key={i} className={`w-3 h-3 ${i <= review.rating ? 'fill-current' : 'text-slate-200'}`} />
                                  ))}
                                </div>
                              </div>
                              <span className="text-xs text-slate-400 font-medium">{review.date}</span>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">{review.comment}</p>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-12 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                          <p className="text-slate-500">No reviews yet. Be the first to review this product!</p>
                          <button className="mt-4 text-blue-600 font-bold hover:underline text-sm">Write a Review</button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Related Products Placeholder */}
              <div className="pt-16">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Related Products</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {PRODUCTS.filter(p => p.category === viewingProduct.category && p.id !== viewingProduct.id).slice(0, 4).map(p => (
                    <div 
                      key={p.id} 
                      onClick={() => {setViewingProduct(p); setDetailQuantity(1); window.scrollTo(0, 0);}}
                      className="bg-white rounded-2xl border border-slate-100 p-4 hover:shadow-lg transition-all cursor-pointer group"
                    >
                      <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-slate-50">
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500" referrerPolicy="no-referrer" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm line-clamp-1">{p.name}</h4>
                      <span className="text-blue-600 font-bold text-sm">${p.price.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Featured Products</h2>
                  <p className="text-slate-500 mt-1">Showing {filteredProducts.length} items in {selectedCategory}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-500 font-medium">Sort by:</span>
                  <select className="bg-white border-slate-200 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500">
                    <option>Newest Arrivals</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      key={product.id}
                      className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                    >
                      <div 
                        className="relative aspect-square overflow-hidden bg-slate-100 cursor-pointer"
                        onClick={() => {setViewingProduct(product); setDetailQuantity(1); window.scrollTo(0, 0);}}
                      >
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-slate-600 shadow-sm">
                            {product.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-5 flex-grow flex flex-col">
                        <h3 
                          className="font-bold text-slate-900 mb-2 line-clamp-2 min-h-[3rem] cursor-pointer hover:text-blue-600 transition-colors"
                          onClick={() => {setViewingProduct(product); setDetailQuantity(1); window.scrollTo(0, 0);}}
                        >
                          {product.name}
                        </h3>
                        <p className="text-sm text-slate-500 mb-4 line-clamp-2 flex-grow">{product.description}</p>
                        <div className="flex items-center justify-between mt-auto">
                          <div>
                            <span className="text-2xl font-black text-slate-900">${product.price.toFixed(2)}</span>
                            <span className="text-xs text-slate-400 block">/ {product.unit}</span>
                          </div>
                          <button 
                            onClick={() => addToCart(product)}
                            className="bg-slate-900 hover:bg-blue-600 text-white p-2.5 rounded-xl transition-colors shadow-lg shadow-slate-200"
                          >
                            <Plus className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-20">
                  <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">No products found</h3>
                  <p className="text-slate-500 mt-2">Try adjusting your search or filters to find what you're looking for.</p>
                  <button 
                    onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}
                    className="mt-6 text-blue-600 font-bold hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-600 p-1.5 rounded-lg">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">MYSKU<span className="text-blue-600">.</span></span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Canada's leading supplier for warehousing, shipping, and industrial needs. 
                Quality products at competitive wholesale prices.
              </p>
              <div className="flex gap-4">
                {/* Social icons placeholder */}
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-xs font-bold">FB</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-xs font-bold">IG</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-xs font-bold">LI</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Shop Categories</h4>
              <ul className="space-y-4 text-sm">
                {CATEGORIES.map(c => (
                  <li key={c.name} className="hover:text-blue-400 transition-colors cursor-pointer">{c.name}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm">
                <li className="hover:text-blue-400 transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Shipping Policy</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Returns & Refunds</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Terms of Service</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Privacy Policy</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Newsletter</h4>
              <p className="text-sm mb-4">Subscribe to get special offers and industry updates.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-slate-800 text-center text-xs">
            <p>&copy; 2026 MySKU. All rights reserved. Built for demonstration purposes.</p>
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-blue-600" />
                  <h2 className="text-xl font-bold">Your Cart</h2>
                  <span className="bg-slate-100 text-slate-500 text-xs px-2 py-0.5 rounded-full font-bold">
                    {cart.reduce((a, b) => a + b.quantity, 0)}
                  </span>
                </div>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                      <Package className="w-8 h-8 text-slate-300" />
                    </div>
                    <h3 className="font-bold text-slate-900">Your cart is empty</h3>
                    <p className="text-slate-500 text-sm mt-1">Looks like you haven't added anything yet.</p>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg font-bold"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-20 h-20 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-sm text-slate-900 line-clamp-1">{item.name}</h4>
                          <button onClick={() => removeFromCart(item.id)} className="text-slate-400 hover:text-red-500">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">${item.price.toFixed(2)} / {item.unit}</p>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-3 bg-slate-50 rounded-lg px-2 py-1 border border-slate-100">
                            <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-blue-600">
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-blue-600">
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="font-bold text-slate-900">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t border-slate-100 bg-slate-50/50">
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Subtotal</span>
                      <span className="font-bold">${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Shipping</span>
                      <span className="text-green-600 font-bold">FREE</span>
                    </div>
                    <div className="flex justify-between text-lg pt-2 border-t border-slate-200">
                      <span className="font-bold">Total</span>
                      <span className="font-black text-blue-600">${cartTotal.toFixed(2)}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => {setIsCartOpen(false); setIsCheckoutModalOpen(true); setCheckoutStep('shipping');}}
                    className="w-full bg-slate-900 hover:bg-blue-600 text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                  >
                    Proceed to Checkout <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Checkout Modal */}
      <AnimatePresence>
        {isCheckoutModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isProcessing && setIsCheckoutModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {checkoutStep !== 'success' && (
                <div className="flex border-b border-slate-100">
                  <div className={`flex-1 py-4 text-center text-sm font-bold border-b-2 transition-colors ${checkoutStep === 'shipping' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400'}`}>
                    1. Shipping
                  </div>
                  <div className={`flex-1 py-4 text-center text-sm font-bold border-b-2 transition-colors ${checkoutStep === 'payment' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400'}`}>
                    2. Payment
                  </div>
                </div>
              )}

              <div className="p-8">
                {checkoutStep === 'shipping' && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <MapPin className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold">Shipping Information</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-500 uppercase">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input 
                            type="text" 
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all"
                            placeholder="John Doe"
                            value={orderDetails.fullName}
                            onChange={e => setOrderDetails({...orderDetails, fullName: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-500 uppercase">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input 
                            type="email" 
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all"
                            placeholder="john@example.com"
                            value={orderDetails.email}
                            onChange={e => setOrderDetails({...orderDetails, email: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2 space-y-1">
                        <label className="text-xs font-bold text-slate-500 uppercase">Street Address</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-2.5 bg-slate-50 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all"
                          placeholder="123 Business Way"
                          value={orderDetails.address}
                          onChange={e => setOrderDetails({...orderDetails, address: e.target.value})}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-500 uppercase">City</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-2.5 bg-slate-50 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all"
                          placeholder="Toronto"
                          value={orderDetails.city}
                          onChange={e => setOrderDetails({...orderDetails, city: e.target.value})}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-500 uppercase">Postal Code</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-2.5 bg-slate-50 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all"
                          placeholder="M5V 2L7"
                          value={orderDetails.postalCode}
                          onChange={e => setOrderDetails({...orderDetails, postalCode: e.target.value})}
                        />
                      </div>
                    </div>
                    <button 
                      onClick={() => setCheckoutStep('payment')}
                      disabled={!orderDetails.fullName || !orderDetails.address}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold transition-all mt-4"
                    >
                      Continue to Payment
                    </button>
                  </div>
                )}

                {checkoutStep === 'payment' && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <CreditCard className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold">Payment Method</h3>
                    </div>
                    <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-bold text-blue-800">Simulated Payment Mode</span>
                        <div className="flex gap-2">
                          <div className="w-8 h-5 bg-slate-200 rounded"></div>
                          <div className="w-8 h-5 bg-slate-200 rounded"></div>
                          <div className="w-8 h-5 bg-slate-200 rounded"></div>
                        </div>
                      </div>
                      <p className="text-sm text-blue-600 leading-relaxed">
                        For this demonstration, clicking the button below will simulate a successful transaction. 
                        No real payment information is required.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Order Total</span>
                        <span className="font-bold text-slate-900">${cartTotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Shipping</span>
                        <span className="text-green-600 font-bold">FREE</span>
                      </div>
                      <div className="flex justify-between text-xl pt-3 border-t border-slate-100">
                        <span className="font-bold">Total to Pay</span>
                        <span className="font-black text-blue-600">${cartTotal.toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button 
                        onClick={() => setCheckoutStep('shipping')}
                        className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-600 py-4 rounded-xl font-bold transition-all"
                      >
                        Back
                      </button>
                      <button 
                        onClick={handleCheckout}
                        disabled={isProcessing}
                        className="flex-[2] bg-slate-900 hover:bg-blue-600 text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                      >
                        {isProcessing ? (
                          <>
                            <motion.div 
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            />
                            Processing...
                          </>
                        ) : (
                          <>Complete Purchase <CheckCircle2 className="w-5 h-5" /></>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {checkoutStep === 'success' && (
                  <div className="py-10 text-center">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle2 className="w-12 h-12" />
                    </motion.div>
                    <h2 className="text-3xl font-black text-slate-900 mb-2">Order Confirmed!</h2>
                    <p className="text-slate-500 mb-8">
                      Thank you for your purchase, {orderDetails.fullName}. <br />
                      A confirmation email has been sent to {orderDetails.email}.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl mb-8 text-left max-w-sm mx-auto">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-500">Order Number:</span>
                        <span className="font-bold">#MS-{Math.floor(Math.random() * 1000000)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Estimated Delivery:</span>
                        <span className="font-bold">2-4 Business Days</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => {setIsCheckoutModalOpen(false); setCheckoutStep('cart');}}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold transition-all"
                    >
                      Continue Shopping
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
