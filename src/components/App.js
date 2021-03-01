import React from 'react';
import Router from './Router'
import TrailsContainer from './TrailsContainer'
import NavBar from './NavBar'

const App = () => {
    return (
        <div>
            <NavBar />
            <TrailsContainer />
            <Router />
        </div>
    );
};

export default App;