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
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
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
  }
];

export const CATEGORIES: { name: string; icon: string }[] = [
  { name: 'Material Handling', icon: 'Truck' },
  { name: 'Shipping & Packaging', icon: 'Package' },
  { name: 'Medical & Spa', icon: 'Stethoscope' },
  { name: 'Food Service', icon: 'Utensils' },
  { name: 'Industrial', icon: 'Factory' }
];
