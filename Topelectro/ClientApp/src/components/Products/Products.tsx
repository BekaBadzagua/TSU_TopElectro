import React, { useEffect, useState } from 'react'
import { Transition } from 'react-transition-group'
import { useTranslation } from 'react-i18next'
import { useHistory } from "react-router-dom"
import ReactPaginate from 'react-paginate'
import ReactLoading from 'react-loading'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import SideMenu from './SideMenu'
import cls from './Products.module.css'
import SelectedProduct from './SelectedProduct'
import ProductList from './ProductList'
import { Helmet } from 'react-helmet'

const Products = (props: any) => {
    const { products, getProducts, getByCategory } = props
    const [firstRender, setFirstRender] = useState(true)
    const { t } = useTranslation()
    const history = useHistory()

    // SelectedProduct
    const [selectedProductIndex, setSelectedProductIndex]: [any, any] = useState(null)
    let showSelectedProd = selectedProductIndex !== null
    let [selectedCategory, setSelectedCategory] = useState(t('product.product'))
    // OrderBy
    const [orderBy, setOrderBy] = useState("norm")
    const orderByHandler = (e: any) => {
        setCurrentPage(0)
        setOrderBy(e.target.value)
    }
    // Paginator
    const [currentPage, setCurrentPage] = useState(0);
    let itemsPerPage = showSelectedProd ? 4 : 20 // default 20
    const totalProducts = products ? products.length : 0
    const numOfPages = Math.ceil(totalProducts / itemsPerPage)

    const paginatorHandler = (pagerData: any) => {

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        setCurrentPage(pagerData.selected)
    }



    useEffect(() => {
        if (firstRender) {
            let urlData = history.location.pathname.split('/')
            urlData.length > 2 && urlData[2] !== "" ? getByCategory(urlData[2]) : getProducts()
            if (urlData[2] && urlData[2] !== '')
                setSelectedCategory(t(`categories.${urlData[2]}`))
            setFirstRender(false)
        }
    }, [t, products, getProducts, getByCategory, firstRender, setFirstRender, history.location.pathname])



    function productClickHandler(prodId: number) {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        setTimeout(() => {
            setSelectedProductIndex(prodId)
        }, 500)
    }

    return (
        <div className={cls.Products}>
            <Helmet>
                <title>Top Electro - პროდუქტი</title>
                <meta name='robots' content='index' />
                <meta name="description" content=",,TOP ELEKTRO’’ იხილეთ ჩვენი პროდუქცია" />
                <meta name="keywords" content="როზეტები,ჩამრთველები,ავტომატური ამომრთველები,რელეები,ტაიმერები,განათება,ელექტრო,კარადები,შიტები,სამონტაჟო აქსესუარები, საზომი მოწყობილობები,ვენტილაცია,კაბელები, სისტემებბი" />
                <meta name="keywords" content="ლამა,ტაიმირი,ლადოგა,სელიგერი,ვუოსკა,რეტრო,retro,vuoska,seliger,ladoga,taimir,lama,„Лама“,„Таймыр“,„Ладога“,„Ладога“,„Вуокса“,„Retro“" />
                <meta name="keywords" content="ავტომატური ამომრთველი,დიფერენციალური ამომრთვლი,uzo,პუსკატელი,კონტაქტორი,გადამრთველი,დაცვამ,როზეტი დინრეიკაზე,დინრეიკა, სიპები" />
                <meta name="keywords" content="რუბილნიკი,რუბილნიკები,BA88,БАВР,ВНК,მართვის ღილაკები,ღილაკები,კონტაქტორი,თბორელე,პულტი,დნობადი მცველი" />
                <meta name="keywords" content="განმაცალკევებელი,შუალედური რელე,ანალოგური რელე ყოველდღიური,ფაიფურის როზეტი,როზეტული ტაიმერი" />
                <meta name="keywords" content="LED ნათურები, LED პროჟექტორი,IP66,DownLight,LED სანათები, IP54,ეზოს/ქუჩის,ბრები,ფოტორელე,ვაზნები,დინრეიკა,სალტეები,გამანაწილებელი " />
                <meta name="keywords" content="რეზბიანი დამჭერები,ანტივანდალური კარადები,გილზები, გილზები,ნეილონის ხამუთები,იზოლენტები,წებოები,ეკო,EKO,ЭКО,სიპები" />
            </Helmet>
            <div className={cls.CategoryHeader}>
                <h2 id='productHeader'>{selectedCategory}</h2>
            </div>
            <div className="flex-wrapper">
                <SideMenu setFirstPage={setCurrentPage} closeProduct={() => setSelectedProductIndex(null)} />
                <div className={cls.Production}>
                    <Transition
                        in={showSelectedProd}
                        timeout={1000}
                        mountOnEnter
                        unmountOnExit>
                        {
                            state => {
                                let animationCl;
                                switch (state) {
                                    case 'entering': animationCl = "OpenDown"; break;
                                    case 'exiting': animationCl = "CloseUp"; break;
                                    default: break;
                                }
                                return <div className={animationCl}>
                                    <SelectedProduct
                                        prodindx={selectedProductIndex}
                                        closeProduct={() => { setSelectedProductIndex(null) }} />
                                </div>
                            }
                        }
                    </Transition>

                    <div className={cls.SortBy}>
                        <div>
                            <label>{t('product.sort')}</label>
                            <select onChange={orderByHandler}>
                                <option value="norm">{t('product.sortby.new')}</option>
                                <option value="dec">{t('product.sortby.priceasc')}</option>
                                <option value="asc">{t('product.sortby.pricedesc')}</option>
                            </select>
                        </div>
                    </div>
                    {props.isLoading ? <ReactLoading className={cls.Loader} type="spinningBubbles" color="#ff4500" height={50} width={50} /> : null}


                    <ProductList
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        orderBy={orderBy}
                        productClick={productClickHandler} />
                    <div className={cls.PagerWrapper}>
                        {console.log('paginatior rendered')}
                        {console.log('currentPage = ' + currentPage)}
                        {numOfPages < 2 ? null :
                            <ReactPaginate
                                previousLabel={'<'}
                                nextLabel={'>'}
                                breakLabel={'...'}
                                pageCount={numOfPages}
                                pageRangeDisplayed={2}
                                marginPagesDisplayed={2}
                                onPageChange={paginatorHandler}
                                containerClassName={cls.ProductPager}
                                activeClassName={cls.ActivePage}
                                forcePage={currentPage}
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    products: state.products.list,
    isLoading: state.products.isLoading
})
const mapDispatchToProps = (dispatch: any) => ({
    getProducts: () => dispatch(actions.get_Products()),
    getByCategory: (category: string) => dispatch(actions.get_ByCategory(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)

