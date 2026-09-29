export const MENU_CATEGORIES = [
  { id: 'all', name: 'All Items', icon: 'Sparkles' },
  { id: 'espresso', name: 'Espresso & Coffee', icon: 'Coffee' },
  { id: 'copper-signatures', name: 'Retro 7/11 Signatures', icon: 'Flame' },
  { id: 'pastries', name: 'Artisan Pastries', icon: 'Croissant' },
  { id: 'savory', name: 'Gourmet Bites', icon: 'Utensils' },
  { id: 'teas', name: 'Teas & Infusions', icon: 'CupSoda' }
];

export const MENU_ITEMS = [
  // Espresso & Coffee
  {
    id: 101,
    category: 'espresso',
    name: 'Concrete Velvet Espresso',
    description: 'Double shot of organic single-origin Ethiopian Yirgacheffe espresso with notes of jasmine & bergamot.',
    price: '₹180',
    tag: 'Signature',
    dietary: ['Organic']
  },
  {
    id: 102,
    category: 'espresso',
    name: 'Oat Milk Cortado',
    description: 'Equal parts silky steamed oat milk and rich double espresso poured over a copper rim.',
    price: '₹220',
    tag: 'Popular',
    dietary: ['Vegan', 'Dairy-Free']
  },
  {
    id: 103,
    category: 'espresso',
    name: 'Artisan Flat White',
    description: 'Micro-foamed velvet oat milk folded into ristretto shots with botanical aromatic finish.',
    price: '₹240',
    tag: 'House Special',
    dietary: ['Organic']
  },
  {
    id: 104,
    category: 'espresso',
    name: 'Cold Brew Reserve',
    description: '24-hour slow steep craft coffee infused with subtle vanilla bean & citrus peel.',
    price: '₹260',
    tag: 'Refreshing',
    dietary: ['Vegan']
  },

  // Retro 7/11 Signatures
  {
    id: 201,
    category: 'copper-signatures',
    name: 'The Copper Flame Latte',
    description: 'Espresso with toasted cardamom, smoked copper maple syrup, and caramelized raw sugar cap.',
    price: '₹290',
    tag: 'Retro 7/11 Signature',
    dietary: ['Organic']
  },
  {
    id: 202,
    category: 'copper-signatures',
    name: 'Smoked Vanilla Bourbon Brew',
    description: 'Cold brew finished with copper-smoked Madagascar vanilla bean cream & orange bitters.',
    price: '₹310',
    tag: 'Must Try',
    dietary: ['Handcrafted']
  },
  {
    id: 203,
    category: 'copper-signatures',
    name: 'Honey Lavender Cappuccino',
    description: 'Wildflower raw honey, organic lavender infusion, espresso, and creamy oat microfoam.',
    price: '₹280',
    tag: 'Floral',
    dietary: ['Organic']
  },

  // Artisan Pastries
  {
    id: 301,
    category: 'pastries',
    name: 'Butter & Honey Croissant',
    description: 'French Isigny Ste Mère butter croissant baked daily, brushed with raw wildflower honey glaze.',
    price: '₹190',
    tag: 'Fresh Baked',
    dietary: ['Vegetarian']
  },
  {
    id: 302,
    category: 'pastries',
    name: 'Valrhona Chocolate Pain au Chocolat',
    description: 'Flaky buttery layers filled with double dark Valrhona 70% chocolate bars.',
    price: '₹240',
    tag: 'Best Seller',
    dietary: ['Vegetarian']
  },
  {
    id: 303,
    category: 'pastries',
    name: 'Pistachio & Cardamom Tart',
    description: 'Crisp pastry shell with pistachio frangipane, cardamom cream, and copper leaf accent.',
    price: '₹320',
    tag: 'Chef Signature',
    dietary: ['Artisan']
  },
  {
    id: 304,
    category: 'pastries',
    name: 'Almond Frangipane Flake',
    description: 'Double-baked croissant layered with rich almond cream and toasted slice almond crunch.',
    price: '₹260',
    tag: 'Classic',
    dietary: ['Vegetarian']
  },

  // Gourmet Savory
  {
    id: 401,
    category: 'savory',
    name: 'Avocado & Truffle Tartine',
    description: 'Smashed organic avocado, white truffle oil, radish flakes & copper salt on toasted sourdough.',
    price: '₹380',
    tag: 'Savory Favorite',
    dietary: ['Vegan', 'Organic']
  },
  {
    id: 402,
    category: 'savory',
    name: 'Prosciutto & Smoked Gouda Brioche',
    description: 'Aged Prosciutto di Parma, melted smoked gouda, fig jam, and wild arugula on brioche.',
    price: '₹420',
    tag: 'Chef Special',
    dietary: ['Gourmet']
  },
  {
    id: 403,
    category: 'savory',
    name: 'Smoked Salmon & Dill Bagel',
    description: 'Wild Norwegian salmon, whipped herb cream cheese, pickled red onion, capers & fresh dill.',
    price: '₹450',
    tag: 'Premium',
    dietary: ['Fresh']
  },

  // Teas & Infusions
  {
    id: 501,
    category: 'teas',
    name: 'Imperial Jasmine Dragon Pearls',
    description: 'Hand-rolled green tea leaves scented with fresh night-blooming jasmine blossoms.',
    price: '₹240',
    tag: 'Loose Leaf',
    dietary: ['Organic', 'Vegan']
  },
  {
    id: 502,
    category: 'teas',
    name: 'Ceremonial Uji Matcha Latte',
    description: 'First harvest stone-ground Japanese Uji matcha whisked with warm oat milk and touch of maple.',
    price: '₹290',
    tag: 'Superfood',
    dietary: ['Organic', 'Vegan']
  },
  {
    id: 503,
    category: 'teas',
    name: 'Spiced Copper Golden Milk',
    description: 'Organic turmeric root, ginger, black pepper, cinnamon, cardamom, and coconut cream.',
    price: '₹260',
    tag: 'Wellness',
    dietary: ['Caffeine-Free', 'Vegan']
  }
];
