import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Homepage from '../components/Homepage'
import TrailsList from '../components/TrailsList'
import TrailsForm from '../components/TrailsForm'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/trails' component={TrailsList} />
            <Route exact path='/trails/new' component={TrailsForm} />

        </Switch>

    );
};

export default Router;