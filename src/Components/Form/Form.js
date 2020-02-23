import React, { Component } from 'react';
import axios from 'axios';
import './Form.scss';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.gnomeId,
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

    formValidation(gnome) {
        
        // Color of validation message
        if (gnome.name.length === 0 || gnome.age.length === 0 || gnome.strenght.length === 0) {
            this.handleValidationMessage('You should fill all the inputs.');
        } else if (gnome.name === this.props.gnomeName && gnome.age === this.props.gnomeAge && gnome.strenght === this.props.gnomeStrength) {
            this.handleValidationMessage('You should edit Gnome before submitting.');
        } else if ( gnome.age < 0 || gnome.age > 100) { 
            this.handleValidationMessage('Gnome age should be from 0 to 100');
        } else if ( gnome.strenght < 0 || gnome.strenght > 100 ) { 
            this.handleValidationMessage('Gnome strength should be from 0 to 100');
        } else {
        
            axios({
                url: `http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes/${this.state.id}`,
                data: {gnome},
                method: 'PATCH',
            })
            .then( res => {
                (res.status === 200) ? this.handleValidationMessage('Gnome edited succesfully.') : this.handleValidationMessage('Request problem with editing Gnome.');
            })
            .catch( error => {
                this.handleValidationMessage(`Request problem with editing Gnome - ${error}`);
            });   

        }     
    }

    onSubmit(event) {
        event.preventDefault();

        const gnome = {
                name: this.state.submitedName,
                age: this.state.submitedAge,
                strenght: this.state.submitedStrength,
              }

        

        this.formValidation(gnome);
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
            case 'You should edit Gnome before submitting.':
                validationMessageColor={color: `#FF0000`};
                break;
            default: validationMessageColor = null;
        }

        return(
            <form onSubmit={this.onSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text" 
                    name="submitedName" 
                    id="name" 
                    defaultValue={this.props.gnomeName} 
                    onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input 
                    type="number" 
                    name="submitedAge" 
                    id="age" 
                    defaultValue={this.props.gnomeAge} 
                    onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="strength">Strength</label>
                    <input 
                        type="number" 
                        name="submitedStrength" 
                        id="strength" 
                        defaultValue={this.props.gnomeStrength} 
                        onChange={this.handleChange}/>
                </div>
                {this.state.validationMessage ? <p className="message" style={validationMessageColor}>{this.state.validationMessage}</p> : null}
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        )
    }
}

export default Form;