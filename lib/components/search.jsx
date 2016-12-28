import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div>
        <h1>Places</h1>
        <input type='text' placeholder='Enter City'></input>
        <button>Search</button>
      </div>
    );
  }
}
export default Search;
