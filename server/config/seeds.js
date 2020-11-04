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

  const products = await Product.insertMany([
    {
      name: 'Kansas City Steaks',
      description:
        'Thick cut KC Strip Steaks. 6 12oz steaks.',
      image: 'kc_strip.jpg',
      category: categories[0]._id,
      price: 86.00,
      quantity: 500
    },
    {
      name: 'New York Strip',
      description: 'Flavorful, tender and lean. 4 10oz steaks.',
      image: 'ny_steak.jpg',
      category: categories[0]._id,
      price: 64.00,
      quantity: 500
    },    {
      name: 'Beef Wellington',
      description: 'Luxurious filet with mushroom duxcelle wrapped in flaky puff pastery. 4 8oz wellingtons.',
      image: 'beef-wellington.jpg',
      category: categories[0]._id,
      price: 86.00,
      quantity: 500
    },
    {
      name: 'T-Bone Steaks',
      description: 'The best of both worlds. New York Strip Steak on one side with a tender filet on the other. 4 16oz steaks',
      image: 't_bone.jpg',
      category: categories[0]._id,
      price: 64.00,
      quantity: 500
    },
    {
      name: 'Sampler',
      description: 'For the person who wants it all. Get two each of our USDA Prime Filet, Ribeye, New York Strip and signature T-Bone Steak. 2 6oz Filets, 2 8oz New York Strips, 2 12oz Ribeye Steaks, 2 14oz T-Bone Steaks',
      image: 'sampler.jpg',
      category: categories[0]._id,
      price: 264.00,
      quantity: 500
    },
    {
      name: 'Prime Rib Roast',
      description:
        'Dazzle your guests with this show stopping center piece. Our Prime Rib Roast is hand carved, trimmed and dressed for you. Average weight 5lbs. One roast.',
      image: 'prime_rib.jpg',
      category: categories[0]._id,
      price: 189.00,
      quantity: 500
    },
    {
      name: 'Chicken Kebabs',
      description:
        'Marinated in herbs and spices these are perfect for grilling. Two 2lb packages.',
      image: 'chicken_kebab.jpg',
      category: categories[1]._id,
      price: 65.00,
      quantity: 500
    },
    {
      name: 'Fresh Oysters',
      description:
        'Fresh Oysters from the coast to your doorstep. 1 dozen oysters',
      image: 'oysters.jpg',
      category: categories[2]._id,
      price: 64.00,
      quantity: 500
    },
    {
      name: 'Rack of Lamb',
      description:
        'A full rack of New Zealand Lamb.',
      image: 'rack_of_lamb.jpg',
      category: categories[3]._id,
      price: 64.00,
      quantity: 500
    },
    {
      name: 'Apple Pie',
      description:
        'Finish your meal with a classic. This warm and sweet pie will be the perfect ending to your meal.',
      image: 'apple_pie.jpg',
      category: categories[4]._id,
      price: 64.00,
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
