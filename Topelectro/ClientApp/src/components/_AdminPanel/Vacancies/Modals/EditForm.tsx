import React, { ReactElement, useEffect, useState, useCallback } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../../store/actions/index'
import { GenerateInputForms, InputChangeHandler, FormIsValid } from '../../../../shared/InputTools'
import 'react-quill/dist/quill.snow.css'
const ReactQuill = require('react-quill')

function EditForm(props: any): ReactElement {
    const [inputData, setInputData]: [any, any] = useState({
        form_position: {
            elementConfig: { name: "form_position", type: "text", placeholder: "პოზიცია" },
            elementType: "input",
            label: "პოზიცია*",
            invalid: false,
            value: props.vacancy.position ? props.vacancy.position : "",
            rules: { required: true }
        },
        form_salary: {
            elementConfig: { name: "form_salary", type: "text", placeholder: "000 ლარი" },
            elementType: "input",
            label: "ანაზღაურება",
            invalid: false,
            value: props.vacancy.salary ? props.vacancy.salary : "",
            rules: { required: false }
        },
        form_location: {
            elementConfig: { name: "form_location", type: "text", placeholder: "მდებარეობა..." },
            elementType: "input",
            label: "მდებარეობა",
            invalid: false,
            value: props.vacancy.location ? props.vacancy.location : "",
            rules: { required: false }
        },
        form_employmentForm: {
            elementConfig: { name: "form_employmentForm", type: "text", placeholder: "სრული/ნახევარი განაკვეთი..." },
            elementType: "input",
            label: "დასაქმების ფორმა",
            invalid: false,
            value: props.vacancy.employmentForm ? props.vacancy.employmentForm : "",
            rules: { required: false }
        },
        form_workHours: {
            elementConfig: { name: "form_workHours", type: "text", placeholder: "00:00 - 24:00" },
            elementType: "input",
            label: "სამუშაო საათები",
            invalid: false,
            value: props.vacancy.workHours ? props.vacancy.workHours : "",
            rules: { required: false }
        },
        form_restPeriod: {
            elementConfig: { name: "form_restPeriod", type: "text", placeholder: "0-სთ" },
            elementType: "input",
            label: "შესვენება",
            invalid: false,
            value: props.vacancy.restPeriod ? props.vacancy.restPeriod : "",
            rules: { required: false }
        },
        form_description: {
            elementConfig: { name: "form_description", type: "text", placeholder: "აღწერა..." },
            elementType: "textarea",
            label: "აღწერა*",
            invalid: false,
            value: props.vacancy.description ? props.vacancy.description : "",
            rules: { required: false }
        },
        form_id: {
            elementConfig: { name: "form_id", type: "text", disabled: true },
            elementType: "input",
            label: "Id",
            invalid: false,
            value: props.vacancy.id ? props.vacancy.id : "",
            rules: { required: false }
        },
    });

    const [textAreaValue, settextAreaValue] = useState("");
    const textAreaChangeHandler = (value: any) => {
        settextAreaValue(value)
    }
    const changeHandler = (event: any) => {
        InputChangeHandler(event, inputData, setInputData)
    }

    const PopulateModal = useCallback(() => {
        if (inputData.form_id.value !== props.vacancy.id) {
            let data: any = {
                ...inputData,
                form_position: {
                    ...inputData.form_position,
                    value: props.vacancy.position ? props.vacancy.position : ""
                },
                form_salary: {
                    ...inputData.form_salary,
                    value: props.vacancy.salary ? props.vacancy.salary : ""
                },
                form_location: {
                    ...inputData.form_location,
                    value: props.vacancy.location ? props.vacancy.location : ""
                },
                form_employmentForm: {
                    ...inputData.form_employmentForm,
                    value: props.vacancy.employmentForm ? props.vacancy.employmentForm : ""
                },
                form_workHours: {
                    ...inputData.form_workHours,
                    value: props.vacancy.workHours ? props.vacancy.workHours : ""
                },
                form_restPeriod: {
                    ...inputData.form_restPeriod,
                    value: props.vacancy.restPeriod ? props.vacancy.restPeriod : ""
                },
                form_description: {
                    ...inputData.form_description,
                    value: props.vacancy.description ? props.vacancy.description : ""
                },
                form_id: {
                    ...inputData.form_id,
                    value: props.vacancy.id ? props.vacancy.id : ""
                }
            }
            setInputData(data)
        }
    }, [props.vacancy, inputData])

    let { id, detailedDescription } = props.vacancy
    useEffect(() => {
        PopulateModal()
        settextAreaValue(detailedDescription ? detailedDescription : "")
    }, [id, detailedDescription, PopulateModal])

    function EditVacancy(e: any) {
        e.preventDefault();

        if (!FormIsValid(inputData, setInputData)) {
            return;
        }

        let data = {
            id: inputData.form_id.value,
            position: inputData.form_position.value,
            salary: inputData.form_salary.value,
            location: inputData.form_location.value,
            employmentForm: inputData.form_employmentForm.value,
            workHours: inputData.form_workHours.value,
            restPeriod: inputData.form_restPeriod.value,
            description: inputData.form_description.value,
            detailedDescription: textAreaValue
        }
        console.log('request data = ');
        console.log(data);

        props.editVacancy(data)
    }



    let inputs = GenerateInputForms(inputData, changeHandler);
    let inputsFirstColumn: any[] = []
    let inputsSecondColumn: any[] = []
    inputs.forEach((el, index) => {
        if (index < 3) inputsFirstColumn.push(el)
        else if (index < 6) {
            inputsSecondColumn.push(el)
        }
    })

    return (
        <div>
            <React.Fragment>
                <div className="modal-body">
                    <form>
                    {inputs[7]}
                        <div className="row">
                            <div className="col col-sm-6">{inputsFirstColumn}</div>
                            <div className="col col-sm-6">{inputsSecondColumn}</div>
                        </div>
                        {inputs[6]}
                        <div>
                            <label>დამატებითი ინფორმაცია</label>
                            <ReactQuill value={textAreaValue} onChange={textAreaChangeHandler} />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">დახურვა</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={EditVacancy}>შენახვა</button>
                </div>
            </React.Fragment>
        </div>
    )
}



const mapStateToProps = (state: any) => ({
    vacancies: state.vacancies.list,
})
const mapDispatchToProps = (dispatch: any) => ({
    editVacancy: (vacancy: any) => dispatch(actions.put_Vacancy(vacancy)),
})
export default connect(mapStateToProps, mapDispatchToProps)(EditForm) 