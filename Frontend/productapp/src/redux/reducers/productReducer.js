import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [
        {
            SKU: 1,
            Quantity: "title",
            Product: "cat",
            Images:"images",
            Description:"description",
        }
    ]
}
export const productReducer = (state =initialState , {type,payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;

        default:
            return state;
    }
}