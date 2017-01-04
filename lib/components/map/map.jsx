import React from 'react';
import $ from 'jquery';

console.log('got to map component');
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.showAllMarkers = this.showAllMarkers.bind(this);
    this.clearAllMarkers = this.clearAllMarkers.bind(this);
    this.getCurrentLocation();
    this.state = {};
  }

  componentDidMount() {
    const center = {lat: 37.773972, lng: -122.431297};
    window.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: center,
      mapTypeId: 'roadmap'
    });
    window.map.addListener('dblclick', () => {
      let zoom = window.map.getZoom() + 1;
      window.map.setZoom(zoom);
    });
    window.map.addListener('bounds_changed', () => {
      window.searchBox.setBounds(window.map.getBounds());
    });
  }

  getCurrentLocation() {
    // html5 code to get current location from browser
    navigator.geolocation.getCurrentPosition((data) => {
      this.setCurrentLocation(data);
    });
  }

  setCurrentLocation(loc) {
    // console.log(loc);
    const lat = loc.coords.latitude;
    const lng = loc.coords.longitude;
    const center = {lat: lat, lng: lng};
    window.map.setCenter(center);
  }

  showAllMarkers(e) {
    e.preventDefault();
    // Clear out the old markers.
    this.props.markers.forEach((marker) => {
      marker.setMap(window.map);
    });
    $(".history-item").addClass( "highlight" );

    // zoom out on map until all markers are visible
    let notVisible = true;
    let zoom = window.map.getZoom();
    const markers = this.props.markers;
    const inBounds = (marker) => {
      return window.map.getBounds().contains(marker.getPosition());
    };
    while (notVisible) {
      notVisible = false;
      markers.forEach( marker => {
        if (!inBounds(marker)) {
          zoom -= 1;
          notVisible = true;
          window.map.setZoom(zoom);
        }
      });
    }
  }

  clearAllMarkers(e) {
    e.preventDefault();
    this.props.markers.forEach((marker, idx) => {
      marker.setMap(null);
    });
    $(".history-item").removeClass( "highlight" );
  }

  render() {
    return (
      <div id='map-container'>
        <div id='map'>This is the map component</div>
        <div id='map-controls'>
          <button className='control-button' onClick={this.showAllMarkers}>Show All Recent Places</button>
          <button className='control-button' onClick={this.clearAllMarkers}>Clear All Markers</button>
        </div>
      </div>
    );
  }

}
export default Map;
