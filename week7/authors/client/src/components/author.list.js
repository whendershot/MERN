import React from "react";
import {useNavigate} from "react-router-dom";

const AuthorList = (props) => {

    const {
        authors
    } = props;

    const navigate = useNavigate();

    const authorListElement = (author, index) => {
        return (
            <tr key={index}>
                <td >{author.name}</td>
                <td >
                    <button onClick={ () => navigate(`/authors/${author._id}`) }>Edit</button>
                    <button onClick={ () => navigate(`/authors/${author._id}/delete`) }>Delete</button>
                </td>
            </tr>
        );
    };

    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map( (author, index) => { return authorListElement(author, index)} )}
                </tbody>
            </table>
        </div>
    );
};

export default AuthorList;