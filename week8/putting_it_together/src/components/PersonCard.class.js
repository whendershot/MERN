import React, {Component} from "react";

class PersonCardClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            _firstName: this.props.firstName,
            _lastName: this.props.lastName,
            _age: this.props.age,
            _hairColor: this.props.hairColor
        }
    };

    incAge = () => {
        this.setState({...this.state, _age:this.state._age + 1});
    };

    render() {
        return (
            <div className="card col">
                <div className="card-body">
                    <h5 className="card-title">{this.state._lastName}, {this.state._firstName}</h5>
                    <p>Age: {this.state._age}</p>
                    <p>Hair Color:{this.state._hairColor}</p>
                </div>
                <button className="btn btn-primary" onClick={this.incAge}>Birthday Button for {this.state._firstName} {this.state._lastName}</button>
            </div>
        );
    };

};

export default PersonCardClass;