export default function updateFavorites(trailId){
    return (dispatch) => {
        return fetch(`http://localhost:3000/trails/${trailId}`, {
            method: "PATCH",
            body: trailId,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(res => res.json())
        .then(message => { 
            dispatch({type: 'UPDATE_FAVORITES', payload: trailId.favorite = true})
        })
    }
}