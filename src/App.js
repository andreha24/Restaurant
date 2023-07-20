import React from 'react';
import { Provider } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import HomePage from "./containers/HomePage";
import PageMenu from "./containers/MenuPage";
import DishDetails from "./containers/DishDetails";
import CartPage from "./containers/CartPage";
import PersonalPage from "./containers/PersonalPage";
import LoginPage from "./containers/LoginPage";
import store from './store'

import './App.css';

function App() {

    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/page-menu" exact>
                        <PageMenu />
                    </Route>
                    <Route path="/cart-page" exact>
                        <CartPage/>
                    </Route>
                    <Route path="/page-menu/:dish">
                        <DishDetails />
                    </Route>
                    <Route path="/personal-page">
                        <PersonalPage/>
                    </Route>
                    <Route path="/login-page">
                        <LoginPage/>
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
