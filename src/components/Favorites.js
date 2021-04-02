import React from 'react';
import { connect } from 'react-redux'

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
                </li></ul>)}<br/><br/>
        </div>
    )
}

const mapStateToProps = state => {
    return {trails: state.trails}
}

export default connect(mapStateToProps)(Favorites);