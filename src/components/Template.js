import React from 'react';
import {NavLink} from "react-router-dom";
import './styles/index.css';

const Template = (props) => {
    return (
        <div id="template">
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName="active" to="/home" isActive={(match, location) => {
                            console.log(match);
                            console.log(location);
                            return location.pathname === '/home';
                        }}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/contact">Contacto</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/products">Productos</NavLink>
                    </li>
                </ul>
            </nav>
            <main>
                {
                    props.children
                }
            </main>
        </div>
    );
};

export default Template;
