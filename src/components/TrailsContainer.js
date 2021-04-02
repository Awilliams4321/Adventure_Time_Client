import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchTrails } from '../actions/trailsActions'
import TrailPage from './TrailPage'
import { Switch, Route } from 'react-router-dom'
// import TrailsList from './TrailsList'
import TrailsForm from './TrailsForm'
import deleteTrail from '../actions/trailsActions'
import updateFavorites from '../actions/favoritesActions'
import { Button } from 'reactstrap';

class TrailsContainer extends Component {
 
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
        
        // const handleFavorites = event => {
        //     event.preventDefault()
        //     const favValue = event.target.value
        //     // favValue
        //     debugger
        //     // console.log("favorited")
        //     // updateFavorites(favValue)
        // }
        
        return (
            <ul>
                <Route exact path="/trails">
                {this.props.trails.map(trail => <TrailPage trail={trail}/>)}
                </Route>
                <Route path="/trails/new">
                    <TrailsForm />
                </Route>
            </ul>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        trails: state.trails,
    }
}

export default connect(mapStateToProps, { fetchTrails, deleteTrail, updateFavorites })(TrailsContainer);
