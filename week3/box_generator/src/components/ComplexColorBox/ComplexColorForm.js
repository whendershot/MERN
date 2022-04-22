import React, { useState } from 'react';

const ComplexColorForm = (props) => {

    const [color, setColor] = useState("");
    const [errors, setErrors] = useState("");
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    const handleColor = (e) => {
        const _color = e.target.value;
        setColor(_color);
        let s = new Option().style;
        s.color = _color;

        setErrors(s.color === _color.toLowerCase() ? "" : "" + _color + " is not a valid CSS color");
    };

    const handleHeight = (e) => {
        const _height = e.target.value;
        setHeight(_height);
    };

    const handleWidth = (e) => {
        const _width = e.target.value;
        setWidth(_width);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( !errors && color.length ) {
            props.addColor(color, height, width);
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
            <div className="row mb-3">
                <div className="col-sm">
                    <label htmlFor="height" className="form-label col-form-label">Box Height(px)</label>
                    <input type="number" name="height" className="form-control" min="0" max="30" onChange={ (e) => handleHeight(e) } />
                </div>
                <div className="col-sm">
                    <label htmlFor="width" className="form-label col-form-label">Box Width(px)</label>
                    <input type="number" name="width" className="form-control" min="0" max="30" onChange={ (e) => handleWidth(e) } />
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

export default ComplexColorForm;