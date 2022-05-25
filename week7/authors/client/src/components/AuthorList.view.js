import React, {useState, useEffect} from "react";
import axios from "axios";

import AuthorList from "./author.list";

const AuthorListView = (props) => {

    const [authors, setAuthors] = useState([]);

    useEffect(
        () => {
            axios
                .get(
                    'http://localhost:8080/api/authors'
                )
                .then(
                    (res) => {
                        console.log(res);
                        const _arr = [].concat(res.data.authors)
                            .sort((a, b) => a.name >= b.name ? 1 : -1)
                        setAuthors(_arr);
                    }
                )
                .catch(
                    (err) => {
                        console.log(err);
                    }
                )
        }
        , []
    );

    return (
        <>
            <AuthorList authors={authors} />
        </>
    );
};

export default AuthorListView;