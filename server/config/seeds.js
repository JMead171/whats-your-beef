const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Meat' },
    { name: 'Seafood' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Rack of Lamb',
      description:
        'A full rack of New Zealand Lamb.',
      image: 'rack_of_lamb.jpg',
      category: categories[0]._id,
      price: 64.00,
      quantity: 500
    },
    {
      name: 'Kansas City Steaks',
      description:
        'Thick cut KC Strip Steaks. 6 12oz steaks.',
      image: 'kc_strip.jpg',
      category: categories[0]._id,
      price: 86.00,
      quantity: 500
    }
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
