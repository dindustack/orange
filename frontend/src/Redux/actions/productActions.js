import axios from 'axios';
import { ActionCreator }  from '../../Utils/index';
import * as Products from '../constants/productConstants.js';

// Fetch products
export const getProducts = () => async (dispatch) => {
    try {
        dispatch(ActionCreator(Products.ALL_PRODUCTS_REQUEST))

        const { data } = await axios.get('/api/v1/products')

        dispatch(ActionCreator(Products.ALL_PRODUCTS_SUCCESS, data))

    } catch (error) {
        dispatch(ActionCreator(Products.ALL_PRODUCTS_FAILURE, error.response.data.message
        ))
    }
}


// Fetch products details
export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch(ActionCreator(Products.PRODUCT_DETAILS_REQUEST));

        const { data } = await axios.get(`/api/v1/product/${id}`)

        dispatch(ActionCreator(Products.PRODUCT_DETAILS_SUCCESS, data.product));

    } catch (error) {
        dispatch(ActionCreator(Products.PRODUCT_DETAILS_FAILURE, error.response.data.message
        ))
    }
}

// Clear Errors 
export const clearErrors = () => async (dispatch) => {
    dispatch(ActionCreator(Products.CLEAR_ERRORS))
}