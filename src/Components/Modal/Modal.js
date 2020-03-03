import React from 'react';
import GnomeAvatar from '../../../src/assets/gnome.png';
import Form from '../Form/Form';
import './Modal.scss';

import StoreContext from '../../Mobx/storeContext';

const Modal = (props) => {

    const store = React.useContext(StoreContext);
    
    const onClose = (event) => {
        props.onClose && props.onClose(event);
    }

    if(!store.show) {
        return null;
    }
    return (
    <div className="modal-container">
        <div className="modal-body">
            <a href="#" className="close-btn" onClick={() => onClose()}></a>
            <img src={GnomeAvatar} alt="gnome avatar"/>
            <h1>Edit {store.modalItemName}</h1>
            <Form />
        </div>
    </div>
    );
}

export default Modal