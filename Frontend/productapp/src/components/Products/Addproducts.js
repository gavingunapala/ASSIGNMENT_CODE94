import React, { useState } from 'react';
import axios from "axios";
import '../../styles/Addproductcss.css';
import '../../styles/Comon.css';
import { useFormik } from 'formik';

const Addproducts = () => {

    //Hook
    const ProductDetails = useFormik({
        initialValues: {
            SKU: '',
            Quantity: '',
            ProductName: '',
            Image: '',
            Description: '',
        },
        onSubmit: values => {
            const formData = new FormData();
            formData.append('SKU', values.SKU);
            formData.append('Quantity', values.Quantity);
            formData.append('ProductName', values.ProductName);
            formData.append('Image', values.Image);
            formData.append('Description', values.Description);


            ProductDetails.SKU = formData.get('SKU');
            ProductDetails.Quantity = formData.get('Quantity');
            ProductDetails.ProductName = formData.get('ProductName');
            ProductDetails.Image = formData.get('Image');
            ProductDetails.Description = formData.get('Description')
            console.log(ProductDetails.values)

            axios.post("http://localhost:8070/Product/add", ProductDetails.values).then(() => {
                alert("Current Process added successfully!!!");
                window.location = "/";
            }).catch((err) => {
                alert(err);
            })
        }
    });

    return (
        <div className='marginToAddForm container'>

            <div class="row navTitle">
                <a href='/' class="column left titleProduct Productscolor">  PRODUCTS &gt; </a>
                <div class="column right subTitleProduct">
                    add new product
                </div>
            </div>

            <form className='container'>
                <div class="form-group row rowgap">
                    <label for="SKU" class="col-md-2 col-form-label lableforTXT">SKU</label>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="SKU" placeholder="sku"

                            name="SKU"
                            onChange={ProductDetails.handleChange} />
                    </div>
                </div>
                <div class="form-group row rowgap">
                    <label for="Name" class="col-md-2 col-form-label lableforTXT">Name</label>
                    <div class="col-md-4">
                        <input type="text" class="form-control" placeholder="Name" name="ProductName" onChange={ProductDetails.handleChange} value={ProductDetails.values.ProductName} />
                    </div>
                    <label for="QUT" class="col-md-1 col-form-label lableforTXT">QUT</label>
                    <div class="col-md-4">
                        <input type="number" class="form-control" placeholder="QUT" name="Quantity" onChange={ProductDetails.handleChange} value={ProductDetails.values.Quantity} />
                    </div>
                </div>
                <div class="form-group col-md-11 rowgap">
                    <label class="form-label lableforTXT" for="textAreaExample ">Product Description</label>
                    <br />
                    <label class="form-label ashcolor discriptiontext" for="textAreaExampl ">A small Discription about the product</label>

                    <textarea class="form-control " id="textAreaExample1" rows="4" name="Description" onChange={ProductDetails.handleChange} value={ProductDetails.values.Description}></textarea>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label">product Images</label>
                    <br />
                    <label class="form-label ashcolor discriptiontext" for="textAreaExampl ">JPG , SVG or GIF</label>
                    <input class="form-control" type="file" id="formFile" name="Image" onChange={ProductDetails.handleChange}/>
                </div>
                <div class="form-group col-md-2 rowgap buttonfloat">
                    <button class="btn btn-primary btnSubmit" type="submit" onClick={ProductDetails.handleSubmit}>Add Product</button>
                </div>
            </form>


        </div>
    );
};

export default Addproducts;
