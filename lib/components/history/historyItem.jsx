import React from 'react';

class HistoryItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentDidMount() {
    console.log('mounting history item');
  }

  render() {
    return (
      <div>History Item</div>
    );
  }
}
export default HistoryItem;
