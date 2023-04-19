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


//delete Product
//http://localhost:8070/Product/delete/:id
//Delete Request
router.route("/delete/:id").delete(async (req, res)=>{
    let PId = req.params.id;

    await Product.findByIdAndDelete(PId).then(()=>{
        res.status(200).send({status: "Product deleted"});
    }).catch((err)=>{
        console.log(err);
    })
})


//update Product
//http://localhost:8070/Product/updateOne/:id
//update Request
router.route("/updateOne/:id").put(async (req, res) => {
    let product = await Product.findById(req.params.id);
    const data = {
        SKU: req.body.SKU || product.SKU,
        Quantity: req.body.Quantity || product.Quantity,
        ProductName: req.body.ProductName || product.ProductName,
        Image: req.body.Image || product.Image,
        Description: req.body.Description || product.Description,
    };
    product = await Product.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(product);
});
module.exports = router;