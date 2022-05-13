import React, {useEffect} from 'react';

const ProductList = (props) => {

    //useEffect(() => {}, [products]);

    const renderOne = (product, index) => {
        return (
            <li key={index}>
                <a href={`/products/${product._id}`}>{product.title}</a>
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