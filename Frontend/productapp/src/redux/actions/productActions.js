import { ActionTypes } from "../constants/action-types"

//for add product
export const setProduct =(products)=>{
    return{
        type : ActionTypes.SET_PRODUCTS,
        payload:products,
    };
};

//for select prooduct
export const selectedProduct =(products)=>{
    return{
        type : ActionTypes.SELECTED_PRODUCT,
        payload:products,
    };
};