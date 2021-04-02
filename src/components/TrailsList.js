// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import deleteTrail from '../actions/trailsActions'
// import updateFavorites from '../actions/favoritesActions'
// import { Button } from 'reactstrap';

// const TrailsList =({ trails, deleteTrail, history }) => {
//     // componentDidMount() {
//     //     this.props.fetchTrails()
//     // } 
    
//     const handleClick = event => {
//         const id = parseInt(event.target.id)
//         deleteTrail(id)
//         console.log(history)
//         history.push('/trails')
//     }
    
//     const handleFavorites = event => {
//         event.preventDefault()
//         const favValue = event.target.value
//         // favValue
//         debugger
//         // console.log("favorited")
//         updateFavorites(favValue)
//     }

//     return (
//         <div>
//             {trails.map(trail => <ul><li key={trail.id}>
//                 {console.log(trails)}
//                 {trail.name} - {trail.location}<br/>
//                 Length: {trail.length}<br/>
//                 Est. Time: {trail.estimated_time}<br/>
//                 Intensity: {trail.intensity}<br/> 
//                 {trail.favorite}

                
//                 <Button color="danger" id={trail.id} onClick={handleClick}>Delete Trail</Button>{' '}
//                 <Button color="success" id={trail.id} value={trail.favorite} onClick={handleFavorites}>Add to Favorites</Button>

//                 </li></ul>)}
                
//         </div>
//     )
// }

// const mapStateToProps = state => {
//     return {
//         trails: state.trails,
//         // favorites: state.trails.favorite
//     }
// }

// export default connect(mapStateToProps, { deleteTrail, updateFavorites })(TrailsList);