import React, { Component } from 'react';

class TrailsForm extends Component {
    state = {
        name: "",
        location: "",
        length: "",
        estimated_time: "",
        intensity: "",
        image: "",
        favorite: ""
    }

    render() {
        return (
            <form>
                <label>Name:</label>
                <input type="text" value={this.state.name} onChange={this.handleChange} name="name"/>
                < br/> 
                <label>Location:</label>
                <input type="text" value={this.state.location onChange={this.handleChange} name="location"/>
                < br/> 
                <label>Length:</label>
                <input type="text" value={this.state.length} onChange={this.handleChange} name="length"/>
                < br/> 
                <label>Estimated Time:</label>
                <input type="text" value={this.state.estimated_time} onChange={this.handleChange} name="estimated_time"/>
                < br/> 
                <label>Intensity Level:</label>
                <input type="text" value={this.state.intensity} onChange={this.handleChange} name="intensity"/>
                < br/> 
                <label>Image:</label>
                <input type="text" value={this.state.image} onChange={this.handleChange} name="image"/>
                < br/> 
                <label>Favorite:</label>
                <input type="text" value={this.state.favorite} onChange={this.handleChange} name="favorite"/>
                < br/> 
                <input type="submit" value="Add Trail" />
            </form>
        );
}

export default TrailsForm;