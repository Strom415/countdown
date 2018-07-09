import React from 'react';

const Entry = props => (
  <div id="entries" className="column">
    <form id="search" onSubmit={props.addEntry}>
      <input type="text" 
        value={props.entry} 
        onChange={props.handleChange}
      />
      <button type="submit">Add</button>
    </form>
    {props.entries.map(entry => <div>{entry}</div>)}
  </div>
);

export default Entry;
