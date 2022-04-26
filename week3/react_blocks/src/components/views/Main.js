import React from 'react';

const Main = (props) => {

    return (
        <div className="main p-3">
            {props.children}
        </div>
    );
};

export default Main;