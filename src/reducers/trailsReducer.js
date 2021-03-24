export const trailsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_TRAILS':
            return action.payload
        case 'ADD_TRAIL':
            return [...state, action.payload]    
        case 'DELETE_TRAIL':
            const newTrailList = state.trails.filter(trail => trail.id !== action.payload)
            return {
                trails: newTrailList
            }
        default:
            return state
    }
}