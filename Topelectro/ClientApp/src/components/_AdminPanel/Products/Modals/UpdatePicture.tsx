import React, { useState } from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'
import * as actions from '../../../../store/actions/index'

const UpdatePicture = (props: any) => {

    const [selectedFile, setselectedFile]: [any, any] = useState(" ")

    const handleInputChange = (event: any) => {
        setselectedFile(event.target.files[0])
    }

    function UpdateImage(e: any) {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', selectedFile)

        if (selectedFile === " ") {
            alert('აირჩიეთ სურათი')
            return;
        }

        props.changeProduct(props.product.id, formData)
        resetForm()
    }

    const resetForm = () => {
        setselectedFile(' ')
        $('#EditProdImage').val('')
    }


    return (
        <React.Fragment>
            <div className="modal-header">
                <h5 className="modal-title">სურათის შეცვლა</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={resetForm}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="form-group">
                        <label className="text-white">Select File :</label>
                        <input type="file" id="EditProdImage" className="form-control" onChange={handleInputChange} />
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={resetForm}>დახურვა</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={UpdateImage}>შენახვა</button>
            </div>
        </React.Fragment>

    )
}




const mapDispatchToProps = (dispatch: any) => ({
    changeProduct: (id: number, formData: any) => dispatch(actions.post_changeProductPicture(id, formData)),
})

export default connect(null, mapDispatchToProps)(UpdatePicture) 