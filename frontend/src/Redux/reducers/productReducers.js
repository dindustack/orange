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
          productsCount: action.payload.productsCount,
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