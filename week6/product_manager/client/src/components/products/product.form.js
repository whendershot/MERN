import React, {useState} from 'react';

const AddProductForm = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0.0);
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //validation

        //creation
        const _product = {
            "title": title,
            "price": price,
            "description": description
        };

        //submission

        //cleanup
        e.target.product_title = "";
        e.target.product_price = 0.0;
        e.target.product_description = "";
    };

    return (
        <form className="container m-3" onSubmit={ (e) => props.onSubmit(e) }>
            <div className="row mb-3">
                <label htmlFor="product_title" className="form-label col-form-label col-3">Product Title</label>
                <div className="col-8">
                    <input type="text" className="form-control" name="product_title"></input>
                </div>
            </div>
        </form>
    );
};

export default AddProductForm;