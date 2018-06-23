import React, { Component } from 'react';
import debounce from 'debounce';

import {addContact} from './actions.js';
import { connect } from 'react-redux';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {fname: '', lname: ''};
  }
  
  send_contact() {
    var contact = {...this.state};
    this.props.onSubmit(contact);
  }
  
  update(key, event) {
    this.setState({[key]: event.target.value});
  }
  
  render() {
    var send_contact = debounce(() => {
      this.send_contact();
    }, 1000, false);
    
    return <form onSubmit={(e) => {e.preventDefault(); send_contact()}}>
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

function mapStateToProps (state) {
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProps (dispatch) {
  return {
    onSubmit: function (data) {
      dispatch(addContact(data));
    }
  };
}

var ConnectedForm = connect(
  mapStateToProps, mapDispatchToProps
)(ContactForm);

export default ConnectedForm;
