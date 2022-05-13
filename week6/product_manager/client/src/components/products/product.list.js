import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ProductList = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(
        () => {
            axios
                .get('http://localhost:8080/api/products')
                .then(
                    (res) => {
                        setProducts(res.data.products);
                    }
                )
        }
    , []);

    const renderOne = (product, index) => {
        return (
            <li key={index}>
                <a href={`/products/${product._id}`}>{product.title}</a>
            </li>
        );
    };

    return (
        <div className="container">
            <h1 className="text-center row">All Products</h1>
            <ul className="row">
                { products.map( (product, index) => renderOne(product, index) ) }
            </ul>
        </div>
    );
};

export default ProductList;