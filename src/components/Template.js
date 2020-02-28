import React from "react";
import {Link} from "react-router-dom";

const Template = (props) =>{
    return(
        <React.Fragment>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/context">Context</Link>
                </li>
            </ul>
            <div>
                {props.children}
            </div>
        </React.Fragment>
    )
};

export default Template