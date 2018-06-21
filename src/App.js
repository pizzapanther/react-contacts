import React, { Component } from 'react';
import './App.css';

import ContactForm from './ContactForm';
import ContactList from './ContactList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {fname: 'Paul', lname: 'Bailey'},
        {fname: 'Paulette', lname: 'Baird'},
      ]
    };
  }
  
  add_contact(event, contact) {
    var contacts = [...this.state.contacts];
    contacts.push(contact);
    this.setState({contacts: contacts});
  }
  
  render() {
    return (
      <div className="App">
        <ContactForm addContact={this.add_contact}/>
        <ContactList contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
