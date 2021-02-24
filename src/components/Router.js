import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Homepage from '../components/Homepage'
import TrailsComponent from '../components/TrailsComponent'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/trails' component={TrailsComponent} />

        </Switch>

    );
};

export default Router;