import { connect } from 'react-redux'
import deleteTrail from './actions/deleteTrail'
import { withRouter } from 'react-router-dom'
import TrailsForm from './TrailsForm'

function Trail(props){
    
    const handleClick = () => {
        props.deleteTrail(props.trail.id)
        props.history.push('/trail')

    }

    return (
    <>
        <li>{props.list && props.trail.name}<button onClick={handleClick}>Delete</button></li>
        <TrailsForm list={props.trail}/>
    </>
    )
}

export default withRouter(connect(null, { deleteTrail })(Trail))