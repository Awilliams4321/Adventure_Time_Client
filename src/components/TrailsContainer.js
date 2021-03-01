import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchTrails } from '../actions/trailsActions'
import { Switch, Route } from 'react-router-dom'

import TrailsForm from './TrailsForm'


class TrailsContainer extends Component {
    componentDidMount() {
        this.props.fetchTrails()
    }

    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/trails/new">
                        <TrailsForm /> 
                    </Route>
                </Switch>
            </>
            
        );
    }
}

export default connect(null, { fetchTrails })(TrailsContainer);
