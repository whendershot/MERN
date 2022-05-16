import React, {useState, useLayoutEffect}from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';
import axios from 'axios';

const ProductEditOne = (props) => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    useLayoutEffect(() => {
        axios.get('http://localhost:8080/api/products/' + id)
            .then((response) => {
                console.log(response.data);
                setTitle(response.data.title);
                setPrice(response.data.price);
                setDescription(response.data.description);
            })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //update
        const _product = {
            "title": title,
            "price": price,
            "description": description
        };
        
        //validation


        //submission
        editProduct(_product);

    };

    const deleteProduct = (e) => {
        e.preventDefault();
        axios
            .delete('http://localhost:8080/api/products/' + id)
            .then(
                (response) => {
                    console.log(response);
                    navigate("/products/");
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                }
            )
    };

    const editProduct = (product) => {
        axios
            .put(
                'http://localhost:8080/api/products/' + id,
                {...product}
            )
            .then(
                (response) => {
                    console.log(response);
                    navigate("/products/" + id);
                }
            )
            .catch((response) => {
                console.log(response.data);
            })
    };

    const handleTitle = (e) => {
        const _title = e.target.value;
        setTitle(_title);
    };

    const handlePrice = (e) => {
        const _price = e.target.value;
        setPrice(_price);
    };

    const handleDescription = (e) => {
        const _description = e.target.value;
        setDescription(_description);
    };

    return (
        <div className="container">
            <form className="container m-3" onSubmit={ (e) => handleSubmit(e) }>
                <div className="row mb-3">
                    <label htmlFor="product_title" className="form-label col-form-label col-3">Title</label>
                    <div className="col-8">
                        <input type="text" value={title} className="form-control" name="product_title" onChange={ (e) => handleTitle(e) }></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="product_price" className="form-label col-form-label col-3">Price</label>
                    <div className="col-8">
                        <input type="text" value={price} className="form-control" name="product_price" onChange={ (e) => handlePrice(e) }></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="product_description" className="form-label col-form-label col-3">Description</label>
                    <div className="col-8">
                        <input type="text" value={description} className="form-control" name="product_description" onChange={ (e) => handleDescription(e) }></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                    <div>
                        <button className="btn btn-warning" onClick={ (e) => deleteProduct(e) }>Delete</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProductEditOne;