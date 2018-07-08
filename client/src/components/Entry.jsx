import React from 'react';

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
    };
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" />
          <submit />
        </form>
      </div>
    );
  }
}

export default Entry;
