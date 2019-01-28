import React from 'react';

const Entry = props => (
  <div id="entries" className="column">
    <form id="search" onSubmit={props.addEntry}>
      <input
        id="input"
        type="text"
        autoComplete="off"
        value={props.entry} 
        onChange={props.handleChange}
      />
      <button type="submit">
        Add
      </button>
    </form>
    {props.entries.map(entry => <div className={entry.class}>{entry.word}</div>)}
  </div>
);

export default Entry;
