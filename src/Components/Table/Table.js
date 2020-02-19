import React, { Component } from 'react';
import './Table.scss';
import axios from 'axios';
import Gnome from '../Gnome/Gnome';
import Modal from '../Modal/Modal';
import Pagination from '../Pagination/Pagination';

class Table extends Component {
    constructor() {
        super();
        this.state = {
            gnomesList: [],

            isOpen: false,
            modalItemName: '',
            modalItemAge: '',
            modalItemId: null,
            modalItemStrength: '',

            currentPage: 1,
            gnomesPerPage: 8,

        }
        this.toggleModal = this.toggleModal.bind(this);
    }
    componentDidMount() {
        axios.get(`http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes?_format=json&limit=130&offset=0`)
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
            modalItemId: gnome.id,
            modalItemName: gnome.name,
            modalItemAge: gnome.age,
            modalItemStrength: gnome.strenght,
        });
    }

    render() {
        const { gnomesList } = this.state;
 
        //Get current posts

        const indexOfLastGnome = this.state.currentPage * this.state.gnomesPerPage;
        const indexOfFirstGnome = indexOfLastGnome - this.state.gnomesPerPage;
        const currentGnomes = gnomesList.slice(indexOfFirstGnome, indexOfLastGnome);

        // Change page

        const paginate = pageNumber => {
            this.setState({currentPage: pageNumber});
        }
        
        return(
            <div className="container">
                <div className="table-container">
                    <h1>Gnomes</h1>
                    {
                        currentGnomes.map( gnome => {
                            return <Gnome key={gnome.id} gnome={gnome} clickEvent={() => this.toggleModal(gnome)}/>
                        }) 
                    }
                    <Pagination 
                        currentPage={this.state.currentPage}
                        gnomesPerPage={this.state.gnomesPerPage} 
                        totalGnomes={gnomesList.length}
                        paginate={paginate}
                    />
                </div>
                <Modal 
                    show={this.state.isOpen} 
                    onClose={this.toggleModal} 
                    gnomeId={this.state.modalItemId} 
                    gnomeName={this.state.modalItemName}
                    gnomeAge={this.state.modalItemAge}
                    gnomeStrength={this.state.modalItemStrength}

                />
            </div>
        )
    }
}

export default Table