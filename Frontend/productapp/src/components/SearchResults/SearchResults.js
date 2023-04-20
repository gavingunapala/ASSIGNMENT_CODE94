import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../../styles/Seachbar.css';
import '../../styles/Comon.css';
import '../../styles/SearchResults.css';


import SearchBar from '../SearchBar/SearchBar';
import arrow from '../../assert/img/arrow.svg';


const SearchResults = () => {

    //get url and serch variable  
    const params = new URLSearchParams(window.location.search);
    const query = params.get('query');
    console.log(query);

    const [serchDetails, setSerchDetails] = useState([]);
    const [arrayLength, setArrayLength] = useState('');

    //serch details from database
    const searchFormDataBase = async (searchQuery) => {
        const response = await axios.get(
            `http://localhost:8070/Product/search?query=${query}`
        ).catch((err) => {
            console.log("error", err);
        });
        setSerchDetails(response.data);
        setArrayLength(response.data.length)
    };

    useEffect(() => {
        searchFormDataBase()
    }, [])


    return (
        <div className='serchBarContainer'>
            <div className='container'>
                <div class="row navTitle">
                    <a href='/' class="column left titleProduct Productscolor">Products</a>
                </div>
                <SearchBar />

                {arrayLength} results found for ' {query} '
                <div className='container'>

                    {serchDetails.map((Details) => {
                        return (
                            <>
                                <div class="rowSearchResult">
                                    <div class="columnSearchResult leftSearchResult">
                                        <p>{Details.SKU}</p>
                                        <h4>{Details.ProductName}</h4>
                                        <p>{Details.Description}</p>
                                    </div>
                                    <div class="columnSearchResult rightSearchResult" >
                                    <a href={`/ProductDetailPage/${Details._id}`}><img src={arrow} alt="Admin avatar" className="rounded-circle" width="50" height="50" /></a>
                                    </div>
                                </div>
                                <hr />
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default SearchResults;