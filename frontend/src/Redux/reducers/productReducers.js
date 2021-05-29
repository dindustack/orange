import * as Products from '../constants/productConstants.js';

export const productsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case Products.ALL_PRODUCTS_REQUEST:
        return {
          loading: true,
          products: [],
        };
      case Products.ALL_PRODUCTS_SUCCESS:
        return {
          loading: false,
          products: action.payload.products,
          productsCount: action.payload.productCount,
        };
      case Products.ALL_PRODUCTS_FAILURE:
        return {
          loading: false,
          error: action.payload,
        };
      case Products.CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
}

export const productDetailsReducer = (state = {product: {} }, action) => {
  switch(action.type) {

    case Products.PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case Products.PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload
      }
    case Products.PRODUCT_DETAILS_FAILURE:
      return {
        ...state,
        error: action.payload
      }
      case Products.CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
  }
}