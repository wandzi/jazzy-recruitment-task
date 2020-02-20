import React, { Component } from 'react';
import './Form.scss';
import axios from 'axios';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.gnomeId,
            submitedName: props.gnomeName,
            submitedAge: props.gnomeAge,
            submitedStrength: props.gnomeStrength,
            validationMessage: '',
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleValidationMessage = (validationMessage) => {
       this.setState({ validationMessage });
    }

    onSubmit(event) {
        event.preventDefault();
        
        const gnome = {
                name: this.state.submitedName,
                age: this.state.submitedAge,
                strenght: this.state.submitedStrength,
              }

        // Color of validation message
        if (gnome.name.length === 0 || gnome.age.length === 0 || gnome.strenght.length === 0) {
            this.handleValidationMessage('You should fill all the inputs.');
        } else if ( gnome.age < 0 || gnome.age > 100 ) { 
            this.handleValidationMessage('Gnome age should be from 0 to 100');
        } else if ( gnome.strenght < 0 || gnome.strenght > 100 ) { 
            this.handleValidationMessage('Gnome strength should be from 0 to 100');
        } else {
        
            axios.post(`http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes/${this.state.id}`, {gnome})
            .then( res => {
                console.log(res);
                console.log(res.data);
                this.handleValidationMessage('Gnome edited succesfully.');
            })
            .catch( error => {
                this.handleValidationMessage('Request problem with editing Gnome.');
                console.log(error);
            });   
        }     
    }

    render() {
        let validationMessageColor = null;

        switch(this.state.validationMessage) {
            case 'Gnome edited succesfully.':
                validationMessageColor={color: `#1EFF00`};
                break;
            case 'Gnome age should be from 0 to 100':
                validationMessageColor={color: `#1800F3`};
                break;
            case 'Gnome strength should be from 0 to 100':
                validationMessageColor={color: `#1800F3`};
                break;
            case 'You should fill all the inputs.':
                validationMessageColor={color: `#FF0000`};
                break;
            case 'Request problem with editing Gnome.':
                validationMessageColor={color: `#FF0000`};
                break;
            default: validationMessageColor = null;
        }

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
                {this.state.validationMessage ? <p className="message" style={validationMessageColor}>{this.state.validationMessage}</p> : null}
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        )
    }
}

export default Form;