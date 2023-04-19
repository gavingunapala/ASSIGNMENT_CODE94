import React, { useEffect } from 'react';
import '../../styles/Comon.css';
import axios from 'axios';
import ProductTable from '../ProductTable/ProductTable';

//import SearchBar
import SearchBar from '../SearchBar/SearchBar';

const ProductHome = () => {

    return (
        <div className='marginToAddForm container'>
            <div class="row navTitle">
                <a href='/' class="column left titleProduct Productscolor">Products</a>
            </div>
            <SearchBar />
            {/* calling to the full product table */}
            <ProductTable />
        </div>
    );
};

export default ProductHome;
