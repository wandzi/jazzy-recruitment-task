import React from 'react';
import { useLocalStore } from 'mobx-react';
import StoreContext from './storeContext';

const StoreProvider = ({ children }) => {
    const store = useLocalStore(() => ({
      gnomes: [],

      limit: 15,
      offset: 15,

      isOpen: false,
      modalItemName: '',
      modalItemAge: '',
      modalItemId: null,
      modalItemStrength: '',

    }));
    return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
  };

export default StoreProvider;