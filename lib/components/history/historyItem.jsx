import React from 'react';
import $ from 'jquery';
class HistoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMarker = this.toggleMarker.bind(this);
    this.delete = this.delete.bind(this);
    this.displayInfo = this.displayInfo.bind(this);
    // console.log(props);
    this.state = {
      infoWindow: false
    };
  }
  componentDidMount() {
    // console.log('mounting history item');
    // console.log(this.props);
    $($('.history-item')[this.props.idx]).addClass('highlight');
  }

  toggleMarker() {
    const lat = this.props.history[this.props.idx].geometry.location.lat();
    const lng = this.props.history[this.props.idx].geometry.location.lng();
    const location = {lat: lat, lng: lng};
    if (this.props.markers[this.props.idx].map) {
      this.props.markers[this.props.idx].setMap(null);
      $($(".history-item")[this.props.idx]).removeClass( "highlight" );
    }
    else {
      this.props.markers[this.props.idx].setMap(window.map);
      $($(".history-item")[this.props.idx]).addClass( "highlight" );
    }
    window.map.setCenter(location);
    // console.log('show marker event');
  }

  delete(e) {
    e.stopPropagation();
    this.props.markers[this.props.idx].setMap(null);
    // $($(".history-item")[this.props.idx]).removeClass( "highlight" );
    this.props.deletePlace(this.props.idx);
    this.props.deleteMarker(this.props.idx);
  }

  displayInfo(e) {
    // e.preventDefault();
    e.stopPropagation();
    if (this.state.infoWindow) {
      return;
    }
    const place = this.props.history[this.props.idx];
    const open = place.opening_hours.open_now ? 'Currently Open' : 'Currently Closed';
    const contentString = '<div>'+`<h4>${place.name}</h4>`+`<p>${place.formatted_address}</p>`+`<p>Rating: ${place.rating}`+`<p>${open}</p>`+'</div>';

    const infoWindow = new google.maps.InfoWindow({
        content: contentString
    });

    const marker = this.props.markers[this.props.idx];
    infoWindow.open(window.map, marker);
    infoWindow.addListener('closeclick', () => {
      console.log('closing info window');
      this.setState({infoWindow: false});
    });
    window.map.setCenter(marker.getPosition());
    window.map.setZoom(20);
    this.setState({infoWindow: true});

    // window.map.event.addListener(marker, 'click', () => {
    //     infoWindow.open(window.map, marker);
    // });
  }

  render() {
    if (this.props.markers[this.props.idx].map) {
      $($(".history-item")[this.props.idx]).addClass( "highlight" );
    }
    else {
      $($(".history-item")[this.props.idx]).removeClass( "highlight" );
    }
    return (
      <div onClick={this.toggleMarker}>
        <section className='item-info'>
          <h3>{this.props.place.name}</h3>
          <p>{this.props.place.formatted_address}</p>
          <a href="#map-container"><button onClick={this.displayInfo}>Info</button></a>
        </section>
        <button onClick={this.delete}  className='delete'>X</button>
      </div>
    );
  }
}
export default HistoryItem;
