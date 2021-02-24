import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Homepage} />
        </Switch>

    );
};

export default Router;