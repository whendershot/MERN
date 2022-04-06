import React from 'react';

const PersonCard = (props) => {
    return (
        <div className="card col">
            <div className="card-body">
                <h5 className="card-title">{props.firstName}, {props.lastName}</h5>
                <p>Age: {props.age}</p>
                <p>Hair Color:{props.hairColor}</p>
            </div>
        </div>
    );
}

export default PersonCard;