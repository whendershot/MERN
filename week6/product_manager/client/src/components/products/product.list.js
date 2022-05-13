import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

const ProductList = (props) => {

    //useEffect(() => {}, [products]);

    const renderOne = (product, index) => {
        return (
            <li key={index}>
                <Link to={`/products/${product._id}`}>{product.title}</Link>
            </li>
        );
    };

    return (
        <div className="container">
            <h1 className="text-center">All Products</h1>
            <ul className="row">
                { props.products.map( (product, index) => renderOne(product, index) ) }
            </ul>
        </div>
    );
};

export default ProductList;