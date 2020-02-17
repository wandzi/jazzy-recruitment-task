import React, { Component } from 'react';
import './Table.scss';
import axios from 'axios';
import Gnome from '../Gnome/Gnome';
import Modal from '../Modal/Modal';

class Table extends Component {
    constructor() {
        super();
        this.state = {
            gnomesList: [],
            isOpen: false,
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

    toggleModal = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render() {
        const { gnomesList } = this.state;

        return(
            <div className="container">
                <div className="table-container">
                    <h1>Gnomes</h1>
                    {
                        gnomesList.map( gnome => {
                            return <Gnome key={gnome.id} gnome={gnome} clickEvent={this.toggleModal.bind(this)}/>
                        }) 
                    }
                </div>
                <Modal show={this.state.isOpen} onClose={this.toggleModal}/>
            </div>
        )
    }
}

export default Table