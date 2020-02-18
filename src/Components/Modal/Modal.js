import React, { Component } from 'react';
import GnomeAvatar from '../../../src/assets/gnome.png';
import './Modal.scss';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
      };
    render() {
        if(!this.props.show) {
            return null;
        }
        return (
        <div className="modal-container">
            <div className="modal-body">
                <a href="#" className="close-btn" onClick={this.props.onClose}></a>
                <img src={GnomeAvatar} alt="gnome avatar"/>
                <h1>Edit {this.props.gnomeName}</h1>
                <form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" defaultValue={this.props.gnomeName}/>
                    </div>
                    <div>
                        <label htmlFor="age">Age</label>
                        <input type="text" name="age" id="age" defaultValue={this.props.gnomeAge}/>
                    </div>
                    <div>
                        <label htmlFor="strength">Strength</label>
                        <input type="text" name="strength" id="strength" defaultValue={this.props.gnomeStrength}/>
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
        );
    }
}

export default Modal