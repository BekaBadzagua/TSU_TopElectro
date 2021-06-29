import * as actionTypes from '../actions/actionTypes'
import { ProductState } from '../interfaces'

const initialState: ProductState = {
    list: undefined,
    latest: undefined,
    isLoading: false,
    error: null
};

const ProductsRequestStart = (state: ProductState) => ({
    ...state,
    isLoading: true
});
const requestFailed = (state: ProductState, error: any) => ({
    ...state,
    error: error,
    isLoading: false
})

const setProducts = (state: ProductState, products: any) => ({
    ...state,
    list: products,
    isLoading: false
})
const setLatestProducts = (state: ProductState, products: any) => ({
    ...state,
    latest: products,
    isLoading: false
})

const addProduct = (state: ProductState, product: any) => {
    let products = null;
    state.list ? products = [product, ...state.list] : products = [product]
    return {
        ...state,
        list: products,
        isLoading: false
    }
}
const editProduct = (state: any, product: any) => {
    
    let products = null;
    if(state.list){
        products = [...state.list];
        let ind = products.findIndex(x => x.id === product.id)
        products[ind] = product
    }

    return {
        ...state,
        list: products,
        isLoading: false
    }
}
const removeProduct = (state: any, id: number) => {
    let products = null
    if (state.list) {
        products = [...state.list].filter(x => x.id !== id)
    }
    return {
        ...state,
        list: products,
        isLoading: false
    }
}
const changeProductPicture = (state: any, data: any) => {
    let products = null
    if (state.list) {
        products = [...state.list]
        let ind = products.findIndex(x => x.id === data.id)
        let prod = {...products[ind]}
        prod.picture = data.pictureName
        products[ind] = prod;
    }
    return {
        ...state,
        list: products,
        isLoading: false
    }
}

export const reducer = (state = initialState, { type, payload }: { type: string; payload: any }) => {
    switch (type) {
        case actionTypes.GET_PRODUCTS_REQUEST_START:
        case actionTypes.POST_PRODUCT_REQUEST_START:
        case actionTypes.PUT_PRODUCT_REQUEST_START:
        case actionTypes.DELETE_PRODUCT_REQUEST_START: return ProductsRequestStart(state);

        case actionTypes.SET_PRODUCTS: return setProducts(state, payload);
        case actionTypes.SET_LATEST_PRODUCTS: return setLatestProducts(state, payload);
        case actionTypes.ADD_PRODUCT: return addProduct(state, payload);
        case actionTypes.EDIT_PRODUCT: return editProduct(state, payload);
        case actionTypes.REMOVE_PRODUCT: return removeProduct(state, payload);
        case actionTypes.CHANGE_PRODUCT_PICTURE: return changeProductPicture(state, payload);

        case actionTypes.REQUEST_FAILED: return requestFailed(state, payload);
        default: return state
    }
}
