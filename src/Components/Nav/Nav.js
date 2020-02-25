import React from 'react';
import './Nav.scss';
import logo from '../../assets/logo.png';
import thumbnail from '../../assets/avatar.png';

import { toJS } from 'mobx';
import StoreContext from '../../Mobx/storeContext';

const Nav = () => {

    const store = React.useContext(StoreContext);
    console.log(toJS(store));

    return(
        <nav className='nav'>

            <div className="logo-container">
                <a href="#">
                    <img src={logo} alt="jazzy-logo" />
                </a>
            </div>

            <div className="tabs">
                <a href="#">Gnoms</a>
                <a href="#">Trolls</a>
            </div>

            <button className="create-monster-btn">Create monster</button>

            <div className="user">
                <div className="user-thumbnail">
                    <img src={thumbnail} alt="user-avatar" />
                </div>
                <div className="user-info">
                    <div className="user-name">
                        <p>Robert Łabuś</p>
                    </div>
                    <div className="user-role">
                        <p>Game Master</p>
                    </div>
                </div>
            </div>

        </nav>
    );
}

export default Nav