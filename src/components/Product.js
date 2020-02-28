import React from 'react';
import queryString from 'query-string';

const Product = (props) => {
    const queryParams = queryString.parse(props.location.search);

    return (
        <React.Fragment>
            <h1>Product {props.match.params.product}</h1>
            <p>Query Params</p>
            <ul>
                {props.location.search && (
                    Object.entries(queryParams).map((query) => {
                        return (<li>{`${query[0]}: ${query[1]}`}</li>);
                    }))
                }
            </ul>
        </React.Fragment>
    )
};

export default Product;
