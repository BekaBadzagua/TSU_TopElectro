import React from 'react'
import { connect } from 'react-redux'
import CloseIcon from '@material-ui/icons/Close'
// import CloseIcon from '@material-ui/icons/ulb'
import cls from './Products.module.css'
import img from '../../assets/images/white.png'
import ReactHtmlParser from 'react-html-parser'
import { useTranslation } from 'react-i18next';

interface Props {
    products: any,
    prodindx: number,
    closeProduct: any
}
const SelectedProduct = (props: Props) => {
    const { products } = props
    const product = products[props.prodindx]
    const { t } = useTranslation()

    let Content = (
        <>
            <div className="col col-md-5">
                {products ? <img src={img} alt="asasdasd" /> : null}
            </div>
            <div className="col col-md-5"></div>
        </>
    )
    let productName = <h4 className="align-center">.</h4>
    let moreInfo = null
    if (product !== undefined) {
        productName = <h4 className={cls.SelectedProductHeader}>{product.name}</h4>
        moreInfo = product.moreInfo !== null && product.moreInfo !== '<p><br></p>' ? product.moreInfo : null
        Content = (
            <>
                <div className="col col-md-5">
                    {products ? <img src={`images/products/${product.picture}`} alt="asasdasd" /> : null}
                </div>
                <div className="col col-md-5">
                    {products ? (
                        <div className={cls.SelectedProductData}>
                            <p><span>{t('product.price')}:</span>{product.price}₾</p>
                            <p><span>SQ:</span>{product.sq}</p>
                            {product.colors ? <p><span>{t('product.color')}:</span>{product.colors}</p> : null}
                            {product.materials ? <p><span>{t('product.material')}:</span>{product.materials}</p> : null}
                        </div>
                    ) : null}

                </div>
            </>
        )
    }
    return (
        <div className={cls.SelectedProduct}>
            <div className="align-right">
                <CloseIcon onClick={props.closeProduct} />
            </div>
            {productName}
            <div className="row">
                <div className="col col-md-1"></div>
                {Content}
                <div className="col col-md-1"></div>
            </div>
            {moreInfo !== null ? (
                <div className={cls.MoreInfoBox}>
                    {ReactHtmlParser(moreInfo)}
                </div>
            ) : null}
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    products: state.products.list
})

export default connect(mapStateToProps)(SelectedProduct) 
