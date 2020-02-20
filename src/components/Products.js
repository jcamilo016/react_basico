import React from 'react';
import {Link} from "react-router-dom";

const Products = (props) => {
    return (
        <ul>
            <li>
                <Link to="/products/A">Producto A</Link>
            </li>
            <li>
                <Link to="/products/B">Producto B</Link>
            </li>
        </ul>
    );
};

export default Products;
