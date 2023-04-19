import React from 'react';
import '../../styles/Comon.css';

//import SearchBar
import SearchBar from '../SearchBar/SearchBar';

const ProductHome = () => {
    return (
        <div className='marginToAddForm container'>
            <div class="row navTitle">
                <div class="column left titleProduct" >
                    Products
                </div>
            </div>
            <SearchBar/>

        </div>
    );
};

export default ProductHome;
