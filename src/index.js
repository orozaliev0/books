 import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Layout from "./components/main/Layout";
import Context from "./components/main/Context";
import {Provider} from "react-redux";
import {store} from "./redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <Context>
                    {/*<Layout>*/}
                    <App/>
                    {/*</Layout>*/}
                </Context>
            </React.StrictMode>
        </BrowserRouter>
    </Provider>

);

