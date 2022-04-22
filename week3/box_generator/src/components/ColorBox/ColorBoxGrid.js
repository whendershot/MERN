import React from 'react';

const ColorBoxGrid = (props) => {

    const makeElement = (color, index) => {
        return (
            <div key={index} className="col">
                <div className="box" style={{backgroundColor: color}}>{color}</div>
            </div>
        );
    };

    return (
        <div className="container">
            <div className="row">
                { props.colors.map((color, index) => {return makeElement(color, index);}) }
            </div>
        </div>
    );
};

export default ColorBoxGrid;