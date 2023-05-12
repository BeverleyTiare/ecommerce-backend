const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

//Require Sequelize??
//Require tag init??

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  res.send('GET/api/productTags', productData);
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  res.send('GET /api/productTag/:id', productData,);
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  res.send('CREATE/api/productTag/:id')
  // create a new tag
});

router.put('/:id', (req, res) => {
  res.send('UPDATE/api/productTag/: id')
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  res.send('DELETE /api/productTag/:id');
  // delete on tag by its `id` value
});

module.exports = router

//Check above: 
//maybe chnage as per other route files
