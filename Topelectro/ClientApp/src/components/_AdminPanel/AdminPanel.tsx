import React from 'react'
import { Switch, Route } from 'react-router';
import Layout from './Layout/Layout'
import Products from './Products/Products'
import Vacancies from './Vacancies/Vacancies'
import Main from './Main/Main';
import Pricecontroll from './PriceControl/Pricecontroll';

const Adminpanel = (props: any) => {
    return (
        <Layout>
            <Switch>
                <Route path='/Admin/products' component={Products} />
                <Route path='/Admin/vacancy' component={Vacancies} />
                <Route path='/Admin/pricecontrol' component={Pricecontroll} />
                <Route exact path='/Admin'>
                    <Main setUser={props.setUser} />
                </Route>
            </Switch>
        </Layout>
    )
}
export default Adminpanel

