import React from 'react';
import { 
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import Home from './Home';
import Matcher from './Matcher';


const MyRoutes = (props) => {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route path="/:word/" element={<Matcher />} />
                <Route path="/:word/:color1/:color2" element={<Matcher />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MyRoutes;