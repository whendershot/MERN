import React, { useReducer } from 'react';

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    },
    password: {
        value: '',
        error: null
    },
    confirm: {
        value: '',
        error: null
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_FIRST_NAME_VALUE":
            return {
                ...state,
                firstName: {
                    ...state.firstName,
                    value: action.payload
                }
            }
        case "SET_FIRST_NAME_ERROR":
            return {
                ...state,
                firstName: {
                    ...state.firstName,
                    error: action.payload
                }
            }
    }
};

const RegisterCard = (props) => {

    const EMAIL_FORMAT = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleFirstName = (e) => {
        dispatch({
            type: "SET_FIRST_NAME_VALUE",
            payload: e.target.value
        });

        if (e.target.value && e.target.value.length < 3) {
            dispatch({
                type: "SET_FIRST_NAME_ERROR",
                payload: "First Name must be at least 3 characters"
            });
        } else {
            dispatch({
                type: "SET_FIRST_NAME_ERROR",
                payload: ""
            });
        }
    };

    return (
    <div className="container">
        <div className="row">
            <div className="col col-sm-12">
                <div className="card">
                    <form className="card-body" >
                        <div className="row mb-3">
                            <label htmlFor="new_user_first_name" className="form-label">First Name:</label>
                            <input type="text" className="form-control" name="new_user_first_name" onChange={ (e)=> handleFirstName(e) }/>
                            { state.firstName.error && <p>{state.firstName.error}</p> }
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="new_user_last_name" className="form-label">Last Name:</label>
                            <input type="text" className="form-control" name="new_user_last_name"/>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="new_user_email" className="form-label">Email:</label>
                            <input type="email" className="form-control" name="new_user_email"/>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="new_user_password" className="form-label">Password:</label>
                            <input type="password" className="form-control" name="new_user_password"/>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="new_user_confirm" className="form-label">Confirm PW:</label>
                            <input type="password" className="form-control" name="new_user_confirm"/>
                        </div>
                        <div className="row justify-content-end">
                            <button type="submit" className="col-sm-3 btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default RegisterCard;