import React, { useEffect } from 'react';
import axios from 'axios';
import '../../styles/Table.css';
//redux
import { useDispatch, useSelector } from 'react-redux'
import { setProduct } from "../../redux/actions/productActions"

import deleteicon from '../../assert/img/delete-icon.svg';
import editicon from '../../assert/img/edit-icon.svg';

const ProductTable = () => {

    //variables
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    //fetch products
    const fetchAllProducts = async () => {
        const response = await axios.get(
            "http://localhost:8070/Product/"
        ).catch((err) => {
            console.log(
                "error", err
            )
        })
        dispatch(setProduct(response.data))
    }


    useEffect(() => {
        fetchAllProducts()
    }, [])

    console.log("products : ", products);

    return (
        <div >
            <table class="table">
                <thead>
                    <tr>
                        <th className='tablecol' scope="col">SKU</th>
                        <th className='tablecol' scope="col">IMAGE</th>
                        <th className='tablecol' scope="col">PRODUCT NAME</th>
                        <th className='tablecol' scope="col">PRICE</th>
                        <th className='tablecol' scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        //destructure data
                        const { SKU, Quantity, id, Image, ProductName, PRICE } = product;
                        return (
                            <>
                                <tr>
                                    <td>{SKU}</td>
                                    <td> {Image}</td>
                                    <td>{ProductName}</td>
                                    <td>{Quantity}</td>
                                    <td>
                                        <a href="#delete"><img src={deleteicon} alt="Admin avatar" className="rounded-circle " width="30" height="30" /></a>
                                        <a href="#edit"><img src={editicon} alt="Admin avatar" className="rounded-circle " width="30" height="30" /></a>
                                    </td>
                                </tr>
                            </>
                        )
                    })}

                </tbody>
            </table>

        </div>
    );
};

export default ProductTable;

