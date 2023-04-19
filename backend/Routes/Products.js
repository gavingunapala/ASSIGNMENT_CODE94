const router = require("express").Router();
const { request } = require("express");
let Product = require("../Models/Product");

//add data to admin table
//./Product/add
//Post request
//http://localhost:8070/Product/add
router.route("/add").post((req, res) => {
    const SKU = req.body.SKU;
    const Quantity = req.body.Quantity;
    const ProductName = req.body.ProductName;
    const Image = req.body.Image;
    const Description = req.body.Description;

    const newProduct = new Product({
        SKU,
        Quantity,
        ProductName,
        Image,
        Description
    })

    newProduct.save().then(() => {
        res.json("Product Added")
    }).catch((err) => {
        console.log(err);
    })
})

//get all Product
//http://localhost:8070/Product/
//Get Request
router.route("/").get((req, res) => {
    Product.find().then((Product) => {
        res.json(Product)
    }).catch((err) => {
        console.log(err)
    })
})

//get one Product fom id
//http://localhost:8070/Product/get/:id
//find one of the Product
router.route("/get/:id").get((req,res)=>{
    let id = req.params.id;
    Product.findById(id).then((Product)=>{
        res.json(Product)
    }).catch((err)=>{
        console.log(err);
    })
})
module.exports = router;