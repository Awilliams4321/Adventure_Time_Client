export const trailsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_TRAILS':
            return action.payload
        case 'ADD_TRAIL':
            return [...state, action.payload]    
        case 'DELETE_TRAIL':
            return state.filter(trail => trail.id !== action.payload)
        default:
            return state
    }
}