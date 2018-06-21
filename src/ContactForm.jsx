import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {fname: '', lname: ''};
  }
  
  send_contact(event) {
    var contact = {...this.state};
    this.props.addContact(event, contact);
    event.preventDefault();
  }
  
  update(key, event) {
    this.setState({[key]: event.target.value});
  }
  
  render() {
    return <form onSubmit={(e) => this.send_contact(e)}>
      First Name: <input type="text" value={this.state.fname}
  onChange={event => this.update('fname', event)}/>
      <br/>
      Last Name: <input type="text" value={this.state.lname}
  onChange={event => this.update('lname', event)}/>
      <br/>
      <button type="submit">Add</button>
    </form>;
  }
}

export default ContactForm;
