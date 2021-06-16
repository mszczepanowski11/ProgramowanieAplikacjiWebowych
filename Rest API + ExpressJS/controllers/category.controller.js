const Category = require('../models/category.model');

const category = [];

exports.getAll = (req, res) => {
    res.status(200).send(category)
  };

exports.add = (req, res) => {
    console.log(req.body);
    const product = new Category(req.body.id,req.body.name,req.body.quantity);
     products.push(product);
    res.status(201).send(product);
}

exports.update = (req,res) => {
    const newCategory = new Category(req.body.id,req.body.name,req.body.quantity)
    const categoryIndex = category.findIndex(category => category.id === req.body.id)

    category.splice(categoryIndex, 1,newCategory)
    res.status(200).send(newCategory)
}

exports.delete = (req,res) => {
    console.log(req.params.id);
    const categoryIndex = category.findIndex(category => category.id === req.params.id)
    
    const deletedCategory = products.splice(searchIndex, 1)
    res.status(200).send(deletedCategory)
}