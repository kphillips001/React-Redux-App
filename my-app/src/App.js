import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './App.css';
import { virusReducer as reducer } from './reducers/virusReducer';

import VirusForm from './components/VirusForm'; 
import VirusList from './components/VirusList'; 

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Coronavirus Cases By Country</h1>
        <VirusForm />
        <VirusList />
      </div>
    </Provider>
  );
}

export default App;
