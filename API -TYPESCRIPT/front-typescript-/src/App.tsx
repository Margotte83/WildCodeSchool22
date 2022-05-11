import './App.css';
import React, { ReactElement } from 'react';
import Wilder from './pages/Wilder';
import Header from './components/Header/Header';

function App(): ReactElement {
  return (
    <div className="App">
      <Header />
      <Wilder />
    </div>
  );
}

export default App;
