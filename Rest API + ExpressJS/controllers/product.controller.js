const Product = require('../models/product.model');

const products = [];

exports.getAll = (req, res) => {
    res.status(200).send(products);
  };

exports.add = (req, res) => {
  console.log(req.body);
  const product = new Product(req.body.id,req.body.name, req.body.description, req.body.price);
  products.push(product);
  res.status(201).send(product);
}

exports.update = (req, res) => {
    const newProduct = new Product(req.body.id,req.body.name, req.body.description, req.body.price)
    const searchIndex = products.findIndex(product => product.id === req.body.id)

    product.splice(searchIndex, 1,product)
    res.status(200).send(newProduct)
}

exports.delete = (req, res) => {
  console.log(req.params.id);
  const searchIndex = products.findIndex(product => product.id === req.params.id)
  
  const deletedProduct = products.splice(searchIndex, 1)
  res.status(200).send(deletedProduct)
}