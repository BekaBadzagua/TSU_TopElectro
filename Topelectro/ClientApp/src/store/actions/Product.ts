import * as actionTypes from './actionTypes'
import axios from 'axios'

// Request Process 
const requestFailed = (payload: any) => ({
    type: actionTypes.REQUEST_FAILED,
    payload: payload
})
const getProductsRequestStart = () => ({
    type: actionTypes.GET_PRODUCTS_REQUEST_START
})
const postProductRequestStart = () => ({
    type: actionTypes.POST_PRODUCT_REQUEST_START
})
const putProductRequestStart = () => ({
    type: actionTypes.PUT_PRODUCT_REQUEST_START
})
const deleteProductRequestStart = () => ({
    type: actionTypes.DELETE_PRODUCT_REQUEST_START
})


// Change Data
const setProducts = (payload: any) => ({
    type: actionTypes.SET_PRODUCTS,
    payload: payload
})
const setLatestProducts = (payload: any) => ({
    type: actionTypes.SET_LATEST_PRODUCTS,
    payload: payload
})
const addProduct = (payload: any) => ({
    type: actionTypes.ADD_PRODUCT,
    payload: payload
})
const editProduct = (payload: any) => ({
    type: actionTypes.EDIT_PRODUCT,
    payload: payload
})
const removeProduct = (payload: any) => ({
    type: actionTypes.REMOVE_PRODUCT,
    payload: payload
})
const changeProductPicture = (payload: any) => ({
    type: actionTypes.CHANGE_PRODUCT_PICTURE,
    payload: payload
})

// Async 
export const get_Products = () => {
    return (dispatch: any) => {
        dispatch(getProductsRequestStart())
        axios.get('api/Products')
            .then(response => {
                dispatch(setProducts(response.data))
            })
            .catch(error => {
                console.log(error)
                dispatch(requestFailed(error))
            })
    }
}
export const get_ByCategory = (descr: string) => {
    return (dispatch: any) => {
        dispatch(getProductsRequestStart())
        axios.get(`api/Products/ByCategory/${descr}`)
            .then(response => {
                dispatch(setProducts(response.data))
            })
            .catch(error => {
                console.log(error)
                dispatch(requestFailed(error))
            })
    } 
}
export const get_ByFilter = (filter:any) => {
    return (dispatch: any) => {
        dispatch(getProductsRequestStart())
        axios.post('api/Products/ByFilter',filter)
            .then(response => {
                dispatch(setProducts(response.data))
            })
            .catch(error => {
                console.log(error)
                dispatch(requestFailed(error))
            })
    } 
}

export const get_LatestNProducts = (num: number) => {
    return (dispatch: any) => {
        dispatch(getProductsRequestStart())
        axios.get(`api/Products/Latest/${num}`)
            .then(response => {
                dispatch(setLatestProducts(response.data))
            })
            .catch(error => {
                console.log(error)
                dispatch(requestFailed(error))
            })
    }
}
export const get_ProductsWithCategories = (num: number) => {
    return (dispatch: any) => {
        dispatch(getProductsRequestStart())

        axios.get(`api/Products/WithCategories/${num}`)
            .then(response => {
                dispatch(setProducts(response.data))
            })
            .catch(error => {
                console.log(error)
                dispatch(requestFailed(error))
            })
    }
}
export const post_Product = (product: any) => {
    return (dispatch: any) => {
        dispatch(postProductRequestStart())
        axios.post('api/Products', product)
            .then((response) => {
                console.log('POST api/Products');
                console.log(response.data);
                dispatch(addProduct(response.data))
            })
            .catch(error => {
                console.log(error)
                dispatch(requestFailed(error))
            })
    }
}
export const post_changeProductPicture = (id: number, formData: any) => {
    return (dispatch: any) => {
        dispatch(postProductRequestStart())
        axios.post(`api/Products/UpdateImage/${id}`, formData)
            .then((response) => {
                console.log(`POST api/Products/UpdateImage/${id}`);
                console.log(response.data);
                const data = {
                    id: id,
                    pictureName: response.data
                }
                dispatch(changeProductPicture(data))
            })
            .catch(error => {
                console.log(error)
                dispatch(requestFailed(error))
            })
    }
}
export const put_product = (product: any) => {
    return (dispatch: any) => {
        dispatch(putProductRequestStart())
        axios.put(`api/Products/${product.id}`, product)
            .then((response) => {
                console.log(`PUT api/Products${product.id}`);
                console.log(response.data);
                dispatch(editProduct(response.data))
            })
            .catch(error => {
                console.log(error)
                dispatch(requestFailed(error))
            })
    }
}
export const delete_product = (id: number) => {
    return (dispatch: any) => {
        dispatch(deleteProductRequestStart())
        axios.delete(`api/Products/${id}`)
            .then((response) => {
                console.log(`DELETE api/Products${id}`);
                console.log(response.data);
                dispatch(removeProduct(id))
            })
            .catch(error => {
                console.log(error)
                dispatch(requestFailed(error))
            })
    }
}
