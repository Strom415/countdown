import React from 'react';
import axios from 'axios';
import Board from './Board';
import Entry from './Entry';
import List from './List';
import Timer from './Timer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: [],
      anagrams: [],
      definition: '',
      pos: '',
      timer: 30,
      round: 'pre',
      entry: '',
      entries: [],
    };
    this.addVowel = this.addVowel.bind(this);
    this.addConsonant = this.addConsonant.bind(this);
    this.reset = this.reset.bind(this);
    this.getAnagrams = this.getAnagrams.bind(this);
    this.getDefinition = this.getDefinition.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.addEntry = this.addEntry.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  addEntry(e) {
    if (this.state.round === 'active') {
      this.setState({
        entries: [this.state.entry].concat(this.state.entries),
        entry: '',
      });
    }
    e.preventDefault();
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      entry: e.target.value,
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

  addConsonant() {
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
      round: 'pre',
      anagrams: [],
      definition: '',
      entries: [],
      letters: [],
      timer: 30,
    });
  }

  startTimer() {
    if (this.state.round !== 'active') {
      this.setState({
        round: 'active',
      });

      const timer = setInterval(() => {
        if (this.state.round !== 'active') {
          clearInterval(timer);
          return;
        }

        if (this.state.timer === 0) {
          clearInterval(timer);
          this.setState({
            round: 'post',
          });
          return;
        }
        this.setState({
          timer: this.state.timer - 1,
        });
      }, 1000);
    }
  }

  render() {
    return (
      <div>
        <Timer timer={this.state.timer} startTimer={this.startTimer} />
        <Board
          addVowel={this.addVowel}
          addConsonant={this.addConsonant}
          reset={this.reset}
          letters={this.state.letters}
        />
        <div>definition: {this.state.pos} - {this.state.definition}</div>
        <div id="container">
          <Entry
            entry={this.state.entry}
            entries={this.state.entries}
            addEntry={this.addEntry}
            handleChange={this.handleChange}
          />
          <List
            anagrams={this.state.anagrams}
            getDefinition={this.getDefinition}
            getAnagrams={this.getAnagrams}
          />
        </div>
      </div>
    );
  }
}

export default App;
