import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import DropdownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowRight from '@material-ui/icons/ArrowForwardIos'
import ArrowLeft from '@material-ui/icons/ArrowBackIos'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import $ from 'jquery'
import cls from './Products.module.css'
import categoriesJson from './categories.json'
import { useTranslation } from 'react-i18next';

const SideMenu = (props: any) => {

    const [menuNotHiddeen, setMenuNotHidden] = useState(true)
    const { t } = useTranslation()

    const categoryChangeHandler = (event: any, text: string, descriptor: string) => {
        
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        props.closeProduct()
        props.setFirstPage(0)

        // შეცვალე ტექსტი
        $('#productHeader').html(text)

        // დაიხუროს ყველა სუბკატეგორია
        let collection = $(`.${cls.SubList}`)
        for (let i = 0; i < collection.length; i++) {
            collection[i].classList.remove(cls.SubListOPEN)
        }
        // თუ სუბკატეგორიაზე დავაჭირეთ დარჩეს გახსნილი ზოგჯერ a ზე ეჭირება ზოგჯრ 
        // li ზე და მაგიტომ ვშვრები ამ მაიმუნობას
        let element = event.target.parentElement  // მშობელი
        let parentElement = element.parentElement // დიდი მშობელი
        if (element.className === cls.SubList)
            element.className = cls.SubList + " " + cls.SubListOPEN
        else if (parentElement.className === cls.SubList)
            parentElement.className = cls.SubList + " " + cls.SubListOPEN

        // გააგზავნე რექვესტი შესაბამის კატეგორიაზე
        props.getByCategory(descriptor)
    }

    // let menuNotHiddeen = true
    const categoriesShowHandler = () => {
        if (menuNotHiddeen) {
            $('#category-nav-manu').css("display", "none")
            $('#category-nav').css("width", "42px")
        }
        else {
            $('#category-nav-manu').css("display", "inline-block")
            $('#category-nav').css("width", "380px")
        }
        setMenuNotHidden(!menuNotHiddeen)

    }

    const categoryClickHandler = (e: any) => {
        let el = e.target.parentElement

        if ($(el).hasClass(cls.SubListOpened))
            $(el).removeClass(cls.SubListOpened)
        else
            $(el).addClass(cls.SubListOpened)
    }


    let categoryList = categoriesJson.CategoryGroups.map(category => {
        // გამოიტანე ჩვეულებრივი კატეგორია 
        if (category.descriptor !== null) {
            return (
                <NavLink
                    key={category.descriptor}
                    to={`/products/${category.descriptor}`}
                    exact={false} activeClassName="active-category"
                    onClick={(e) => categoryChangeHandler(e, t(`categories.${category.descriptor}`), category.descriptor)}>
                    <li key={category.descriptor}>{t(`categories.${category.descriptor}`)}</li>
                </NavLink>
            )
        }
        // გამოიტანე არაჩვეულებრივი კატეგორია (სუბკატეგორიებით)
        else {
            let subCategories;
            if (category.subList)
                subCategories = category.subList.map((subCategory) => (
                    <NavLink
                        key={subCategory.descriptor}
                        to={`/products/${subCategory.descriptor}`}
                        exact={false} activeClassName="active-category"
                        className={cls.SubListLink}>
                        <li key={subCategory.descriptor}
                            onClick={(e) => categoryChangeHandler(e, t(`categories.${subCategory.descriptor}`), subCategory.descriptor)}>
                            {t(`categories.${subCategory.descriptor}`)}
                        </li>
                    </NavLink>
                ))

            return (
                <li key={category.name} className={cls.SubListWrapper}>
                    <ul className={cls.SubList}>
                        <li key={category.name} onClick={categoryClickHandler}>{t(`categories.subHeaders.${category.name}`)} <DropdownIcon /></li>
                        {subCategories ? subCategories : null}
                    </ul>
                </li>
            )
        }
    })

    return (
        <div className={cls.SideMenu} id="category-nav">
            {menuNotHiddeen ?
                <ArrowLeft onClick={() => categoriesShowHandler()} className={cls.MainIcon} /> :
                <ArrowRight onClick={() => categoriesShowHandler()} className={cls.MainIcon} />
            }
            {/* <MenuIcon onClick={() => categoriesShowHandler()} className={cls.MainIcon} /> */}
            <ul className={cls.CategoryList} id="category-nav-manu">
                <li key={cls.ListHeader} className={cls.ListHeader}>{t('product.categories')}</li>
                {/* რეტროს აქ დამატება */}
                <NavLink
                    key={'seriaRetro11'}
                    to={`/products/seriaRetro`}
                    exact={false} activeClassName="active-category"
                    onClick={(e) => categoryChangeHandler(e, t(`categories.seriaRetro`), 'seriaRetro')}>
                    <li key={'seriaRetro11'}>{t(`categories.seriaRetro`)}</li>
                </NavLink>
                {categoryList}
            </ul>
        </div>
    )
}


const mapDispatchToProps = (dispatch: any) => ({
    getByCategory: (category: string) => dispatch(actions.get_ByCategory(category))
})
export default connect(null, mapDispatchToProps)(SideMenu)