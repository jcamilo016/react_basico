import React from 'react';
import {Link} from "react-router-dom";

const Products = (props) => {
    return (
        <ul>
            <li>
                <Link to="/products/A?cupon=react&descuento=10&empresa=technisys">Producto A</Link>
            </li>
            <li>
                <Link to="/products/B?cupon=react&descuento=20&empresa=10Pearls">Producto B</Link>
            </li>
        </ul>
    );
};

export default Products;
