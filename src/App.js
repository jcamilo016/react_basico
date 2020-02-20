import React from 'react';
import Template from "./components/Template";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Product from "./components/Product";

function App() {
    return (
        <BrowserRouter>
            <Template>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/products" component={Products}/>
                <Route exact path="/products/:product" component={Product}/>
            </Template>
        </BrowserRouter>
    );
}

export default App;
