import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };
  onFormSubmit = e => {
    e.preventDefault();

    // todo make sure we call callback from parent comp
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form action='' className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field' />
          <label htmlFor=''>Video Search</label>
          <input
            type='text'
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
