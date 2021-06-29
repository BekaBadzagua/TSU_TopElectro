import React from 'react'
import { connect } from 'react-redux'
import cls from './Products.module.css'

interface Props {
    products: any,
    currentPage: number,
    itemsPerPage: number,
    orderBy: string,
    productClick: any
}

const ProductList = (props: Props) => {
    const { products, itemsPerPage, currentPage, orderBy } = props

    let production = products ? [...products] : undefined;
    if (production) {
        switch (orderBy) {
            case "asc":
                production.sort((a: any, b: any) => (a.price < b.price) ? 1 : -1)
                break;
            case "dec":
                production.sort((a: any, b: any) => (a.price > b.price) ? 1 : -1)
                break;
            default:
                break;
        }
    }


    const selectedData = production ? [...production].slice(currentPage * itemsPerPage, currentPage * itemsPerPage + itemsPerPage) : undefined
    console.log(selectedData);

    let prodList: any[] = [];
    if (selectedData) {
        prodList = selectedData.map(
            (item: any, index: number) =>
                (
                    <div key={item.id} className={cls.Product}>
                        <img src={`images/products/${item.picture}`} alt={item.name} />
                        <div className={cls.InfoWrapper}
                            onClick={() => props.productClick(index + (currentPage * itemsPerPage))}>
                            <h4 className={cls.ProductName}>{item.name}</h4>
                            <h4 className={cls.itemPrice}>{item.price} ₾</h4>
                        </div>
                    </div>
                )
        )
    }

    return (
        <div className={cls.ProductsWrapper}>
            {prodList}
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    products: state.products.list
})

export default connect(mapStateToProps)(ProductList) 
