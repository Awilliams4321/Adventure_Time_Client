import React, { Component } from 'react';
import { connect } from 'react-redux'
import deleteTrail from '../actions/trailsActions'
import updateFavorites from '../actions/favoritesActions'

import { Switch, Route } from 'react-router-dom'
import TrailsContainer from './TrailsContainer'

import { Button } from 'reactstrap';



class TrailPage extends Component {

    render() {

        const handleClick = (id) => {
            this.props.deleteTrail(id)
        }

        const handleFavorite = (id) => {
            const trail = this.props.trail
            // this.props.trail.favorite = true
            console.log(trail.id)
            this.props.updateFavorites(trail)
        }

        return (
            <div>
                <ul><li key={this.props.trail.id}>
                    {this.props.trail.name} - {this.props.trail.location}<br/>
                    Length: {this.props.trail.length}<br/> 
                    Intensity: {this.props.trail.intensity}<br/>
                    Est. Time: {this.props.trail.estimated_time}<br/>
                    <Button color="danger" id={this.props.trail.id} onClick={() => handleClick(this.props.trail.id)}>Delete Trail</Button>{' '}
                    <Button color="success" id={this.props.trail.id} onClick={() => handleFavorite(this.props.trail)}>Add to Favorites</Button>{' '}

                </li></ul><br/>

            </div>
            
        );
    }
}

export default connect(null, { deleteTrail, updateFavorites })(TrailPage);

