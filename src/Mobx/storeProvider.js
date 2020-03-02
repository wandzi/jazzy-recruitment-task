import React from 'react';
import { useLocalStore } from 'mobx-react';
import StoreContext from './storeContext';
import { toJS } from 'mobx';

const StoreProvider = ({ children }) => {
    const store = useLocalStore(() => ({
        gnomesList: [], 

        limit: 15,
        offset: 15,

        isOpen: false,
        modalItemName: '',
        modalItemAge: '',
        modalItemId: null,
        modalItemStrength: '',
        
        addGnomes: async (res) => {
          await store.gnomesList.push(res);
          console.log(toJS(store.gnomesList));
        }
     }));
     
    return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
  };

export default StoreProvider;