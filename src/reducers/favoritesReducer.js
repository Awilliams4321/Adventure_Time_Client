export const favoritesReducer = (state = [], action) => {
    switch(action.type){
        case 'UPDATE_FAVORITES':
            console.log(state)
            console.log(action.payload)
            return action.payload
            default:
                return state
    }
}
