import React, { Component } from 'react';
import GnomeAvatar from '../../../src/assets/gnome.png';
import Form from '../Form/Form';
import './Modal.scss';

import { toJS } from 'mobx';
import StoreContext from '../../Mobx/storeContext';

const Modal = (props) => {

    const store = React.useContext(StoreContext);
    console.log(toJS(store));
    
    const onClose = (event) => {
        this.props.onClose && this.props.onClose(event);
    }

    if(!store.show) {
        return null;
    }
    return (
    <div className="modal-container">
        <div className="modal-body">
            <a href="#" className="close-btn" onClick={store.onClose}></a>
            <img src={GnomeAvatar} alt="gnome avatar"/>
            <h1>Edit {store.modalItemName}</h1>
            <Form />
        </div>
    </div>
    );
}

export default Modal