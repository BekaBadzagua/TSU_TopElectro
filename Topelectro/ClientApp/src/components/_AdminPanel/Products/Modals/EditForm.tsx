import React, { useState, useEffect, useCallback } from 'react'
import { Transition } from 'react-transition-group'
import { connect } from 'react-redux'
import * as actions from '../../../../store/actions/index'
import $ from 'jquery'
import { GenerateInputForms, InputChangeHandler, FormIsValid } from '../../../../shared/InputTools'
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns'
import 'react-quill/dist/quill.snow.css'
const ReactQuill = require('react-quill')


const EditForm = (props: any) => {
    const [inputData, setInputData]: [any, any] = useState({
        form_sq: {
            elementConfig: { name: "form_sq", type: "text", placeholder: "SQ" },
            elementType: "input",
            label: "SQ",
            invalid: false,
            value: props.product.sq ? props.product.sq : "",
            rules: { required: true }
        },
        form_name: {
            elementConfig: { name: "form_name", type: "text", placeholder: "სახელი" },
            elementType: "input",
            label: "სახელი",
            invalid: false,
            value: props.product.name ? props.product.name : "",
            rules: { required: true }
        },
        form_price: {
            elementConfig: { name: "form_price", type: "text", placeholder: "ფასი" },
            elementType: "input",
            label: "ფასი",
            invalid: false,
            value: props.product.price ? props.product.price : "",
            rules: { required: false }
        },
        form_id: {
            elementConfig: { name: "form_id", type: "text", disabled: true },
            elementType: "input",
            label: "Id",
            invalid: false,
            value: props.product.id ? props.product.id : "",
            rules: { required: false }
        },
        form_colors: {
            elementConfig: { name: "form_colors", type: "text", placeholder: "ფერები" },
            elementType: "input",
            label: "ფერები",
            invalid: false,
            value: props.product.colors ? props.product.colors : "",
            rules: { required: false }
        },
        form_material: {
            elementConfig: { name: "form_material", type: "text", placeholder: "მასალა" },
            elementType: "input",
            label: "მასალა",
            invalid: false,
            value: props.product.materials ? props.product.materials : "",
            rules: { required: false }
        }
    });

    const PopulateModal = useCallback(() => {
        if (inputData.form_id.value !== props.product.id) {
            let data: any = {
                ...inputData,
                form_sq: {
                    ...inputData.form_sq,
                    value: props.product.sq ? props.product.sq : ""
                },
                form_name: {
                    ...inputData.form_name,
                    value: props.product.name ? props.product.name : ""
                },
                form_price: {
                    ...inputData.form_price,
                    value: props.product.price ? props.product.price : ""
                },
                form_id: {
                    ...inputData.form_id,
                    value: props.product.id ? props.product.id : ""
                },
                form_colors: {
                    ...inputData.form_colors,
                    value: props.product.colors ? props.product.colors : ""
                },
                form_material: {
                    ...inputData.form_material,
                    value: props.product.materials ? props.product.materials : ""
                },
            }
            setInputData(data)
        }
    }, [props.product, inputData])

    let { id, moreInfo } = props.product
    useEffect(() => {
        PopulateModal()
        settextAreaValue(moreInfo ? moreInfo : "")
    }, [id, moreInfo, PopulateModal])

    const [textAreaValue, settextAreaValue] = useState(props.product.moreInfo ? props.product.moreInfo : "");
    const textAreaChangeHandler = (value: any) => {
        settextAreaValue(value)
    }

    const changeHandler = (event: any) => {
        InputChangeHandler(event, inputData, setInputData)
    }

    function EditProduct(e: any) {
        e.preventDefault();

        let categIds: any = $('select[name$="categorieMultipleSelectEDIT"]').val()
        categIds = categIds.map((x: any) => +x)

        if (!FormIsValid(inputData, setInputData) || categIds.length === 0) {

            // აქ რაღაც უცნაური პრინციპით აბრუნებს ლენგსი 2-ს ცარიელის დროს
            if (categIds.length === 0) {
                alert('მიუთითეთ პროდუქტის კატეგორია!')
                return;
            }
            return;
        }



        let data = {
            id: inputData.form_id.value,
            name: inputData.form_name.value,
            price: inputData.form_price.value,
            sq: inputData.form_sq.value,
            colors: inputData.form_colors.value,
            materials: inputData.form_material.value,
            moreInfo: textAreaValue,
            categoryIds: categIds
        }
        console.log('request data = ');
        console.log(data);

        props.editProduct(data)
        resetForm()
    }


    let multipleSelectFields: object = { text: 'name', value: 'id' }
    let multipleSelectedOptions = props.product.categories.map((categ: any) => categ.id);
    let inputs = GenerateInputForms(inputData, changeHandler);
    let inputsFirstColumn: any[] = []
    let inputsSecondColumn: any[] = []
    inputs.forEach((el, index) => {
        if (index < 3) inputsFirstColumn.push(el)
        else {
            inputsSecondColumn.push(el)
        }
    })

    const resetForm = () => {
        props.openHandler(false)
    }


    return (
        <React.Fragment>
            <div className="modal-header">
                <h5 className="modal-title">პროდუქტის რედაქტირება</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={resetForm}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="row">
                        <div className="col col-sm-6">{inputsFirstColumn}</div>
                        <div className="col col-sm-6">{inputsSecondColumn}</div>
                    </div>
                    <div className="row" style={{ marginTop: 30 }}>
                        <div className="col col-md-12">
                            <label>კატეგორიები</label>

                            <Transition
                                in={props.opened}
                                timeout={10}
                                mountOnEnter
                                unmountOnExit>
                                {
                                    state => (<MultiSelectComponent
                                        id="categorieMultipleSelectEDIT"
                                        dataSource={props.categories}
                                        mode="Box"
                                        fields={multipleSelectFields}
                                        value={multipleSelectedOptions}
                                    />)
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
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={EditProduct}>შენახვა</button>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state: any) => ({
    categories: state.categories.shortList,
    products: state.products.list,
})

const mapDispatchToProps = (dispatch: any) => ({
    editProduct: (data: any) => dispatch(actions.put_product(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditForm) 