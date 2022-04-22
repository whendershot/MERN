import React, { useState } from 'react';

import ColorForm from "./ColorForm";
import ColorBoxGrid from './ColorBoxGrid';

const ColorBox = (props) => {

    const [colorArr, setColorArr] = useState([]);

    const addColor = (color) => {
        setColorArr( (_arr) => [..._arr, color] );
        console.log("Adding: " + color + " to: [" + colorArr + "]");
    };

    return (
        <>
            <ColorForm addColor={ addColor } />
            <ColorBoxGrid colors={ colorArr } />
        </>
    );
};

export default ColorBox;