import React, { ReactElement, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'

import CenteredModal from '../../UI/Modals/BootstrapModals/CenteredModalWithClose';
import AddForm from './Modals/AddForm';
import EditForm from './Modals/EditForm';

import cls from './Vacancies.module.css'

function Vacancies(props: any): ReactElement {
    const { vacancies, getVacancies } = props

    const [chosenVacancyId, setChosenVacancyId] = useState(null);
    const deleteHandler = (id: number) => {
        props.deleteVacancy(id)
    }

    useEffect(() => {
        if (vacancies === undefined)
            getVacancies()
    }, [vacancies, getVacancies])

    let vacancyList: any[] = [];
    if (props.vacancies !== undefined) {
        vacancyList = props.vacancies.map((item: any, ind: any) => {
            
            return (
                <tr key={ind + 1}>
                    <td>{ind + 1}</td>
                    <td>{item.position}</td>
                    <td>
                        <div className="dropdown">
                            <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                ქმედება</button>

                            <div className={["dropdown-menu", cls.DropDownMenu].join(' ')} aria-labelledby="dropdownMenuButton">
                                <span className="dropdown-item"
                                    data-toggle="modal"
                                    data-target="#vacancyEditModal"
                                    onClick={() => setChosenVacancyId(ind)} >რედაქტირება</span>
                                    
                                <span className="dropdown-item"
                                    onClick={() => deleteHandler(item.id)}>წაშლა</span>
                            </div>
                        </div>
                    </td>
                </tr>
            )
        });
    }


    return (
        <div>
            <h2 className="align-center">ვაკანსიები</h2>
            <div className="align-right">
                <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#vacancyAddModal">
                    ვაკანსიის დამატება
                </button>
            </div>

            <div className={cls.TableWrapper} style={{ backgroundColor: "#fff" }}>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th scope="col">პოზიცია</th>
                            <th scope="col">ქმედება</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vacancyList}
                    </tbody>
                </table>
            </div>

            <CenteredModal header="ვაკანსიის დამატება" id="vacancyAddModal">
                <AddForm />
            </CenteredModal>
            <CenteredModal header="ვაკანსიის რედაქტირება" id="vacancyEditModal">
                {chosenVacancyId !== null && chosenVacancyId !== undefined ? <EditForm vacancy={props.vacancies[String(chosenVacancyId)]} /> : null}
            </CenteredModal>
        </div>
    )
}


const mapStateToProps = (state: any) => ({
    vacancies: state.vacancies.list,
})

const mapDispatchToProps = (dispatch: any) => ({
    getVacancies: () => dispatch(actions.get_Vacancies()),
    deleteVacancy: (id:number) => dispatch(actions.delete_Vacancy(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Vacancies) 