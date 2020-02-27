import React from 'react';
import Template from "./components/Template";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Product from "./components/Product";
import P404 from "./components/404";

function App() {
    return (
        <BrowserRouter>
            <Template>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/products" component={Products}/>
                    <Route exact path="/products/:product" component={Product}/>
                    <Route component={P404}/>
                    <Redirect from ="/" to="/home"/>
                </Switch>
            </Template>
        </BrowserRouter>
    );
}

export default App;
