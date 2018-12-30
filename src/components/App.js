import React, { Component } from 'react';
import SearchBar from './SearchBar';

class App extends Component {
  state = { video: 'Test of state' };

  render() {
    return (
      <div className="ui container">
        {this.state.video}
        <SearchBar />
      </div>
    );
  }
}

export default App;
