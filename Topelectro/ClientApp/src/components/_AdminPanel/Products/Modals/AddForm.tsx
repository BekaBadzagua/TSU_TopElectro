import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Transition } from 'react-transition-group'
import $ from 'jquery'
import * as actions from '../../../../store/actions/index'
import { GenerateInputForms, InputChangeHandler, FormIsValid, ResetInput } from '../../../../shared/InputTools'
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns'
import 'react-quill/dist/quill.snow.css'
const ReactQuill = require('react-quill')

const AddForm = (props: any) => {

    const [inputData, setInputData]: [any, any] = useState({
        form_sq: {
            elementConfig: { name: "form_sq", type: "text", placeholder: "SQ" },
            elementType: "input",
            label: "SQ*",
            invalid: false,
            value: "",
            rules: { required: true }
        },
        form_name: {
            elementConfig: { name: "form_name", type: "text", placeholder: "სახელი" },
            elementType: "input",
            label: "სახელი*",
            invalid: false,
            value: "",
            rules: { required: true }
        },
        form_price: {
            elementConfig: { name: "form_price", type: "text", placeholder: "ფასი" },
            elementType: "input",
            label: "ფასი*",
            invalid: false,
            value: "",
            rules: { required: true }
        },
        form_colors: {
            elementConfig: { name: "form_colors", type: "text", placeholder: "ფერები" },
            elementType: "input",
            label: "ფერები",
            invalid: false,
            value: "",
            rules: { required: false }
        },
        form_material: {
            elementConfig: { name: "form_material", type: "text", placeholder: "მასალა" },
            elementType: "input",
            label: "მასალა",
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

    const [selectedFile, setselectedFile]: [any, any] = useState(" ")
    const handleInputChange = (event: any) => {
        setselectedFile(event.target.files[0])
    }



    function AddProduct(e: any) {
        e.preventDefault();
        let categoryIds = JSON.stringify($('select[name$="categorieMultipleSelect"]').val())

        if (!FormIsValid(inputData, setInputData) || categoryIds.length === 2) {

            // აქ რაღაც უცნაური პრინციპით აბრუნებს ლენგსი 2-ს ცარიელის დროს
            if (categoryIds.length === 2) {
                alert('მიუთითეთ პროდუქტის კატეგორია!')
                return;
            }
            return;
        }


        const formData = new FormData()
        formData.append('file', selectedFile)
        formData.append('name', inputData.form_name.value)
        formData.append('price', inputData.form_price.value)
        formData.append('sq', inputData.form_sq.value)
        formData.append('colors', inputData.form_colors.value)
        formData.append('materials', inputData.form_material.value)
        formData.append('moreInfo', textAreaValue)
        formData.append('categoryIds', categoryIds)

        props.addProduct(formData)

        resetForm()
    }

    const resetForm = () => {
        ResetInput(inputData, setInputData)
        settextAreaValue('')
        setselectedFile(' ')
        $('#AddProdImage').val('')
        props.openHandler(false)
    }

    let multipleSelectFields: object = { text: 'name', value: 'id' }
    let inputs = GenerateInputForms(inputData, changeHandler);
    let inputsFirstColumn: any[] = []
    let inputsSecondColumn: any[] = []
    inputs.forEach((el, index) => {
        if (index < 3) inputsFirstColumn.push(el)
        else if (index < 5) {
            inputsSecondColumn.push(el)
        }
    })
    inputsSecondColumn.push(
        <div className="form-group" key="form_file">
            <label className="text-white">Select File :</label>
            <input type="file" id="AddProdImage" className="form-control" onChange={handleInputChange} />
        </div>
    )


    return (
        <React.Fragment>
            <div className="modal-body">
                <form>
                    <div className="row">
                        <div className="col col-sm-6">{inputsFirstColumn}</div>
                        <div className="col col-sm-6">{inputsSecondColumn}</div>
                    </div>
                    <div className="row" style={{ marginTop: 30 }}>
                        <div className="col col-md-12">
                            <label>კატეგორიები*</label>
                            {/* MultiSelectComponent -ის დარესეტება ისე ვერ ხერხდებოდა და ეს გამოსავალი მოვძებნე */}
                            <Transition
                                in={props.opened}
                                timeout={10}
                                mountOnEnter
                                unmountOnExit>
                                {
                                    state => (<MultiSelectComponent
                                        id="categorieMultipleSelect"
                                        dataSource={props.categories}
                                        mode="Box"
                                        fields={multipleSelectFields}
                                        value={[]} />)
                                }
                            </Transition>
                        </div>
                        <div className="col col-md-12" style={{ marginTop: 20 }}>
                            <label>დამატებითი ინფორმაცია</label>
                            <ReactQuill value={textAreaValue} onChange={textAreaChangeHandler} />
                        </div>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={resetForm}>დახურვა</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={AddProduct}>შენახვა</button>
            </div>
        </React.Fragment>

    )
}




const mapStateToProps = (state: any) => ({
    categories: state.categories.shortList
})


const mapDispatchToProps = (dispatch: any) => ({
    addProduct: (formData: any) => dispatch(actions.post_Product(formData)),
})


export default connect(mapStateToProps, mapDispatchToProps)(AddForm) 