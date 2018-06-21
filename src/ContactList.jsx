import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    return <ul>
      {this.props.contacts.map((c, i) => {
        return <li key={i}>{c.fname} {c.lname}</li>;
      })}
    </ul>;
  }
}

export default ContactList;
