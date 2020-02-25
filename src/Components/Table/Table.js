import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './Table.scss';
import axios from 'axios';
import Gnome from '../Gnome/Gnome';
import Modal from '../Modal/Modal';

import { toJS } from 'mobx';
import StoreContext from '../../Mobx/storeContext';


const Table = () => {
    
    useEffect(() => {
        const { limit } = store;

        axios.get(`http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes?_format=json&limit=${limit}&offset=0`)
            .then(res => store.gnomesList = res.data);
      });

    const fetchImages = () => {
        const { limit, offset } = store;
        
        this.setState({ offset: limit + offset });
        axios.get(`http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes?_format=json&limit=${limit}&offset=${offset}`)
            .then(res =>
                store.gnomesList = store.gnomesList.concat(res.data)
            );

    }

    const toggleModal = (gnome) => {
        this.setState({
            isOpen: !this.state.isOpen,
            modalItemId: gnome.id,
            modalItemName: gnome.name,
            modalItemAge: gnome.age,
            modalItemStrength: gnome.strenght,
        });
    }

    const store = React.useContext(StoreContext);
    console.log(toJS(store));

    const { gnomesList } = store;

    return(
        <div className="container">
            <div className="table-container">
                <h1>Gnomes</h1>
                <InfiniteScroll
                    dataLength={this.state.gnomesList.length}
                    next={this.fetchImages}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
                {
                    gnomesList.map( gnome => {
                        return <Gnome key={gnome.id} gnome={gnome} clickEvent={() => this.toggleModal(gnome)}/>
                    }) 
                }
                </InfiniteScroll>
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

export default Table