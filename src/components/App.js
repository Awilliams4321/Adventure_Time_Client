import React from 'react';
import Router from './Router'
import TrailsContainer from './TrailsContainer'
import NavBar from './NavBar'
import DeleteButton from './Like';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
        <div>
            <h1>Adventure Time!</h1>
            <NavBar />
            <TrailsContainer />
            <Router />
        </div>
    );
};

export default App;