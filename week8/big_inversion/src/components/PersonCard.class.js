import React, {Component} from "react";

class PersonCardClass extends Component {

    render() {
        const {
            firstName,
            lastName,
            age,
            hairColor
        } = this.props;

        return (
            <div className="card col">
                <div className="card-body">
                    <h5 className="card-title">{lastName}, {firstName}</h5>
                    <p>Age: {age}</p>
                    <p>Hair Color:{hairColor}</p>
                </div>
            </div>
        );
    };

};

export default PersonCardClass;