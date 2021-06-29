import * as actionTypes from '../actions/actionTypes'
import { CategoryState } from '../interfaces'

const initialState: CategoryState = {
    list: undefined,
    shortList: undefined,
    isLoading: false,
    error: null
};

const getCategoryShortListRequestStart = (state: CategoryState) => ({
    ...state,
    isLoading: true
});
const setCategoryShortList = (state: CategoryState, categories: any) => ({
    ...state,
    shortList: categories,
    isLoading: false
})
const requestFailed = (state: CategoryState, error: any) => ({
    ...state,
    error: error,
    isLoading: false
})

export const reducer = (state = initialState, { type, payload }: { type: string; payload: any }) => {
    switch (type) {
        case actionTypes.GET_CATEGORY_SHORTLIST_REQUEST_START: return getCategoryShortListRequestStart(state);
        case actionTypes.SET_CATEGORY_SHORTLIST: return setCategoryShortList(state, payload);

        case actionTypes.REQUEST_FAILED: return requestFailed(state, payload);
        default: return state
    }
}
