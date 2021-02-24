import React, { Component } from 'react';
import { connect } from 'react-redux'

class TrailsList extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {trails: state.trails}
}

export default connect(mapStateToProps)(TrailsList);