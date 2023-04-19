import React, { useState, useEffect } from "react"
import '../../styles/Addproductcss.css';
import '../../styles/Comon.css';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../../redux/actions/productActions';

const ProductDetailPage = () => {

    //variabls
    const product = useSelector((state) => state.product);
    const { id } = useParams();
    const dispatch = useDispatch();

    const [SKUState, setSKU] = useState("");
    const [QuantityState, setQuantity] = useState("");
    const [ProductNameState, setProductName] = useState("");
    const [ImageState, setImage] = useState("");
    const [DescriptionState, setDescription] = useState("");

    //initial state
    const [details] = useState({
        SKU: '',
        Quantity: '',
        ProductName: '',
        Image: '',
        Description: '',
    })
    //edit save
    const ChangeOnClick = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("SKU",SKUState );
        formData.append("Quantity", QuantityState);
        formData.append("ProductName", ProductNameState);
        formData.append("Image", ImageState);
        formData.append("Description", DescriptionState);
        
        details.SKU = formData.get('SKU');
        details.Quantity = formData.get('Quantity');
        details.ProductName = formData.get('ProductName');
        details.Image = formData.get('Image');
        details.Description = formData.get('Description');

        console.log('details.count', details)


        await axios.put(`http://localhost:8070/Product/updateOne/${id}`,details)
            .then(res => {
                alert("Update Success!!");
                window.location = "/";
            })
            .catch(err => {
                alert("Update Failed!!");
                console.log(err);
            });
    }

    //destructure
    const { SKU, Quantity, _id, Image, ProductName, PRICE } = product;

    //fetch detales of the relevent product
    const fetchOneProductDetails = async () => {
        const response = await axios.get(`http://localhost:8070/Product/get/${id}`).catch(err => {
        })
        setSKU(response.data.SKU)
        setQuantity(response.data.Quantity)
        setProductName(response.data.ProductName)
        setImage(response.data.Image)
        setDescription(response.data.Description)
        dispatch(selectedProduct(response.data));
    }

    useEffect(() => {
        if (id && id !== "") fetchOneProductDetails();
        return () => {
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
                        <input type="text" class="form-control" id="SKU" placeholder={SKUState}
                            name="SKUState"
                            value={SKUState}
                            onChange={e => setSKU(e.target.value)} />
                    </div>
                </div>
                <div class="form-group row rowgap">
                    <label for="Name" class="col-md-2 col-form-label lableforTXT">Name</label>
                    <div class="col-md-4">
                        <input type="text" class="form-control" placeholder={ProductName}
                            name="ProductNameState"
                            value={ProductNameState}
                            onChange={e => setProductName(e.target.value)} />
                    </div>
                    <label for="QUT" class="col-md-1 col-form-label lableforTXT">QUT</label>
                    <div class="col-md-4">
                        <input type="number" class="form-control" placeholder={Quantity}
                            name="QuantityState"
                            value={QuantityState}
                            onChange={e => setQuantity(e.target.value)} />
                    </div>
                </div>
                <div class="form-group col-md-11 rowgap">
                    <label class="form-label lableforTXT" for="textAreaExample ">Product Description</label>
                    <br />
                    <label class="form-label ashcolor discriptiontext" for="textAreaExampl ">A small Discription about the product</label>
                    <textarea class="form-control " id="textAreaExample1" rows="4"
                        name="DescriptionState"
                        value={DescriptionState}
                        onChange={e => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div class="form-group col-md-2 rowgap buttonfloat">
                    <button class="btn btn-primary btnSubmit" type="submit"   onClick={(e) => ChangeOnClick(e)}>Save Changes</button>
                </div>
            </form>
        </div>
    );
};

export default ProductDetailPage;
