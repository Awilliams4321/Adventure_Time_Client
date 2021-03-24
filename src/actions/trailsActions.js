export const fetchTrails = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/trails")
        .then(resp => resp.json())
        .then(trails => dispatch({type: 'FETCH_TRAILS', payload: trails}))
    }
}

export const addTrail = (trail, history) => {
    return (dispatch) => {
        fetch("http://localhost:3000/trails", {
        method: "POST",
        body: JSON.stringify(trail),
        headers: { "Content-Type": "application/json"}
    })
    .then(resp => resp.json())
    .then(trail => {
        dispatch({type: 'ADD_TRAIL', payload: trail})
        history.push('/trails')
    })
    }
}

export default function deleteTrail(trailId){
    return (dispatch) => {
        return fetch(`http://localhost:3000/trails/${trailId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => dispatch({type: 'DELETE_TRAIL', payload: trailId})
        )
        .catch(error => console.error(error))
    }
}
