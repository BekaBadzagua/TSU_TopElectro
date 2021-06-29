import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next';
import * as actions from '../../../store/actions/index'

import cls from './Products.module.css'
import SectionHeader from '../../UI/Headers/SectionHeader';
import { useHistory } from 'react-router';

const Products = (props: any) => {

    const { products, getLatest } = props
    const history = useHistory()
    const { t } = useTranslation()


    useEffect(() => {
        if (products === undefined) {
            getLatest(8)
        }
        else if (products.length > 8) {
            getLatest(8)
        }
    }, [products, getLatest])


    const productElements: any[] = products ? products.map((item: any) => (
        <div key={item.id} className={cls.Product} onClick={() => {history.push('/products/')}}>
            <img src={`images/products/${item.picture}`} alt="product" />
            <div>
                <h3 className={cls.WithPrice}>{item.name}</h3>
                <span>{item.price}</span>
            </div>
        </div>
    )) : []







    return (
        <div className={cls.Products}>
            <SectionHeader showBtn={true} linkTo="/products"
                btnText={t('home.products.btnText')}>
                {t("home.products.header")}
            </SectionHeader>

            <div className={cls.productsRow}>
                {productElements}
            </div>
        </div>

    )
}



const mapStateToProps = (state: any) => ({
    products: state.products.latest
})

const mapDispatchToProps = (dispatch: any) => ({
    getLatest: (num: number) => dispatch(actions.get_LatestNProducts(num))
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)