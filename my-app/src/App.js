import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './App.css';
import { jokesReducer as reducer } from './reducers/jokesReducer';

import JokesForm from './components/JokesForm'; 

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello</h1>
        <JokesForm />
      </div>
    </Provider>
  );
}

export default App;
