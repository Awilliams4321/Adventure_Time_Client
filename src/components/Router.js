import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Homepage from '../components/Homepage'
import TrailsList from '../components/TrailsList'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/trails' component={TrailsList} />

        </Switch>

    );
};

export default Router;