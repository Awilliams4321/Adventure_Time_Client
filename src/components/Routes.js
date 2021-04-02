import React from 'react';
import { Switch, Route } from 'react-router-dom'
import TrailsContainer from './TrailsContainer'
// import TrailsPage from './TrailPage'
import TrailsForm from './TrailsForm'
import FavoriteTrailsPage from './FavoriteTrailsPage'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={TrailsContainer} />
            <Route exact path='/trails' component={TrailsContainer} />
            <Route exact path='/trails/new' component={TrailsForm} />
            <Route exact path='/trails/favorites' component={FavoriteTrailsPage} />

        </Switch>

    );
};

export default Router;