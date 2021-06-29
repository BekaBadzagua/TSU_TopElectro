import React, { ReactElement, useRef } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'
import cls from './Pricecontroll.module.css'

function Pricecontroll(props: any): ReactElement {

    const priceTag = useRef<HTMLInputElement>(null)
    const operationTag = useRef<HTMLSelectElement>(null)

    const clickHandler = (e: any) => {
        e.preventDefault()

        if(priceTag.current == null || parseInt(priceTag.current.value) <= 0 || priceTag.current.value === ''){
            alert('გთხოვთ პროცენტში შეიყვანოთ დადებითი რიცხვი')
            return;
        }

        if (window.confirm('დარწმუნებული ხართ რომ გსურთ ფასების ცვლილება?') &&
            operationTag.current && priceTag.current) {
            let data = {
                operation: operationTag.current.value,
                difference: parseInt(priceTag.current.value)
            }
            console.log(data);
            
            axios.post('api/Products/Changeprice', data)
                .then(response => {
                    console.log(response);
                    alert('ოპერაცია წარმატებით განხორციელდა')
                    props.getProducts();
                })
                .catch(error => {
                    console.log(error);
                    alert('ოპერაციის განხორციელებისას დაფიქსირდა შეცდომა!\n' + error)
                })
        }
        else {
            alert('ფასები დარჩა უცვლელი!')
            if (priceTag.current)
                priceTag.current.value = '0'
        }
    }

    return (
        <div className={cls.Pricecontroll}>
            <h1>ფასების მართვა</h1>
            <form>
                <label>ფასის შეცვლა</label>
                <select ref={operationTag}>
                    <option value="incr">გაზრდა</option>
                    <option value="decr">შემცირება</option>
                </select>
                <input type="number" ref={priceTag} /> %
                <div>
                    <button onClick={(e) => clickHandler(e)}>ფასების განახლება</button>
                </div>
            </form>

        </div>
    )
}



const mapDispatchToProps = (dispatch: any) => ({
    getProducts: () => dispatch(actions.get_ProductsWithCategories(0)),
})

export default connect(null, mapDispatchToProps)(Pricecontroll) 