import React, {useState} from 'react';
import Template from "./components/Template";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Product from "./components/Product";
import Header from "./components/Header";
import P404 from "./components/404";
import UserContext from "./contexts/UserContext";

function App() {
    const [state, setState] = useState({
        login: false,
        username: '',
        user: '',
        updateContext : ({login, username, user, updateContext}) => setState({
            login,
            username,
            user,
            updateContext
        })
    });

    return (
        <BrowserRouter>
            <UserContext.Provider value={state}>
                <Template>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/contact" component={Contact}/>
                        <Route exact path="/products" component={Products}/>
                        <Route exact path="/products/:product" component={Product}/>
                        <Route exact path="/context" component={Header}/>
                        <Route component={P404}/>
                        <Redirect from="/" to="/home"/>
                    </Switch>
                </Template>
            </UserContext.Provider>
        </BrowserRouter>
    );
}

export default App;
