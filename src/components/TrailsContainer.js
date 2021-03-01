import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchTrails } from '../actions/trailsActions'
import { Switch, Route } from 'react-router-dom'
import TrailsList from './TrailsList'
import TrailsForm from './TrailsForm'


class TrailsContainer extends Component {
    componentDidMount() {
        this.props.fetchTrails()
    }

    render() {
        return (
            <div>
            </div>
            
        );
    }
}

export default connect(null, { fetchTrails })(TrailsContainer);
