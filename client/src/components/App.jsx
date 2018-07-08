import React from 'react';
import axios from 'axios';
import Board from './Board';
import Entry from './Entry';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: [],
      anagrams: [],
      definition: '',
      pos: '',
    };
    this.addVowel = this.addVowel.bind(this);
    this.addConsonent = this.addConsonent.bind(this);
    this.reset = this.reset.bind(this);
    this.getAnagrams = this.getAnagrams.bind(this);
    this.getDefinition = this.getDefinition.bind(this);
  }

  getAnagrams() {
    const query = this.state.letters.join('').toLowerCase();
    axios.get('/anagrams', { params: { data: query } }).then((res) => {
      this.setState({
        anagrams: res.data,
      });
      console.log('request was made', res.data);
    });
  }

  getDefinition(e) {
    const query = e.target.textContent;
    axios.get('/definition', { params: { data: query } }).then((res) => {
      console.log('request was made', res.data);
      console.log(this);
      this.setState({
        pos: res.data.category,
        definition: res.data.definition,
      });
    });
  }

  addVowel() {
    const vows = ['A', 'A', 'A', 'A', 'A', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'I', 'I', 'I', 'I', 'O', 'O', 'O', 'O', 'U', 'U'];
    const num = Math.floor(Math.random() * 23);
    if (this.state.letters.length < 9) {
      this.setState({
        letters: this.state.letters.concat(vows[num]),
      });
    }
  }

  addConsonent() {
    const cons = ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'J', 'K', 'K', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'V', 'V', 'V', 'V', 'V', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'X', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Z'];
    const num = Math.floor(Math.random() * 274);
    if (this.state.letters.length < 9) {
      this.setState({
        letters: this.state.letters.concat(cons[num]),
      });
    }
  }

  reset() {
    this.setState({
      letters: [],
      anagrams: [],
    });
  }

  render() {
    return (
      <div>
        <Board
          addVowel={this.addVowel}
          addConsonent={this.addConsonent}
          reset={this.reset}
          letters={this.state.letters}
        />
        <div>definition: {this.state.pos} - {this.state.definition}</div>
        <Entry />
        <List anagrams={this.state.anagrams} getDefinition={this.getDefinition} />
        <h1 onClick={this.getAnagrams}>Get Anagrams</h1>
      </div>
    );
  }
}

export default App;
