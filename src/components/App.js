import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PageHome from './navigation/Home';
import PageSearch from './navigation/Search';



const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageHome} />
                    <Route path="/Search" exact component={PageSearch} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;