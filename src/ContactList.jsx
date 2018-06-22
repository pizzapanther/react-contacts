import React, { Component } from 'react';

class ContactList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    var bolds = [];
    props.contacts.forEach((c, i) => {
      bolds.push({fontWeight: 'normal'});
    });
    
    this.state = {bolds: bolds};
  }
  
  toggle(event, index) {
    var bolds = [...this.state.bolds];
    
    if (bolds[index].fontWeight === 'normal') {
      bolds[index] = {fontWeight: 'bold'};
    } else {
      bolds[index] = {fontWeight: 'normal'};
    }
    
    this.setState({bolds: bolds});
  }
  
  bg(index) {
    if (index % 2 === 0) {
      return 'even';
    }
    
    return 'odd';
  }
  
  render() {
    return <ul>
      {this.props.contacts.map((c, i) => {
        return <li 
          onClick={(e) => this.toggle(e, i)}
          className={this.bg(i)} 
          style={this.state.bolds[i]} 
          key={i}>{c.fname} {c.lname}</li>;
      })}
    </ul>;
  }
}

export default ContactList;
