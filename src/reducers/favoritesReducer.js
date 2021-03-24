export const favoritesReducer = (state = false, action) => {
    switch(action.type){
        case 'UPDATE_FAVORITES':
            const favoriteTrails = state.trails.filter(trail => trail.favorite === true)
            return {
                favorites: favoriteTrails
            }
            default:
                return state
    }
}
