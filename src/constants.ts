import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Electric Pallet Truck - 3300lbs/1500KG',
    description: 'High-performance lithium-ion electric pallet truck for efficient warehouse operations.',
    price: 2499.00,
    category: 'Material Handling',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    unit: 'Each',
    stock: 15,
    specs: {
      'Load Capacity': '3300 lbs / 1500 kg',
      'Power Type': 'Lithium-ion Battery',
      'Fork Length': '48 inches',
      'Overall Width': '27 inches',
      'Turning Radius': '53 inches',
      'Weight': '420 lbs'
    },
    reviews: [
      { user: 'Robert M.', rating: 5, comment: 'Excellent battery life and very easy to maneuver in tight spaces.', date: '2024-03-15' },
      { user: 'Sarah K.', rating: 4, comment: 'Great value for the price. Shipping was fast.', date: '2024-02-20' }
    ]
  },
  {
    id: '2',
    name: 'Stretch Wrap - 18" x 1500ft',
    description: 'Heavy-duty industrial stretch wrap for securing pallets and protecting goods during transit.',
    price: 85.50,
    category: 'Shipping & Packaging',
    image: 'https://images.unsplash.com/photo-1620455805861-79b0fdac5c41?auto=format&fit=crop&q=80&w=800',
    unit: 'Case of 4',
    stock: 100,
    specs: {
      'Width': '18 inches',
      'Length': '1500 feet',
      'Thickness': '80 Gauge',
      'Color': 'Clear',
      'Material': 'LLDPE',
      'Quantity': '4 Rolls per Case'
    },
    reviews: [
      { user: 'Mike T.', rating: 5, comment: 'Strongest wrap we\'ve used. Doesn\'t tear easily.', date: '2024-03-10' }
    ]
  },
  {
    id: '3',
    name: 'Disposable Bed Sheets - 100pcs',
    description: 'High-quality non-woven disposable sheets for medical and spa use.',
    price: 45.00,
    category: 'Medical & Spa',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    unit: 'Box',
    stock: 50,
    specs: {
      'Material': 'Non-woven Polypropylene',
      'Size': '31" x 71"',
      'Color': 'White',
      'Packaging': '100 sheets per box',
      'Latex Free': 'Yes'
    }
  },
  {
    id: '4',
    name: 'Thermal Receipt Paper - 3 1/8" x 230\'',
    description: 'Premium BPA-free thermal paper rolls for POS systems and cash registers.',
    price: 62.00,
    category: 'Food Service',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
    unit: 'Case of 50',
    stock: 200,
    specs: {
      'Width': '3 1/8 inches',
      'Length': '230 feet',
      'Type': 'Thermal',
      'BPA Free': 'Yes',
      'Core Size': '7/16 inch'
    }
  },
  {
    id: '5',
    name: 'Manual Hand Pallet Truck Standard Fork',
    description: 'Durable and reliable manual pallet jack for everyday warehouse use.',
    price: 499.00,
    category: 'Material Handling',
    image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=800',
    unit: 'Each',
    stock: 25,
    specs: {
      'Capacity': '5500 lbs',
      'Fork Size': '27" x 48"',
      'Lowered Height': '2.9"',
      'Raised Height': '7.5"',
      'Wheels': 'Polyurethane'
    }
  },
  {
    id: '6',
    name: 'Carton Sealing Tape - Clear 2" x 110yd',
    description: 'Strong adhesive clear tape for secure box sealing and packaging.',
    price: 38.00,
    category: 'Shipping & Packaging',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800',
    unit: 'Case of 36',
    stock: 150,
    specs: {
      'Width': '2 inches',
      'Length': '110 yards',
      'Thickness': '2.0 mil',
      'Adhesive': 'Acrylic',
      'Quantity': '36 Rolls per Case'
    }
  },
  {
    id: '7',
    name: 'Isopropyl Alcohol 70% - 4L',
    description: 'Industrial grade 70% Isopropyl Alcohol for cleaning and sanitizing.',
    price: 28.00,
    category: 'Medical & Spa',
    image: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=800',
    unit: 'Jug',
    stock: 80,
    specs: {
      'Concentration': '70%',
      'Volume': '4 Liters',
      'Grade': 'USP/Industrial',
      'Container': 'Plastic Jug'
    }
  },
  {
    id: '8',
    name: 'Hospitality Bath Towel 6-Pack',
    description: 'Soft and absorbent white cotton towels for hotels and spas.',
    price: 54.00,
    category: 'Food Service',
    image: 'https://images.unsplash.com/photo-1583912267550-d44d7a125e7e?auto=format&fit=crop&q=80&w=800',
    unit: 'Pack of 6',
    stock: 60,
    specs: {
      'Material': '100% Cotton',
      'Size': '27" x 54"',
      'Weight': '15 lbs/dozen',
      'Color': 'White',
      'Quantity': '6 per pack'
    }
  },
  {
    id: '9',
    name: 'Heavy Duty Storage Rack - 5 Shelves',
    description: 'Industrial-grade steel shelving unit for heavy-duty warehouse storage.',
    price: 189.99,
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1587293855946-91215034b76a?auto=format&fit=crop&q=80&w=800',
    unit: 'Each',
    stock: 40,
    specs: { 'Material': 'Steel', 'Capacity': '2000 lbs', 'Shelves': '5' }
  },
  {
    id: '10',
    name: 'Digital Platform Scale - 500kg',
    description: 'High-precision digital scale for weighing large packages and pallets.',
    price: 145.00,
    category: 'Material Handling',
    image: 'https://images.unsplash.com/photo-1586864387917-f539352e0344?auto=format&fit=crop&q=80&w=800',
    unit: 'Each',
    stock: 12
  },
  {
    id: '11',
    name: 'Bubble Wrap Roll - 12" x 175ft',
    description: 'Protective bubble cushioning for fragile items during shipping.',
    price: 24.50,
    category: 'Shipping & Packaging',
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80&w=800',
    unit: 'Roll',
    stock: 200
  },
  {
    id: '12',
    name: 'Nitrile Gloves - Box of 100',
    description: 'Powder-free medical grade nitrile gloves for safety and hygiene.',
    price: 12.99,
    category: 'Medical & Spa',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    unit: 'Box',
    stock: 500
  },
  {
    id: '13',
    name: 'Stainless Steel Prep Table',
    description: 'Durable stainless steel table for food preparation in commercial kitchens.',
    price: 299.00,
    category: 'Food Service',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800',
    unit: 'Each',
    stock: 8
  },
  {
    id: '14',
    name: 'Industrial Floor Fan - 24"',
    description: 'High-velocity floor fan for warehouse and industrial cooling.',
    price: 115.00,
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1591193516411-960fd76ba088?auto=format&fit=crop&q=80&w=800',
    unit: 'Each',
    stock: 30
  },
  {
    id: '15',
    name: 'Safety Vest - High Visibility',
    description: 'Reflective safety vest for warehouse and construction workers.',
    price: 8.50,
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80&w=800',
    unit: 'Each',
    stock: 300
  },
  {
    id: '16',
    name: 'Cardboard Boxes - 12x12x12',
    description: 'Standard corrugated shipping boxes for general packaging.',
    price: 42.00,
    category: 'Shipping & Packaging',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800',
    unit: 'Bundle of 25',
    stock: 100
  },
  {
    id: '17',
    name: 'Hand Sanitizer - 1L Pump',
    description: 'Effective hand sanitizer for office and commercial use.',
    price: 9.99,
    category: 'Medical & Spa',
    image: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=800',
    unit: 'Bottle',
    stock: 400
  },
  {
    id: '18',
    name: 'Commercial Blender - 2L',
    description: 'High-power blender for smoothies and food prep in restaurants.',
    price: 349.00,
    category: 'Food Service',
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&q=80&w=800',
    unit: 'Each',
    stock: 15
  },
  {
    id: '19',
    name: 'Platform Truck - 660lbs Capacity',
    description: 'Folding handle platform truck for easy transport of goods.',
    price: 89.00,
    category: 'Material Handling',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    unit: 'Each',
    stock: 20
  },
  {
    id: '20',
    name: 'Packing Peanuts - 14 Cubic Feet',
    description: 'Anti-static loose fill packing peanuts for fragile item protection.',
    price: 35.00,
    category: 'Shipping & Packaging',
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80&w=800',
    unit: 'Bag',
    stock: 50
  },
  {
    id: '21',
    name: 'Medical Face Masks - 50pcs',
    description: '3-ply disposable medical face masks for protection.',
    price: 7.50,
    category: 'Medical & Spa',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    unit: 'Box',
    stock: 1000
  },
  {
    id: '22',
    name: 'Chef Knife - 8 inch',
    description: 'Professional grade stainless steel chef knife for commercial kitchens.',
    price: 45.00,
    category: 'Food Service',
    image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&q=80&w=800',
    unit: 'Each',
    stock: 40
  },
  {
    id: '23',
    name: 'Industrial Air Compressor',
    description: 'Powerful air compressor for pneumatic tools and industrial use.',
    price: 899.00,
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    unit: 'Each',
    stock: 5
  },
  {
    id: '24',
    name: 'Drum Dolly - 55 Gallon',
    description: 'Heavy-duty steel dolly for transporting 55-gallon drums.',
    price: 75.00,
    category: 'Material Handling',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    unit: 'Each',
    stock: 18
  },
  {
    id: '25',
    name: 'Shipping Labels - 4x6',
    description: 'Direct thermal shipping labels for zebra and other printers.',
    price: 18.00,
    category: 'Shipping & Packaging',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
    unit: 'Roll of 500',
    stock: 300
  },
  {
    id: '26',
    name: 'Digital Thermometer',
    description: 'Infrared non-contact digital thermometer for quick temperature checks.',
    price: 29.00,
    category: 'Medical & Spa',
    image: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=800',
    unit: 'Each',
    stock: 150
  },
  {
    id: '27',
    name: 'Commercial Coffee Maker',
    description: 'High-capacity coffee brewer for offices and restaurants.',
    price: 199.00,
    category: 'Food Service',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
    unit: 'Each',
    stock: 10
  },
  {
    id: '28',
    name: 'Work Bench - Steel Top',
    description: 'Heavy-duty industrial work bench with a durable steel top.',
    price: 450.00,
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    unit: 'Each',
    stock: 15
  }
];

export const CATEGORIES: { name: string; icon: string }[] = [
  { name: 'Material Handling', icon: 'Truck' },
  { name: 'Shipping & Packaging', icon: 'Package' },
  { name: 'Medical & Spa', icon: 'Stethoscope' },
  { name: 'Food Service', icon: 'Utensils' },
  { name: 'Industrial', icon: 'Factory' }
];
