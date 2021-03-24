import React from 'react';
import { connect } from 'react-redux'

// import { Card } from 'react-bootstrap'
const handleClick = e => {
    e.preventDefault()
    console.log(e)
}

const Favorites =({ trails }) => {
    const favoriteTrails = trails.filter(trail => trail.favorite === true)
    console.log(favoriteTrails)

    return (
        <div>
            {favoriteTrails.map(trail => <ul><li key={trail.id}>
                {trail.name} - {trail.location}<br/>
                Length: {trail.length}<br/>
                Est. Time: {trail.estimated_time}<br/>
                Intensity: {trail.intensity}<br/> 
                <button onClick={handleClick}>Remove from List</button>

                </li></ul>)}
           
        </div>
    )
}

const mapStateToProps = state => {
    return {trails: state.trails}
}

export default connect(mapStateToProps)(Favorites);