import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import ReactLoading from 'react-loading'
import App from './App'
import './i18n'
import './custom.css'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.Suspense fallback={
                <div>
                    <>
                        <div className="user-small-loader-backdrop">
                            <ReactLoading className='LoaderIconMain' type="spinningBubbles" color="#00a1e1" height={100} width={100} />
                        </div>
                    </>
                </div>
            }>
                <App />
            </React.Suspense>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();