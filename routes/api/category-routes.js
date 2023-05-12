const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Product.findAll({
      // include: [Product],
  }).then((categories) => res.json(categories));
});



router.get('/:id', (req, res) => {
  res.send('GET/api/categories/:id', product);
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  res.send('CREATE/api/categories/:id');
  // create a new category
});

router.put('/:id', (req, res) => {
  res.send('UPDATE/api/categories/:id');
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  res.send('DELETE/api/categories/:id');
  // delete a category by its `id` value
});

module.exports = router;