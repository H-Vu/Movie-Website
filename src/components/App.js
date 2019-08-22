import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import Header from './Header'
import PageHome from './navigation/Home';
import PageSearch from './navigation/Search';



const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Container>
                    <div>
                        <Route path="/" exact component={PageHome} />
                        <Route path="/Search" exact component={PageSearch} />
                    </div>
                </Container>
            </BrowserRouter>
        </div>
    );
};

export default App;