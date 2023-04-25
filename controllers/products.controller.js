const path = require('path')
const products = require('../models/products.model');

exports.getProducts = (req, res)=>{
    res.sendFile(path.join(__dirname + "/../views/products.html"));
}

exports.saveProducts = (req, res)=>{
    const name = req.body.name;
    const price = parseFloat(req.body.price);
    // res.send(`Product name: ${name} and price is ${price} taka`);
    const newProducts = {
        name,
        price
    }
    products.push(newProducts);
    res.status(201).json({
        success : true,
        products
    })
}