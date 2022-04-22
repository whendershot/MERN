import React, { useState } from 'react';

const ColorForm = (props) => {

    const [color, setColor] = useState("");
    const [errors, setErrors] = useState("");

    const handleColor = (e) => {
        const _color = e.target.value;
        setColor(_color);
        let s = new Option().style;
        s.color = _color;

        setErrors(s.color === _color.toLowerCase() ? "" : "" + _color + " is not a valid CSS color");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( !errors && color.length ) {
            props.addColor(color);
            setColor("");
            e.target.color.value = "";
        }
    };

    return (
        <form className="container mt-3" onSubmit={ (e) => handleSubmit(e) }>
            <div className="row mb-3">
                <label htmlFor="color" className="form-label col-sm-2 col-form-label">Color</label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" name="color" id="color" onChange={ (e) => handleColor(e) }/>
                </div>
                <div className="col-sm-2">
                    <button className="btn btn-primary" type="submit">Add</button>
                </div>
            </div>
            { errors !== "" && 
                <div className="row">
                    <div className="col">
                        <p>{errors}</p>
                    </div>
                </div>
            }
        </form>
    );
};

export default ColorForm;