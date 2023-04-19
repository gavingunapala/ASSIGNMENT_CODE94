import React, { useEffect } from 'react';
import '../../styles/Addproductcss.css';
import '../../styles/Comon.css';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct ,removeSelectedProduct} from '../../redux/actions/productActions';

const ProductDetailPage = () => {

    //variabls
    const product = useSelector((state) => state.product );
    const { id } = useParams();
    const dispatch = useDispatch();
   
   //destructure
   const { SKU, Quantity, _id, Image, ProductName, PRICE } = product;

    //fetch detales of the relevent product
    const fetchOneProductDetails = async () => {
        const response = await axios.get(`http://localhost:8070/Product/get/${id}`).catch(err => {
            console.log('error', err)
        })
        
        dispatch(selectedProduct(response.data));
    }

    useEffect(() => {
        if (id && id !== "") fetchOneProductDetails();

        return()=>{
            dispatch(removeSelectedProduct());
        }
       
    }, [id])

   

    return (
        <div className='marginToAddForm container'>

            <div class="row navTitle">
                <a href='/' class="column left titleProduct Productscolor">  Products &gt; </a>
                <div class="column right subTitleProduct">
                    Edit Product
                </div>
            </div>

            <form className='container'>
                <div class="form-group row rowgap">
                    <label for="SKU" class="col-md-2 col-form-label lableforTXT">SKU</label>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="SKU" placeholder={SKU} />
                    </div>
                </div>
                <div class="form-group row rowgap">
                    <label for="Name" class="col-md-2 col-form-label lableforTXT">Name</label>
                    <div class="col-md-4">
                        <input type="text" class="form-control" placeholder={ProductName} />
                    </div>
                    <label for="QUT" class="col-md-1 col-form-label lableforTXT">QUT</label>
                    <div class="col-md-4">
                        <input type="number" class="form-control" placeholder={Quantity} />
                    </div>
                </div>
                <div class="form-group col-md-11 rowgap">
                    <label class="form-label lableforTXT" for="textAreaExample ">Product Description</label>
                    <br />
                    <label class="form-label ashcolor discriptiontext" for="textAreaExampl ">A small Discription about the product</label>

                    <textarea class="form-control " id="textAreaExample1" rows="4"></textarea>
                </div>
                <div class="form-group col-md-2 rowgap buttonfloat">
                    <button class="btn btn-primary btnSubmit" type="submit">Add Product</button>
                </div>
            </form>


        </div>
    );
};

export default ProductDetailPage;
