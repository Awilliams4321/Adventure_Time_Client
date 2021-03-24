import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Homepage from '../components/Homepage'
import TrailsList from '../components/TrailsList'
import TrailsForm from '../components/TrailsForm'
import Favorites from '../components/Favorites'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/trails' component={TrailsList} />
            <Route exact path='/trails/new' component={TrailsForm} />
            <Route exact path='/trails/favorites' component={Favorites} />

        </Switch>

    );
};

export default Router;