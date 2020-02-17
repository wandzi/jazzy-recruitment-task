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
                <h1>Edit Gnome</h1>
                <form>
                    <input type="text" name="name" id="name" placeholder="Name"/>
                    <input type="text" name="age" id="age" placeholder="Age"/>
                    <input type="text" name="strength" id="strength" placeholder="Strength"/>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
        );
    }
}

export default Modal