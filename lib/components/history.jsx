import React from 'react';
import $ from 'jquery';

class History extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('mounting history');
  }

  render() {
    return (
      <div>
        <ul id='search-history'>Recent Searches
        </ul>
      </div>
    );
  }
}
export default History;
