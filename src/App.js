import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store.js';

import './App.css';

import ContactForm from './ContactForm';
import ContactList from './ContactList';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ContactForm/>
          <hr/>
          <ContactList hello="Narf"/>
        </div>
      </Provider>
    );
  }
}

export default App;
