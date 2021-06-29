import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'
import cls from './Products.module.css'
import pagerCls from '../../Products/Products.module.css'
import CenteredModal from '../../UI/Modals/BootstrapModals/CenteredModal';
import CenteredModalWithClose from '../../UI/Modals/BootstrapModals/CenteredModalWithClose';
import ProductFilter from './Filter/ProductFilter';
import AddForm from './Modals/AddForm';
import EditForm from './Modals/EditForm';
import UpdatePicture from './Modals/UpdatePicture';
import Product from './Product/Product';
import ReactPaginate from 'react-paginate';
import ReactLoading from 'react-loading';


const Products = (props: any) => {

    const { products, getProducts } = props
    const { categories, getCategories } = props

    const [addFormOpened, setAddFormOpened] = useState(false)
    const [editFormOpened, setEditFormOpened] = useState(false)
    const [chosenProductId, setChosenProductId] = useState(null);


    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(50)
    const totalProducts = products ? products.length : 0
    const numOfPages = Math.ceil(totalProducts / itemsPerPage)

    const paginatorHandler = (pagerData: any) => {
        setCurrentPage(pagerData.selected)
    }

    const selectProdHandler = (id: any) => {
        setEditFormOpened(true)
        setChosenProductId(id)
    }

    useEffect(() => {
        if (products === undefined) {
            getProducts()
        }
        if (categories === undefined) {
            getCategories()
        }
    }, [products, getProducts, categories, getCategories])



    const selectedData = products ?
        products.slice(currentPage * itemsPerPage, currentPage * itemsPerPage + itemsPerPage)
        : undefined

    let prodList: any[] = [];
    if (selectedData !== undefined) {
        prodList = selectedData.map((item: any, ind: any) => {
            let categories = "";
            item.categories.forEach((category: any) => {
                categories === "" ?
                    categories += category.name
                    :
                    categories += ", " + category.name
            });

            return (
                <Product
                    key={ind}
                    product={item}
                    index={currentPage * itemsPerPage + ind}
                    categories={categories}
                    TableImageClass={cls.TableImage}
                    selectProd={selectProdHandler}
                    editInfoOpen={() => setEditFormOpened(true)} />
            )
        });
    }


    return (
        <div className="admin-products">
            <h2 className="align-center">პროდუქცია</h2>

            {/* ღილაკი  */}
            <div className="align-right">
                <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#productAddModal"
                    onClick={() => setAddFormOpened(true)}>
                    პროდუქტის დამატება
                </button>
            </div>

            <ProductFilter setPerPage={setItemsPerPage} />
            <p className={cls.TotalP}>სულ: {totalProducts}</p>
            {/* ცხრილი */}
            {props.isLoading ?
                <ReactLoading className={cls.Loader} type="spinningBubbles" color="#00a1e1" height={50} width={50} />
                : null}
            <div className={cls.TableWrapper} style={{ backgroundColor: "#fff" }}>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th scope="col">SQ</th>
                            <th scope="col">სახელი</th>
                            <th scope="col">ფასი</th>
                            <th scope="col">კატეგორია</th>
                            <th scope="col">სურათი</th>
                            <th scope="col">ქმედება</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prodList}
                    </tbody>
                </table>
            </div>
            <div className={pagerCls.PagerWrapper}>
                {numOfPages < 2 ? null :
                    <ReactPaginate
                        previousLabel={'<'}
                        nextLabel={'>'}
                        breakLabel={'...'}
                        pageCount={numOfPages}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={2}
                        onPageChange={paginatorHandler}
                        containerClassName={pagerCls.ProductPager}
                        activeClassName={pagerCls.ActivePage}
                    />
                }
            </div>
            <CenteredModalWithClose header="პროდუქტის დამატება" id="productAddModal">
                <AddForm opened={addFormOpened} openHandler={setAddFormOpened} />
            </CenteredModalWithClose>
            <CenteredModal id="productEditModal">
                {chosenProductId !== null ?
                    <EditForm
                        product={props.products[String(chosenProductId)]}
                        opened={editFormOpened} openHandler={setEditFormOpened}
                    /> : null}
            </CenteredModal>
            <CenteredModal id="changePictureModal">
                {chosenProductId !== null ? <UpdatePicture product={props.products[String(chosenProductId)]} /> : null}
            </CenteredModal>
        </div>
    )
}


const mapStateToProps = (state: any) => ({
    products: state.products.list,
    isLoading: state.products.isLoading,
    categories: state.categories.shortList
})

const mapDispatchToProps = (dispatch: any) => ({
    getProducts: () => dispatch(actions.get_ProductsWithCategories(0)),
    getCategories: () => dispatch(actions.get_Category_ShortList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Products) 