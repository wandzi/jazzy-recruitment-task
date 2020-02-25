import React from 'react';
import './App.scss';
import Nav from './Components/Nav/Nav';
import Table from './Components/Table/Table';
import StoreProvider from './Mobx/storeProvider';

function App() {
  return (
    <div>
      <StoreProvider>
        <Nav />
        <Table />
      </StoreProvider>
    </div>
  );
}

export default App;
