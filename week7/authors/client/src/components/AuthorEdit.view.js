import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

import AuthorForm from "./author.form";

const AuthorEditView = (props) => {

    const {id} = useParams();

    const [errors, setErrors] = useState([]);
    const [author, setAuthor] = useState({});
    const [loaded, setLoaded] = useState(false);

    const navigate = useNavigate();

    useEffect(
        () => {
            axios
            .get(
                "http://localhost:8080/api/authors/" + id,
            )
            .then(
                (res) => {
                    console.log(res);
                    setAuthor(res.data);
                    setLoaded(true);
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                }
            )
        }
    );

    const editAuthor = (author) => {
        axios
            .put(
                "http://localhost:8080/api/authors" + id,
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
            {
                loaded ?
                <AuthorForm isEditable={true} onSubmit={editAuthor} errors={errors} author={author} /> :
                <h1>Loading Author</h1>
            }
        </>
    );
};

export default AuthorEditView;