const router = require("express").Router();
const { request } = require("express");
let Product = require("../Models/Product");

//add data to admin table
//./Product/add
//Post request
//http://localhost:8070/Product/add
router.route("/add").post((req,res)=>{
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

    newProduct.save().then(()=>{
        res.json("Product Added")
    }).catch((err)=>{
        console.log(err);
    })
})
module.exports = router;