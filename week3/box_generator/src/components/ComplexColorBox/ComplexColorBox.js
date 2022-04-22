import React, { useState } from 'react';

import ComplexColorForm from "./ComplexColorForm";
import ComplexColorBoxGrid from './ComplexColorBoxGrid';

const ComplexColorBox = (props) => {

    const [colorArr, setColorArr] = useState([]);

    const addColor = (color, height, width) => {
        setColorArr( (_arr) => [..._arr, {"color": color, "height": height, "width": width}] );
        console.log("Adding: " + color + ": " + height + "x" + width + " to: [" + colorArr + "]");
    };

    return (
        <>
            <ComplexColorForm addColor={ addColor } />
            <ComplexColorBoxGrid colors={ colorArr } />
        </>
    );
};

export default ComplexColorBox;