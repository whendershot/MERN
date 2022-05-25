import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

import AuthorForm from "./author.form";

const AuthorCreateView = (props) => {

    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const addAuthor = (author) => {
        axios
            .post(
                'http://localhost:8080/api/authors',
                author
            )
            .then(
                (res) => {
                    console.log(res);
                    navigate("/authors");
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                    setErrors(err.response.data.errors);
                }
            );
    };

    return (
        <>
            <AuthorForm isEditable={true} onSubmit={addAuthor} errors={errors} />
        </>
    );
};

export default AuthorCreateView;