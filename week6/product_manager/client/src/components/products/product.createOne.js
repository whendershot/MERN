import React, {useState} from 'react';
import axios from 'axios';

const AddProductForm = (props) => {

    // const [validated, setValidated] = useState(false);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0.0);
    const [description, setDescription] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        
        //creation
        const _newProduct = {
            "title": title,
            "price": price,
            "description": description
        };
        
        //validation


        //submission
        //{TODO} Find how to programatically send in the destination server address
        axios.post(
            'http://localhost:8080/api/products',
            _newProduct
        ).then(
            (res) => {
                console.log(res);
                console.log(res.data);
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );

        //cleanup
        e.target.product_title.value = "";
        e.target.product_price.value = 0.0;
        e.target.product_description.value = "";
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
            <h1 className="text-center">Product Manager</h1>
            <form className="container m-3" onSubmit={ (e) => handleSubmit(e) }>
                <div className="row mb-3">
                    <label htmlFor="product_title" className="form-label col-form-label col-3">Title</label>
                    <div className="col-8">
                        <input type="text" className="form-control" name="product_title" onChange={ (e) => handleTitle(e) }></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="product_price" className="form-label col-form-label col-3">Price</label>
                    <div className="col-8">
                        <input type="text" className="form-control" name="product_price" onChange={ (e) => handlePrice(e) }></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="product_description" className="form-label col-form-label col-3">Description</label>
                    <div className="col-8">
                        <input type="text" className="form-control" name="product_description" onChange={ (e) => handleDescription(e) }></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <button className="btn btn-primary" type="submit">Add</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProductForm;