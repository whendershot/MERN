import React from 'react';

const ComplexColorBoxGrid = (props) => {

    const makeElement = (box, index) => {
        return (
            <div key={index} className="box me-3 mb-3" style={{backgroundColor: box.color, height: box.height, width: box.width }}>{box.color}</div>
        );
    };

    return (
        <div className="">
            <div className="d-flex">
                { props.colors.map((box, index) => {return makeElement(box, index);}) }
            </div>
        </div>
    );
};

export default ComplexColorBoxGrid;