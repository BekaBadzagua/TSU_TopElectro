import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../../store/actions/index'
import { GenerateInputForms, InputChangeHandler } from '../../../../shared/InputTools'
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns'
import $ from 'jquery'
import './filter.css'

const ProductFilter = (props: any) => {
    const [inputData, setInputData]: [any, any] = useState({
        form_name: {
            elementConfig: { name: "form_name", type: "text", placeholder: "სახელი" },
            elementType: "input",
            label: "პროდუქტის სახელი",
            invalid: false,
            value: "",
            rules: { required: false }
        },
        form_sq: {
            elementConfig: { name: "form_sq", type: "text", placeholder: "SQ" },
            elementType: "input",
            label: "SQ",
            invalid: false,
            value: "",
            rules: { required: false }
        }
    });
    const changeHandler = (event: any) => {
        InputChangeHandler(event, inputData, setInputData)
    }
    const numRef = useRef<HTMLSelectElement>(null)

    let multipleSelectFields: object = { text: 'name', value: 'id' }
    let inputs = GenerateInputForms(inputData, changeHandler);

    let filterOpened = false;
    const fitlerToggleHandler = () =>{
        if(filterOpened){
            $('#adminFilterWrapper').css('padding','0px')
            $('#adminFilterWrapper').css('max-height','0px')
        }
        else{
            $('#adminFilterWrapper').css('padding','20px')
            $('#adminFilterWrapper').css('max-height','1000px')
    
        }
        filterOpened = !filterOpened;
    }
    const itemsPerPageHandler = () => {
        let perPage = numRef.current ? parseInt(numRef.current.value) : 50
        props.setPerPage(perPage)
    }


    function filterHandler(e: any) {
        e.preventDefault()

        let categoryIds: any = $('select[name$="categorieFilterMultipleSelect"]').val()
        if (categoryIds.length > 0) {
            categoryIds = categoryIds.map((item: any) => parseInt(item))
        }
        else {
            categoryIds = []
        }
        let data = {
            name: inputData.form_name.value,
            sq: inputData.form_sq.value,
            categoryIds: categoryIds,
        }


        // გააგზავნე რექვესტი
        // რედაქსით
        console.log(data);
        props.getProductsByFilter(data)

    }

    return (
        <div style={{ marginBottom: 30 }}>

            <div className='product-admin-filter-toggle' onClick={fitlerToggleHandler}>
                <h2>ფილტრი</h2>
            </div>
            <div className="product-admin-filter-wrapper" id='adminFilterWrapper'>
                <form>
                    <div className='row'>
                        <div className='col col-md-6'>
                            {inputs}
                        </div>
                        <div className='col col-md-6'>
                            <div className="form-group">
                                <label>კატეგორია</label>
                                <MultiSelectComponent
                                    id="categorieFilterMultipleSelect"
                                    dataSource={props.categories}
                                    mode="Box"
                                    fields={multipleSelectFields} />
                            </div>
                            <div className="form-group">
                                <label>რაოდენობა</label>
                                <select className="form-control" ref={numRef} onChange = {itemsPerPageHandler} >
                                    <option value='50'>50</option>
                                    <option value='25'>25</option>
                                    <option value='100'>100</option>
                                    <option value='250'>250</option>
                                    <option value='10000'>ყველა</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    

                    <div className="align-right">
                        <button className="btn btn-warning" style={{ padding: "10px 30px" }}
                            onClick={(e) => filterHandler(e)}>ძებნა</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    categories: state.categories.shortList
})


const mapDispatchToProps = (dispatch: any) => ({
    getProductsByFilter: (filter: any) => dispatch(actions.get_ByFilter(filter)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductFilter) 
