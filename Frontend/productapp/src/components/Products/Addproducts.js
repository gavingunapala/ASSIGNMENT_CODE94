import React from 'react';
import '../../styles/Addproductcss.css';
import '../../styles/Comon.css';

const Addproducts = () => {
    return (
        <div className='marginToAddForm container'>

            <div class="row navTitle">
                <a href='/' class="column left titleProduct Productscolor">  Products &gt; </a>
                <div class="column right subTitleProduct">
                    add new product
                </div>
            </div>

            <form className='container'>
                <div class="form-group row">
                    <label for="SKU" class="col-md-2 col-form-label">SKU</label>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="SKU" placeholder="SKU" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="Name" class="col-md-2 col-form-label">Name</label>
                    <div class="col-md-4">
                        <input type="text" class="form-control" placeholder="Name" />
                    </div>
                    <label for="QUT" class="col-md-1 col-form-label">QUT</label>
                    <div class="col-md-4">
                        <input type="number" class="form-control" placeholder="QUT" />
                    </div>
                </div>
                <div class="form-group col-md-11">
                    <label class="form-label" for="textAreaExample">Product Description</label>
                    <textarea class="form-control " id="textAreaExample1" rows="4"></textarea>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>


        </div>
    );
};

export default Addproducts;
