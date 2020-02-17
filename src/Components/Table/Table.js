import React, { Component } from 'react';
import './Table.scss';
import axios from 'axios';
import Gnome from '../Gnome/Gnome';

class Table extends Component {
    constructor() {
        super();
        this.state = {
            gnomesList: []
        }
    }
    componentDidMount() {
        axios.get(`http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes?_format=json&limit=10&offset=0`)
        .then((res) => {
            const gnomesList = res.data;
            this.setState({ gnomesList });
        })
        .catch((error) => {
            console.log(error);
        })
    }
    render() {
        const gnomesList = this.state.gnomesList;
        console.log(gnomesList);

        return(
            <div className="container">
                <div className="table-container">
                    <h1>Gnomes</h1>
                    {
                        gnomesList.map( item => {
                            return <Gnome key={item.id} gnome={item} />
                        }) 
                    }
                </div>
            </div>
        )
    }
}

export default Table