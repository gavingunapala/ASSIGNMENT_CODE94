import React from 'react';
import '../../styles/Comon.css';

//import SearchBar
import SearchBar from '../SearchBar/SearchBar';

//redux
import {useSelector} from 'react-redux'

const ProductHome = () => {

    //variables
    const products = useSelector((state)=>state.allProducts.products);
    console.log(products);

    //destructure
    const {SKU , Quantity } = products[0];

    return (
        <div className='marginToAddForm container'>
            <div class="row navTitle">
                <div class="column left titleProduct" >
                    Products
                </div>
            </div>
            <SearchBar/>

            {SKU}  {Quantity}

        </div>
    );
};

export default ProductHome;
