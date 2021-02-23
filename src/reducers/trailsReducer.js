export const trailsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_TRAILS':
            return action.payload
        case 'ADD_TRAIL':
            return [...state, action.payload]    
        default:
            return state
    }
}