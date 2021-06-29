import * as actionTypes from './actionTypes'
import axios from 'axios'

const requestFailed = (payload: any) => ({
    type: actionTypes.REQUEST_FAILED,
    payload: payload
})
const getVacanciesRequestStart = () => ({
    type: actionTypes.GET_VACANCIES_REQUEST_START
})
const postVacancyRequestStart = () => ({
    type: actionTypes.POST_VACANCY_REQUEST_START
})
const putVacancyRequestStart = () => ({
    type: actionTypes.PUT_VACANCY_REQUEST_START
})
const deleteVacancyRequestStart = () => ({
    type: actionTypes.DELETE_VACANCY_REQUEST_START
})

// Change Data
const setVacancies = (payload: any) => ({
    type: actionTypes.SET_VACANCIES,
    payload: payload
})
const addVacancy = (payload: any) => ({
    type: actionTypes.ADD_VACANCY,
    payload: payload
})
const editVacancy = (payload: any) => ({
    type: actionTypes.EDIT_VACANCY,
    payload: payload
})
const removeVacancy = (payload: any) => ({
    type: actionTypes.REMOVE_VACANCY,
    payload: payload
})

// Async 
export const get_Vacancies = () => {
    return (dispatch: any) => {
        dispatch(getVacanciesRequestStart())
        axios.get('api/Vacancy')
            .then(response => {
                dispatch(setVacancies(response.data))
            })
            .catch(error => {
                console.log(error)
                dispatch(requestFailed(error))
            })
    }
}
export const post_Vacancy = (vacancy: any) => {
    return (dispatch: any) => {
        dispatch(postVacancyRequestStart())
        axios.post('api/Vacancy', vacancy)
            .then((response) => {
                console.log('POST api/Vacancy');
                console.log(response.data);
                dispatch(addVacancy(response.data))
            })
            .catch(error => {
                console.log(error)
                dispatch(requestFailed(error))
            })
    }
}
export const put_Vacancy = (vacancy: any) => {
    return (dispatch: any) => {
        dispatch(putVacancyRequestStart())
        axios.put(`api/Vacancy/${vacancy.id}`, vacancy)
            .then((response) => {
                console.log(`PUT api/Vacancy${vacancy.id}`);
                console.log(response.data);
                dispatch(editVacancy(response.data))
            })
            .catch(error => {
                console.log(error)
                dispatch(requestFailed(error))
            })
    }
}
export const delete_Vacancy = (id: number) => {
    return (dispatch: any) => {
        dispatch(deleteVacancyRequestStart())
        axios.delete(`api/Vacancy/${id}`)
            .then((response) => {
                console.log(`DELETE api/Vacancy${id}`);
                console.log(response.data);
                dispatch(removeVacancy(id))
            })
            .catch(error => {
                console.log(error)
                dispatch(requestFailed(error))
            })
    }
}

