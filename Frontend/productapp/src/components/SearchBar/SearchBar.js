import React, { useState } from 'react';
import '../../styles/Seachbar.css';
import '../../styles/Comon.css';
import starred from '../../assert/img/starred.svg';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const handleSearch = () => {
        window.location.replace(`/SearchResults?query=${searchQuery}`);
    }

    return (
        <div className='serchBarContainer'>
            <div class="row">
                <div class="columnSeachbar leftSeachbar" >
                    <form>
                        <div class="input-group">
                            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={searchQuery} onChange={handleInputChange} />
                            <button type="button" class="btn btn-outline-primary searchBTN" onClick={handleSearch}>search</button>
                        </div>
                    </form>
                </div>
                <div class="columnSeachbar spaceSeachbar">
                </div>
                <div class="columnSeachbar middleSeachbar">
                    <a href='/Addproducts' class="btn btn-outline-primary searchBTN">new product</a>
                </div>
                <div class="columnSeachbar rightSeachbar">
                    <div className='border'>
                        <a href='/favourite'>
                            <img src={starred} alt="Admin avatar" className="rounded-circle" width="40" height="40" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
