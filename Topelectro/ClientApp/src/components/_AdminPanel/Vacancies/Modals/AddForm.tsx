import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../../store/actions/index'
import { GenerateInputForms, InputChangeHandler, FormIsValid } from '../../../../shared/InputTools'
import 'react-quill/dist/quill.snow.css'
const ReactQuill = require('react-quill')

const AddForm = (props: any) => {
    const [inputData, setInputData]: [any, any] = useState({
        form_position: {
            elementConfig: { name: "form_position", type: "text", placeholder: "პოზიცია" },
            elementType: "input",
            label: "პოზიცია*",
            invalid: false,
            value: "",
            rules: { required: true }
        },
        form_salary: {
            elementConfig: { name: "form_salary", type: "text", placeholder: "000 ლარი" },
            elementType: "input",
            label: "ანაზღაურება",
            invalid: false,
            value: "",
            rules: { required: false }
        },
        form_location: {
            elementConfig: { name: "form_location", type: "text", placeholder: "მდებარეობა..." },
            elementType: "input",
            label: "მდებარეობა",
            invalid: false,
            value: "",
            rules: { required: false }
        },
        form_employmentForm: {
            elementConfig: { name: "form_employmentForm", type: "text", placeholder: "სრული/ნახევარი განაკვეთი..." },
            elementType: "input",
            label: "დასაქმების ფორმა",
            invalid: false,
            value: "",
            rules: { required: false }
        },
        form_workHours: {
            elementConfig: { name: "form_workHours", type: "text", placeholder: "00:00 - 24:00" },
            elementType: "input",
            label: "სამუშაო საათები",
            invalid: false,
            value: "",
            rules: { required: false }
        },
        form_restPeriod: {
            elementConfig: { name: "form_restPeriod", type: "text", placeholder: "0-სთ" },
            elementType: "input",
            label: "შესვენება",
            invalid: false,
            value: "",
            rules: { required: false }
        },
        form_description: {
            elementConfig: { name: "form_description", type: "text", placeholder: "აღწერა..." },
            elementType: "textarea",
            label: "აღწერა*",
            invalid: false,
            value: "",
            rules: { required: false }
        }
    });
    const changeHandler = (event: any) => {
        InputChangeHandler(event, inputData, setInputData)
    }

    const [textAreaValue, settextAreaValue] = useState("");
    const textAreaChangeHandler = (value: any) => {
        settextAreaValue(value)
    }

    function AddVacancy(e: any) {
        e.preventDefault();

        if (!FormIsValid(inputData, setInputData)) {
            return;
        }

        let data = {
            Position: inputData.form_position.value,
            location: inputData.form_location.value,
            EmploymentForm: inputData.form_employmentForm.value,
            WorkHours: inputData.form_workHours.value,
            RestPeriod: inputData.form_restPeriod.value,
            Salary: inputData.form_salary.value,
            Description: inputData.form_description.value,
            DetailedDescription: textAreaValue,
        }
        props.addVacancy(data)
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
        <React.Fragment>
            <div className="modal-body">
                <form>
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
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={AddVacancy}>შენახვა</button>
            </div>
        </React.Fragment>
    )
}


const mapDispatchToProps = (dispatch: any) => ({
    addVacancy: (data: any) => dispatch(actions.post_Vacancy(data)),
})

export default connect(null, mapDispatchToProps)(AddForm)