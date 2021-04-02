import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchTrails } from '../actions/trailsActions'
import TrailPage from './TrailPage'
import { Switch, Route } from 'react-router-dom'
// import TrailsList from './TrailsList'
// import TrailsForm from './TrailsForm'
import deleteTrail from '../actions/trailsActions'
import updateFavorites from '../actions/favoritesActions'
import { Button } from 'reactstrap';

class TrailsContainer extends Component {

    // state = {
    //     count: 0
    // }
    // constructor(props) {
    //     super(props);
    //     this.state = {count: 0};
    
    //     this.handleCounter = this.handleCounter.bind(this);
    // }
 
    componentDidMount() {
        this.props.fetchTrails()
    }

    renderTrails(){
        return this.props.trails.map(trail => <TrailPage trail={trail} history={this.props.history}/>)
    } 
    

    render() {
        const {
            trails,
            deleteTrail,
            history
        } = this.props;

        // const handleClick = event => {
        //     const id = parseInt(event.target.id)
        //     deleteTrail(id)
        //     // console.log(history)
        //     history.push('/trails')
        // }
        
        // const handleFavorites = event => {
        //     event.preventDefault()
        //     const favValue = event.target.value
        //     // favValue
        //     debugger
        //     // console.log("favorited")
        //     // updateFavorites(favValue)
        // }

        // const handleCounter = e => {
        //     // debugger
        //     const buttonNum = parseInt(e.target.value)
        //     debugger
        //     this.setState(state => ({
        //         count: parseInt(e.target.value) + 1
        //     }))
           
        //     // console.log(this.state.count + 1)
           
        // }
        
        return (
            <ul>
                {this.props.trails.map(trail => <TrailPage trail={trail}/>)}
            </ul>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        trails: state.trails,
        // favorites: state.trails.favorite
    }
}

export default connect(mapStateToProps, { fetchTrails, deleteTrail, updateFavorites })(TrailsContainer);
