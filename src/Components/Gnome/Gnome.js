import React from 'react';
import GnomeAvatar from '../../../src/assets/gnome.png';
import './Gnome.scss';

const Gnome = () => {
    return(
        <div className="gnome-container">
            <div className="gnome-info">
            <img src={GnomeAvatar} alt="gnome avatar"></img> 
            <div className="gnome-details">   
                <div className="gnome-name">
                    <p>Uruk Hai</p>
                </div>
                <div className="gnome-age">
                    <p>Age: 13</p>
                </div>
            </div> 
            </div> 

            <div className="gnome-strength">
                <div className="strength-bar">
                    <div className="strength"></div>
                </div>
                <div className="strength-counter">13/100</div>
                <div className="strength-title">Strength</div>
            </div>
        </div>
    );
}

export default Gnome