const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Beef' },
    { name: 'Chicken' },
    { name: 'Seafood' },
    { name: 'Specialty' },
    { name: 'Dessert' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  /**
    {
      name: '',
      description: '',
      image: '',
      category: categories[0]._id,
      price: 64.00,
      quantity: 500
    },
   */

  const products = await Product.insertMany([
    {
      name: 'Kansas City Steaks',
      description:
        'Thick cut KC Strip Steaks. Six 12oz steaks.',
      image: 'kc_strip.jpg',
      category: categories[0]._id,
      price: 139.95,
      quantity: 500
    },
    {
      name: 'New York Strip',
      description: 'Flavorful, tender and lean. Four 12oz steaks.',
      image: 'ny_steak.jpg',
      category: categories[0]._id,
      price: 112.95,
      quantity: 500
    },    {
      name: 'Beef Wellington',
      description: 'Luxurious filet with mushroom duxcelle wrapped in flaky puff pastery. Six 8oz wellingtons.',
      image: 'beef-wellington.jpg',
      category: categories[0]._id,
      price: 169.95,
      quantity: 500
    },
    {
      name: 'Porterhouse Steaks',
      description: 'The best of both worlds. New York Strip Steak on one side with a tender filet on the other. Four 16oz steaks',
      image: 't_bone.jpg',
      category: categories[0]._id,
      price: 179.95,
      quantity: 500
    },
    {
      name: 'Ribeye Steaks',
      description: 'A steak house classic delivered to your door. Our boneless Ribeye is hand-selected to order. Four 16oz steaks.',
      image: 'ribeye.jpg',
      category: categories[0]._id,
      price: 151.95,
      quantity: 500
    },
    {
      name: 'Steak Sampler Gift Set',
      description: 'For the person who wants it all. Get two each of our USDA Prime Filet, Ribeye, New York Strip and signature T-Bone Steak. Two 6oz Filets, Two 8oz New York Strips, Two 12oz Ribeye Steaks, Two 14oz T-Bone Steaks',
      image: 'sampler.jpg',
      category: categories[0]._id,
      price: 289.95,
      quantity: 500
    },
    {
      name: 'Tomahawk Steaks',
      description: 'Handcut and trimmed, this extra thick bone-in ribeye will be a guarenteed show stopper. Two 2" thick steaks average weight 2.5 lbs.',
      image: 'tomahawk.jpg',
      category: categories[0]._id,
      price: 206.95,
      quantity: 500
    },
    {
      name: 'Prime Rib Roast',
      description:
        'Dazzle your guests with this show stopping center piece. Our Prime Rib Roast is hand carved, trimmed and dressed for you. Average weight 5lbs. One roast.',
      image: 'prime_rib.jpg',
      category: categories[0]._id,
      price: 189.95,
      quantity: 500
    },
    {
      name: 'Steak Burgers',
      description: 'We fresh grind patties from USDA Prime beef. Twelve 8oz patties.',
      image: 'hamburger.jpg',
      category: categories[0]._id,
      price: 59.95,
      quantity: 500
    },
    {
      name: 'Chicken Breasts',
      description: 'Pecan crusted chicken breasts ready to cook. Eight 8oz breasts',
      image: 'pecan_chicken.jpg',
      category: categories[1]._id,
      price: 49.95,
      quantity: 500
    },
    {
      name: 'Whole Chickens',
      description: 'Our chicken is all-natural, hormone and antibiotic free. They are grown domestically, pasture raised and raised on an all-natural diet. Chickend are air chilled to reduce added moisture. Ships frozen. Two 3-3.5lb chickens.',
      image: 'whole_chicken.jpg',
      category: categories[1]._id,
      price: 56.95,
      quantity: 500
    },
    {
      name: 'Chicken Kebabs',
      description:
        'Marinated in herbs and spices these are perfect for grilling. Two 2lb packages.',
      image: 'chicken_kebab.jpg',
      category: categories[1]._id,
      price: 38.95,
      quantity: 500
    },
    {
      name: 'Ahi Tuna',
      description: 'Tender yellowfin tuna from the shores of Hawaii. Delicious when served raw for sushi or grilled as tuna steaks. Eight 8oz tuna steaks.',
      image: 'ahi_tuna.jpg',
      category: categories[2]._id,
      price: 65.95,
      quantity: 500
    },
    {
      name: 'Alaskan King Crab Legs',
      description: 'Sustainable wild caught Alaskan King Crab Legs are a treat themselves. Serve as the main course or pair with your favorite steak. 36-48 split pieces, 2lb bags 4lbs total.',
      image: 'crab.jpg',
      category: categories[2]._id,
      price: 229.95,
      quantity: 500
    },
    {
      name: 'Fresh Oysters',
      description:
        'Fresh Oysters from the coast to your doorstep. Subject to availability. One dozen oysters',
      image: 'oysters.jpg',
      category: categories[2]._id,
      price: 56.95,
      quantity: 500
    },
    {
      name: 'Lobster Rolls',
      description: 'Succulent lobster meat in a homemade sauce just add the bun. Two 1lb packages',
      image: 'lobster-rolls.jpg',
      category: categories[2]._id,
      price: 69.95,
      quantity: 500
    },
    {
      name: 'Lobster Tails',
      description: 'California lobster tails split and cooked. Four 5-6oz tails. ',
      image: 'lobster-tails.jpg',
      category: categories[2]._id,
      price: 77.95,
      quantity: 500
    },
    {
      name: 'Salmon',
      description: 'Wild Alaskan salmon perfectly portioned. Eight 8oz portions.',
      image: 'salmon.jpg',
      category: categories[2]._id,
      price: 94.95,
      quantity: 500
    },
    {
      name: 'Swordfish',
      description: 'Straight from the waters of the Pacific, tender and juicy one inch thick cuts of wild caught swordfish. Eight 8oz filets.',
      image: 'swordfish.jpg',
      category: categories[2]._id,
      price: 76.95,
      quantity: 500
    },
    {
      name: 'Smoked Salmon',
      description: 'Thin slices of Nova Scotia Smoke Salmon perfect for parties and breakfast. Two 1lb packages.',
      image: 'smoked_salmon.jpg',
      category: categories[2]._id,
      price: 82.95,
      quantity: 500
    },
    {
      name: 'Jumbo White Shrimp',
      description: 'Perfect for the grill or an impressive shrimp cocktail, the tail is left on for a stunning presentation. Our shrimp are hand-peeled and deveined. Packed in a resealable bag and ready to cook. 16-20 pieces per pound. 2lb bag',
      image: 'shrimp.jpg',
      category: categories[2]._id,
      price: 49.95,
      quantity: 500
    },
    {
      name: 'Baby Back Ribs',
      description: 'Premium pork baby back ribs sauced with authentic St. Louis BBQ sauce. Heat and Serve. Four 1.5-1.75lb racks',
      image: 'ribs.jpg',
      category: categories[3]._id,
      price: 98.95,
      quantity: 500
    },
    {
      name: 'Rack of Lamb',
      description:
        'A full rack of New Zealand Lamb expertly trimmed and frenched. Two 1.5lb racks.',
      image: 'rack_of_lamb.jpg',
      category: categories[3]._id,
      price: 114.95,
      quantity: 500
    },
    {
      name: 'Apple Pie',
      description:
        'Finish your meal with a classic. This warm and sweet pie will be the perfect ending to your meal. One 10" pie.',
      image: 'apple_pie.jpg',
      category: categories[4]._id,
      price: 38.95,
      quantity: 500
    },
    {
      name: 'Dark Chocolate Cake Balls',
      description: 'Flavored sponge cake dipped in rich dark chocolate. Box of one dozen 4oz cake balls.',
      image: 'cake_balls.jpg',
      category: categories[4]._id,
      price: 29.95,
      quantity: 500
    },
    {
      name: 'Fudge Brownie',
      description: 'Warm chocolate fudge brownies just like Grandma Mead used to make. Six 4oz brownies.',
      image: 'brownie.jpg',
      category: categories[4]._id,
      price: 26.95,
      quantity: 500
    },

  ]);
  

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
