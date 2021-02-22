export const trailsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_TRAILS':
            return action.payload
        default:
            return state
    }
}