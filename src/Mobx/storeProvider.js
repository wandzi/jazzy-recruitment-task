import React from 'react';
import { useLocalStore } from 'mobx-react';
import StoreContext from './storeContext';
import { toJS } from 'mobx';

const StoreProvider = ({ children }) => {
    const store = useLocalStore(() => ({
        gnomesList: [{"id":0,"name":"Gnome nr #0","strenght":23,"age":10},{"id":1,"name":"Gnome nr #1","strenght":15,"age":3},{"id":2,"name":"Gnome nr #2","strenght":22,"age":13},{"id":3,"name":"Gnome nr #3","strenght":97,"age":12},{"id":4,"name":"Gnome nr #4","strenght":2,"age":8}], 

        limit: 15,
        offset: 15,

        isOpen: false,
        modalItemName: '',
        modalItemAge: '',
        modalItemId: null,
        modalItemStrength: '',
        
        /* addGnomes: async (res) => {
          await store.gnomesList.push(res);
          console.log(toJS(store.gnomesList));
        } */
     }));
     
    return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
  };

export default StoreProvider;