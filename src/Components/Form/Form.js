import React, { Component } from 'react';
import './Form.scss';
import axios from 'axios';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.gnomeId,
            submitedName: '',
            submitedAge: '',
            submitedStrength: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    onSubmit(event) {
        event.preventDefault();
        
        const gnome = {
                name: this.state.submitedName,
                age: this.state.submitedAge,
                strenght: this.state.submitedStrength,
              }
        console.log(gnome);
        
        axios.post(`http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes/${this.state.id}`, {gnome})
        .then( res => {
            console.log(res);
            console.log(res.data);
        });
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="submitedName" id="name" defaultValue={this.props.gnomeName} onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type="text" name="submitedAge" id="age" defaultValue={this.props.gnomeAge} onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="strength">Strength</label>
                    <input type="text" name="submitedStrength" id="strength" defaultValue={this.props.gnomeStrength} onChange={this.handleChange}/>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        )
    }
}

export default Form;