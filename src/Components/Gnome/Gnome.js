import React from 'react';
import GnomeAvatar from '../../../src/assets/gnome.png';
import './Gnome.scss';

const Gnome = (props) => {

    let strength = props.gnome.strenght;

    if(strength.toString().length < 2) {
        strength = `0${strength}`;
    }

    return(
        <div className="gnome-container" onClick={props.clickEvent}>
            <div className="gnome-info">
            <img src={GnomeAvatar} alt="gnome avatar"/> 
            <div className="gnome-details">   
                <div className="gnome-name">
                    <p>{props.gnome.name}</p>
                </div>
                <div className="gnome-age">
                    <p>Age: {props.gnome.age}</p>
                </div>
            </div> 
            </div> 

            <div className="gnome-strength">
                <div className="strength-bar">
                    <div className="strength" style={{width: `${strength}%`}}></div>
                </div>
                <div className="strength-counter">{strength}/100</div>
                <div className="strength-title">Strength</div>
            </div>
        </div>
    );
}

export default Gnome