import React from 'react';
import $ from 'jquery';
import HistoryItemContainer from './historyItemContainer';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.clearResults = this.clearResults.bind(this);
  }

  clearResults() {
    this.props.clearHistory();
    // clear markers off map
    this.props.markers.forEach((marker) => {
      marker.setMap(null);
    });
    this.props.clearMarkers();
  }

  render() {
    return (
      <div id='search-history'>
        <h2>Recent Results</h2>
        <button className='control-button' onClick={this.clearResults}>Clear All Results</button>
        <section id='history-container'>
          {this.props.history.map((place,idx) => (
            <div key={idx} className='history-item'>
              <HistoryItemContainer place={place} idx={idx}/>
            </div>
          ))}
        </section>
      </div>
    );
  }
}
export default History;
