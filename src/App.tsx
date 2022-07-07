import React from 'react';

import { Data } from './components/Data';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Data uri='data' />
      <Data uri='error' />
      <Data uri='loading' />
    </div>
  );
}

export default App;
