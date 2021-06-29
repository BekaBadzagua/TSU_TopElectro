import * as actionTypes from '../actions/actionTypes'
import { VacancyState } from '../interfaces'

const initialState: VacancyState = {
    list: undefined,
    isLoading: false,
    error: null
};

const vacancyRequestStart = (state: VacancyState) => ({
    ...state,
    isLoading: true
});
const requestFailed = (state: VacancyState, error: any) => ({
    ...state,
    error: error,
    isLoading: false
})

const setVacancies = (state: VacancyState, vacancies: any) => ({
    ...state,
    list: vacancies,
    isLoading: false
})


const addVacancy = (state: VacancyState, vacancy: any) => {
    let vacancies = null;
    state.list ? vacancies = [vacancy, ...state.list] : vacancies = [vacancy]
    return {
        ...state,
        list: vacancies,
        isLoading: false
    }
}
const editVacancy = (state: any, vacancy: any) => {
    let vacancies = null;
    if(state.list){
        vacancies = [...state.list];
        let ind = vacancies.findIndex(x => x.id === vacancy.id)
        vacancies[ind] = vacancy
    }

    return {
        ...state,
        list: vacancies,
        isLoading: false
    }
}
const removeVacancy = (state: any, id: number) => {
    let vacancies = null
    if (state.list) {
        vacancies = [...state.list].filter(x => x.id !== id)
    }
    return {
        ...state,
        list: vacancies,
        isLoading: false
    }
}


export const reducer = (state = initialState, { type, payload }: { type: string; payload: any }) => {
    switch (type) {
        case actionTypes.GET_VACANCIES_REQUEST_START:
        case actionTypes.POST_VACANCY_REQUEST_START:
        case actionTypes.PUT_VACANCY_REQUEST_START:
        case actionTypes.DELETE_VACANCY_REQUEST_START: return vacancyRequestStart(state);

        case actionTypes.SET_VACANCIES: return setVacancies(state, payload);
        case actionTypes.ADD_VACANCY: return addVacancy(state, payload);
        case actionTypes.EDIT_VACANCY: return editVacancy(state, payload);
        case actionTypes.REMOVE_VACANCY: return removeVacancy(state, payload);

        case actionTypes.REQUEST_FAILED: return requestFailed(state, payload);
        default: return state
    }
}
