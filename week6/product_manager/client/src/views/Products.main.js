import React, {useState, useEffect} from 'react';
import AddProductForm from '../components/products/product.createOne';
import ProductList from '../components/products/product.list';
import axios from 'axios';

const ProductsMainView = (props) => {

    const [productsArr, setProductsArr] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/products')
        .then((res) => {
            setProductsArr(res.data.products);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    const addProduct = (product) => {

        // submission
        // {TODO} Find how to programatically send in the destination server address
        axios.post('http://localhost:8080/api/products', product)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProductsArr([...productsArr, res.data]);
            })
            .catch((err) => {
                console.log(err);
            });

    };

    return (
        <>
            <AddProductForm addProduct={addProduct}/>
            <ProductList products={productsArr}/>
        </>
    );
};

export default ProductsMainView;
