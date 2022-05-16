import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';

import ProductShowOne from '../components/products/product.details';

const ProductDetailsView = (props) => {

    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8080/api/products/' + id)
            .then((response) => {
                console.log(response.data);
                setProduct(response.data);
            })
    }, []);

    return (
        <>
            <ProductShowOne product={product} />
            <Link to={"/products/" + id + "/edit"}>edit</Link>
        </>
    );
};

export default ProductDetailsView;