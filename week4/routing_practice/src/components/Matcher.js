import React from 'react';
import { useParams } from 'react-router';

const Matcher = (props) => {
    const { word, color1, color2 } = useParams();

    const myStyle = {
        color: color1,
        backgroundColor: color2
    };

    const aWord = ( word ) => {
        return <h1 style={myStyle}>The word is: { word }</h1>
    };

    const aNumber = ( number ) => {
        return <h1>The number is: {number}</h1>;
    };

    return (
        isNaN(word) ? aWord(word) : aNumber(word)
    );
};

export default Matcher;