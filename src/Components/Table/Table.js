import React, { Component } from 'react';
import './Table.scss';
import Gnome from '../Gnome/Gnome';

class Table extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return(
            <div className="container">
                <div className="table-container">
                    <h1>Gnomes</h1>
                    <Gnome />
                    <Gnome />
                    <Gnome />
                </div>
            </div>
        )
    }
}

export default Table