import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../../../../store/actions/index'
import defaultImage from '../../../../assets/images/logo.png'
import cls from '../Products.module.css'
const Product = (props: any) => {

    const deleteHandler = (id: number) => {
        props.deleteProduct(id)
    }

    return (
        <tr key={props.index}>
            <td>{props.index + 1}</td>
            <td>{props.product.sq}</td>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
            <td>{props.categories}</td>
            <td className={props.TableImageClass}>
                <img
                    src={props.product.picture ? `images/products/${props.product.picture}` : defaultImage}
                    alt="product" />
            </td>
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

                    <div className={["dropdown-menu",cls.DropDownMenu].join(' ')} aria-labelledby="dropdownMenuButton">
                        <span className="dropdown-item"
                            data-toggle="modal"
                            data-target="#productEditModal"
                            onClick={() => props.selectProd(props.index)} >რედაქტირება</span>
                        <span className="dropdown-item"
                            data-toggle="modal"
                            data-target="#changePictureModal"
                            onClick={() => props.selectProd(props.index)} >სურათის შეცვლა</span>
                        <span className="dropdown-item"
                            onClick={() => deleteHandler(props.product.id)}>წაშლა</span>
                    </div>
                </div>
            </td>
        </tr>
    )
}


const mapDispatchToProps = (dispatch: any) => ({
    deleteProduct: (id: number) => dispatch(actions.delete_product(id)),
})


export default connect(null,mapDispatchToProps)(Product)