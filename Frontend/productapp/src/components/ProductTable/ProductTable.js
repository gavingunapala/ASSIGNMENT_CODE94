import React, { useEffect } from 'react';
import axios from 'axios';
import '../../styles/Table.css';
//redux
import { useDispatch, useSelector } from 'react-redux'
import { setProduct, deleteProduct } from "../../redux/actions/productActions"

import deleteicon from '../../assert/img/delete-icon.svg';
import editicon from '../../assert/img/edit-icon.svg';

import swal from 'sweetalert';


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
    }, [products])

    console.log("products : ", products);

    //delete products 
    const deleteProduct = (data) => {
        swal({
          title: "Are you sure?",
          text: "you will not be able to undo this action if you product",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            axios
              .delete(`http://localhost:8070/Product/delete/${data}`)
              .then(() => {
                swal("", {
                  icon: "success",
                });
                // Call the deleteProduct action
                // dispatch(deleteProduct());
              })
              .catch((err) => {
                swal("Oops! Something went wrong!", err.message, "error");
              });
          } else {
            // swal("Your product is safe!");
          }
        });
      };



    
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
                        const { SKU, Quantity, _id, Image, ProductName, PRICE } = product;

                        return (
                            <>
                                <tr>
                                    <td>{SKU}</td>
                                    <td> {Image}</td>
                                    <td>{ProductName}</td>
                                    <td>{Quantity}</td>
                                    <td>
                                        <button onClick={() => deleteProduct(_id)} className='buttonInTable'><img src={deleteicon} alt="Admin avatar" className="rounded-circle " width="30" height="30" /></button >
                                        <a href={`/ProductDetailPage/${_id}`}><img src={editicon} alt="Admin avatar" className="rounded-circle " width="30" height="30" /></a>
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

