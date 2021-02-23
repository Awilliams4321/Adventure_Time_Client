import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchTrails } from '../actions/trailsActions'

class TrailsComponent extends Component {
    componentDidMount() {
        this.props.fetchTrails()
    }

    render() {
        return (
            <div>
                Trails Container
            </div>
        );
    }
}

export default connect(null, { fetchTrails })(TrailsComponent);
