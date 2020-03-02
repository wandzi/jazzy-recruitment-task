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
        fetchGnomes();
    });

    const fetchGnomes = async () => {
        const { limit, offset } = store;
        
        store.offset = limit + offset;
        console.log(toJS(store));

        axios.get(`http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes?_format=json&limit=${limit}&offset=${offset}`)
            .then(res =>{
                store.addGnomes(res.data);
            });
    }

    /*const toggleModal = (gnome) => {
        store.isOpen = !store.isOpen;
        store.modalItemId = gnome.id;
        store.modalItemName = gnome.name;
        store.modalItemAge = gnome.age;
        store.modalItemStrength = gnome.strenght;
    }*/

    const store = React.useContext(StoreContext);

    return(
        <div className="container">
            <div className="table-container">
                <h1>Gnomes</h1>
                <InfiniteScroll
                    dataLength={store.gnomesList.length}
                    next={fetchGnomes()}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
                {
                    store.gnomesList.map( gnome => {
                        return <Gnome key={gnome.id} gnome={gnome} clickEvent={() => this.toggleModal(gnome)}/>
                    }) 
                }
                </InfiniteScroll>
            </div>
            <Modal /*onClose={toggleModal()}*/ />
        </div>
    )
}

export default Table