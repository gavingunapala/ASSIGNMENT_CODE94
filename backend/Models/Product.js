const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Productschema = new schema({
    SKU :{
        type : String,
        required: true
    },
    Quantity : {
        type : String,
        required : true
    },
    ProductName : {
        type : String,
        required : true
    },
    Image : {
        type : String,
        required : true
    },
    Description : {
        type : String,
        required : true
    }
})

// table and path
const Product = mongoose.model("Product",Productschema);


//must export this file.
module.exports = Product;