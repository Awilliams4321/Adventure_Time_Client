import React from 'react';
import Routes from './Routes'
import TrailsContainer from './TrailsContainer'
import NavBar from './NavBar'

const App = () => {
    return (
        <div>
            <h1>Adventure Time!</h1>
            <NavBar />
            {/* <TrailsContainer /> */}
            <Routes />
        </div>
    );
};

export default App;