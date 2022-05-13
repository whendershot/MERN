import React from 'react';

const ProductShowOne = (props) => {

    const {product} = props;

    return (
        <div className="container">
            <div className="card">
                <h1 className="text-center">{product.title}</h1>
                <p>{`Price: $${product.price}`}</p>
                <p>{`Description: ${product.description}`}</p>
            </div>
        </div>
    );
};

export default ProductShowOne;