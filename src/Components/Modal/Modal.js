import React, { Component } from 'react';
import GnomeAvatar from '../../../src/assets/gnome.png';
import Form from '../Form/Form';
import './Modal.scss';

class Modal extends Component {
    constructor(props) {
        super(props);
    }
    
    onClose = (event) => {
        this.props.onClose && this.props.onClose(event);
    }

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
                <Form 
                    gnomeId={this.props.gnomeId}
                    gnomeName={this.props.gnomeName}
                    gnomeAge={this.props.gnomeAge}
                    gnomeStrength={this.props.gnomeStrength}
                />
            </div>
        </div>
        );
    }
}

export default Modal