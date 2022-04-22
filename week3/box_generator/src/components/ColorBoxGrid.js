import React from 'react';

const ColorBoxGrid = (props) => {

    const makeElement = (color, index) => {
        return (
            <div className="col">
                <div key={index} className="box" style={{border: '1px dotted red', backgroundColor: color}}>{color}</div>
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