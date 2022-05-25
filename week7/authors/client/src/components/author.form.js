import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const AuthorForm = (props) => {

    const {
        isEditable,
        onSubmit,
        errors,
        author
    } = props;

    const [_name, setName] = useState((author && author.name) || "");
    //eslint-disable-next-line
    const [_isEditable, setIsEditable] = useState(isEditable);

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmit({name: _name});
    };

    return (
        <div className="container card">
            <form className="container m-3" onSubmit={ (e) => onSubmitHandler(e) }>
                <div className="row mb-3">
                    <label htmlFor="author_name" className="form-label col-form-label col-3">Name:</label>
                    <div className="col-9">
                        <input type="text" value={_name} className={`form-control${(!_isEditable && "-plaintext") || ""}`} readOnly={!_isEditable} name="author_name" onChange={ (e) => setName(e.target.value) }></input>
                    </div>
                </div>
                { errors.name && <p className="text-danger row mb-3">{errors.name.message}</p> }
                <div className="row">
                    <div className="col-sm-2">
                        <button className="btn btn-primary" onClick={() => navigate("/")}>Cancel</button>
                    </div>
                    <div className="col-sm-2">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AuthorForm;