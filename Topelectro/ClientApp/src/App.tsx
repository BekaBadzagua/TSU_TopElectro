import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Layout from './components/Layout/Layout';
import ReactLoading from 'react-loading';
// Styling
import 'bpg-nino-elite-caps'
import 'bpg-nino-elite-exp'
import 'bpg-mikheil-stefane'
import './custom.css'
import 'bootstrap'


const Home = React.lazy(() => {
    return import('./components/Home/Home');
});
const About = React.lazy(() => {
    return import('./components/About/About');
});
const Contact = React.lazy(() => {
    return import('./components/Contact/Contact');
});
const Gallery = React.lazy(() => {
    return import('./components/Gallery/Gallery');
});
const Products = React.lazy(() => {
    return import('./components/Products/Products');
});
const Vacancies = React.lazy(() => {
    return import('./components/Vacancies/Vacancies');
});
const Login = React.lazy(() => {
    return import('./components/_AdminPanel/AccountControl/Login');
});
const AdminPanel = React.lazy(() => {
    return import('./components/_AdminPanel/AdminPanel');
});

export default () => {
    let [authorised, setAuthorised] = React.useState(false)

    return (
        !authorised ?
            (

                <React.Suspense fallback={
                    <>
                        <div className="user-small-loader-backdrop"></div>
                        <Layout showAll={false}>
                            <ReactLoading className='LoaderIconMain' type="spinningBubbles" color="#00a1e1" height={100} width={100} />
                        </Layout>
                    </>

                }>
                    <Layout showAll={true}>
                        <Switch>
                            <Route path='/about' component={About} />
                            <Route path='/contact' component={Contact} />
                            <Route path='/gallery' component={Gallery} />
                            <Route path='/products' component={Products} />
                            <Route path='/vacancy' component={Vacancies} />
                            <Route path='/Admin'><Login setUser={setAuthorised} /></Route>
                            <Route exact path='/' component={Home} />
                            <Redirect to='/' />
                        </Switch>
                    </Layout>
                </React.Suspense>

            )
            :
            <AdminPanel setUser={setAuthorised} />
    )
}




