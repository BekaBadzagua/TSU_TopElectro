import * as actionTypes from './actionTypes'
import axios from 'axios'

const requestFailed = (payload: any) => ({
    type: actionTypes.REQUEST_FAILED,
    payload: payload
})
const getCategoryShortListStart = () => ({
    type: actionTypes.GET_CATEGORY_SHORTLIST_REQUEST_START,
})
const setCategoryShortList = (payload: any) => ({
    type: actionTypes.SET_CATEGORY_SHORTLIST,
    payload: payload
})

// Async
export const get_Category_ShortList = () => {
    return (dispatch: any) => {
        dispatch(getCategoryShortListStart())
        axios.get('api/Categories/ShortList')
            .then(response => {
                dispatch(setCategoryShortList(response.data))
            })
            .catch(error => {
                console.log(error)
                dispatch(requestFailed(error))
            })
    }
}