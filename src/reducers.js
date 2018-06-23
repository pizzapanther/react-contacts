var initialState = {
  contacts: [
    {fname: 'Paul', lname: 'Bailey'},
    {fname: 'Paulette', lname: 'Baird'},
  ]
};

export function contacts (state, action) {
  if (state === undefined) {
    return initialState;
  }
  
  var new_state;
  
  switch (action.type) {
    case 'ADD_CONTACT':
      // make a copy of state
      new_state = {...state};
      new_state.contacts = [...state.contacts];
      
      // update the new state
      new_state.contacts.push(action.data);
      
      return new_state;
      
    default:
      return state;
  }
}

export default contacts;