import React, { useState } from 'react';

const PersonCard = (props) => {
    const { firstName, 
            lastName,
            age,
            hairColor
        } = props;

    const [state, setState] = useState ({
        myAge: age
    });

    const handleClick = () => {
        setState({
            myAge: state.myAge + 1
        });
    }
    
    return (
        <div className="card col">
            <div className="card-body">
                <h5 className="card-title">{lastName}, {firstName}</h5>
                <p>Age: {state.myAge}</p>
                <p>Hair Color:{hairColor}</p>
                <button onClick={ handleClick }>Birthday Button for {firstName + ' ' + lastName}</button>
            </div>
        </div>
    );
}

export default PersonCard;