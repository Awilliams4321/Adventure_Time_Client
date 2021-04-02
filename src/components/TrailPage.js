import React, { Component } from 'react';
import { connect } from 'react-redux'
import deleteTrail from '../actions/trailsActions'

// import { Switch, Route } from 'react-router-dom'
import TrailsContainer from './TrailsContainer'
import TrailsList from './TrailsList'
import { Button } from 'reactstrap';



class TrailPage extends Component {

    render() {

        const handleClick = (id) => {
            // const id = parseInt(e.target.id)
            deleteTrail(id)
            // this.props.history.push('/trails')
        }

        return (
            <div>
                <ul><li key={this.props.trail.id}>
                    {this.props.trail.name} - {this.props.trail.location}<br/>
                    Length: {this.props.trail.length}<br/> 
                    Intensity: {this.props.trail.intensity}<br/>
                    Est. Time: {this.props.trail.estimated_time}<br/>
                    <Button color="danger" id={this.props.trail.id} onClick={() => handleClick(this.props.trail.id)}>Delete Trail</Button>{' '}
                </li></ul><br/>

            </div>
            
        );
    }
}

export default connect(null, { deleteTrail })(TrailPage);

