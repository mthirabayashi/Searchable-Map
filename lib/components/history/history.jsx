import React from 'react';
import $ from 'jquery';
import HistoryItem from './historyItem';

class History extends React.Component {
  constructor(props) {
    super(props);
    // console.log('creating history');
  }
  componentDidMount() {
    // console.log('mounting history');
  }

  render() {
    console.log(this.props);
    return (
      <div id='search-history'>
        <h2>Recent History</h2>
        {this.props.history.map((place,idx) => (
          <div key={idx} className='history-item'>
            <HistoryItem place={place}/>
          </div>
        ))}
      </div>
    );
  }
}
export default History;
