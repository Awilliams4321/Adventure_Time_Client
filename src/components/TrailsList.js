import React, { Component } from 'react';
import { connect } from 'react-redux'

const TrailsList =({ trails }) => {
    return (
        <div>
            {trails.map(trail => <ul><li key={trail.id}>
                {trail.name} - {trail.location}<br/>
                Length: {trail.length}<br/>
                Est. Time: {trail.estimated_time}<br/>
                Intensity: {trail.intensity}<br/>
                </li></ul>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {trails: state.trails}
}

export default connect(mapStateToProps)(TrailsList);