import React from 'react';
import '../../styles/Seachbar.css';
import '../../styles/Comon.css';
import starred from '../../assert/img/starred.svg';

const SearchBar = () => {
    return (
        <div className='serchBarContainer'>
            <div class="row">
                <div class="column left" >
                    <form>
                        <div class="input-group">
                            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            <button type="button" class="btn btn-outline-primary searchBTN">search</button>
                        </div>
                    </form>
                </div>
                <div class="column space">
                </div>
                <div class="column middle">
                    <button type="button" class="btn btn-outline-primary searchBTN">new product</button>
                </div>
                <div class="column right">
                    <div className='border'>
                        <img src={starred} alt="Admin avatar" className="rounded-circle" width="40" height="40" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SearchBar;