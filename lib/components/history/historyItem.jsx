import React from 'react';

class HistoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMarker = this.toggleMarker.bind(this);
    this.delete = this.delete.bind(this);
    console.log(props);
  }
  componentDidMount() {
    console.log('mounting history item');
  }

  toggleMarker() {
    const lat = this.props.history[this.props.idx].geometry.location.lat();
    const lng = this.props.history[this.props.idx].geometry.location.lng();
    const location = {lat: lat, lng: lng};
    if (this.props.markers[this.props.idx].map) {
      this.props.markers[this.props.idx].setMap(null);
    }
    else {
      this.props.markers[this.props.idx].setMap(window.map);
    }
    window.map.setCenter(location);
    // console.log('show marker event');
  }

  delete(e) {
    e.stopPropagation();
    this.props.markers[this.props.idx].setMap(null);
    this.props.deletePlace(this.props.idx);
    this.props.deleteMarker(this.props.idx);
  }

  render() {
    return (
      <div onClick={this.toggleMarker}>
        <section className='item-info'>
          <h3>{this.props.place.name}</h3>
          <p>{this.props.place.formatted_address}</p>
        </section>
        <button onClick={this.delete} className='delete'>X</button>
      </div>
    );
  }
}
export default HistoryItem;
