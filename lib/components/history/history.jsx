import React from 'react';
import $ from 'jquery';
import HistoryItemContainer from './historyItemContainer';

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
