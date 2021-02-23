import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchTrails } from '../actions/trailsActions'

class TrailsComponent extends Component {
    render() {
        return (
            <div>
                Trails Container
            </div>
        );
    }
}

export default connect(null, { fetchTrails})(TrailsComponent);
