import React, { Component } from 'react';
import { connect } from 'react-redux'
import deleteTrail from '../actions/trailsActions'
import updateFavorites from '../actions/favoritesActions'


const TrailsList =({ trails, deleteTrail, history }) => {
    const handleClick = event => {
        const id = parseInt(event.target.id)
        // debugger
        // console.log("clicked", id )
        deleteTrail(id)
        history.push('/trails')
    }
    
    const handleFavorites = event => {
        event.preventDefault()
        const favValue = !event.target.value
        // !favValue
        debugger
        console.log("favorited")
        // updateFavorites()
    }

    return (
        <div>
            {trails.map(trail => <ul><li key={trail.id}>
                {console.log(trails)}
                {trail.name} - {trail.location}<br/>
                Length: {trail.length}<br/>
                Est. Time: {trail.estimated_time}<br/>
                Intensity: {trail.intensity}<br/> 
                {trail.favorite}

                <Button><button id={trail.id} onClick={handleClick}>Delete Trail</button></Button>
                <button id={trail.id} value={trail.favorite} onClick={handleFavorites}>Add to Favorites</button>

                </li></ul>)}
                
        </div>
    )
}

const mapStateToProps = state => {
    return {
        trails: state.trails
    }
}

export default connect(mapStateToProps, { deleteTrail })(TrailsList);