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
            modalItemName: 'asd',
            modalItemId: null,
        }
        this.toggleModal = this.toggleModal.bind(this);
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

    toggleModal = (gnome) => {
        this.setState({
            isOpen: !this.state.isOpen,
            modalItemName: gnome.name,
            modalItemAge: gnome.age,
            modalItemStrength: gnome.strenght,
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
                            return <Gnome key={gnome.id} gnome={gnome} clickEvent={() => this.toggleModal(gnome)}/>
                        }) 
                    }
                </div>
                <Modal 
                    show={this.state.isOpen} 
                    onClose={this.toggleModal} 
                    gnomeName={this.state.modalItemName}
                    gnomeAge={this.state.modalItemAge}
                    gnomeStrength={this.state.modalItemStrength}

                />
            </div>
        )
    }
}

export default Table