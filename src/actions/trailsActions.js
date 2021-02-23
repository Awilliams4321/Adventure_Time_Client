export const fetchTrails = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/trails")
        .then(resp => resp.json())
        .then(trails => dispatch({type: 'FETCH_TRAILS', payload: trails}))
    }
}