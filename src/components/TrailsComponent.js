import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchTrails } from '../actions/trailsActions'
import TrailsForm from './TrailsForm'

class TrailsComponent extends Component {
    componentDidMount() {
        this.props.fetchTrails()
    }

    render() {
        return (
            <div>
                <TrailsForm />
            </div>
        );
    }
}

export default connect(null, { fetchTrails })(TrailsComponent);
