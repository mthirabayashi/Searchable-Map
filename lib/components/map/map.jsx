import React from 'react';

console.log('got to map component');
class Map extends React.Component {
  constructor(props) {
    super(props);
    console.log('creating map');
    this.showAllMarkers = this.showAllMarkers.bind(this);
    this.clearAllMarkers = this.clearAllMarkers.bind(this);
    // this.loadMap();
    this.getCurrentLocation();
    this.state = {};
  }

  // componentWillReceiveProps(nextProps) {
  //   this.updateMarkers(nextProps.markers);
  // }

  componentDidMount() {
    console.log('map mounted');
    const uluru = {lat: 37.773972, lng: -122.431297};
    window.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: uluru,
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

  loadMap() {
    console.log('loading map');
  }

  getCurrentLocation() {
    // html5 code to get current location from browser
    navigator.geolocation.getCurrentPosition((data) => {
      this.setCurrentLocation(data);
    });
  }

  setCurrentLocation(loc) {
    console.log(loc);
    const lat = loc.coords.latitude;
    const lng = loc.coords.longitude;
    const uluru = {lat: lat, lng: lng};
    window.map.setCenter(uluru);
  }
  //
  // updateMarkers(markers) {
  //   markers.forEach((marker, idx) => {
  //     if (idx < markers.length-1) {
  //       marker.setMap(null);
  //       marker = null;
  //     }
  //   });
  // }

  showAllMarkers(e) {
    e.preventDefault();

    // Clear out the old markers.
    this.props.markers.forEach((marker) => {
      marker.setMap(window.map);
    });

    console.log('clicked show all places');
    // this.props.history.forEach(place => {
    //   const icon = {
    //     url: "./resources/red_pin.png",
    //     size: new google.maps.Size(75, 90),
    //     origin: new google.maps.Point(0, 0),
    //     anchor: new google.maps.Point(17, 34),
    //     scaledSize: new google.maps.Size(25, 25)
    //   };
    //
    //   // Create a marker for each place.
    //   this.markers.push(new google.maps.Marker({
    //     map: window.map,
    //     icon: icon,
    //     title: place.name,
    //     position: place.geometry.location
    //   }));
    // });
    window.map.setZoom(12);
  }

  clearAllMarkers(e) {
    e.preventDefault();
    // console.log('clicked clear all markers');
    // console.log(this.props);
    this.props.markers.forEach((marker, idx) => {
      marker.setMap(null);
    });
    // this.props.clearAllMarkers();
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <div id='map'>This is the map component</div>
        <div id='map-controls'>
          <button onClick={this.showAllMarkers}>Show All Recent Places</button>
          <button onClick={this.clearAllMarkers}>Clear All Markers</button>
        </div>
      </div>
    );
  }

  // render() {
  //   console.log(this.state.loaded);
  //
  //   if (!this.state.loaded) {
  //     console.log('loading map...');
  //     return <div id='map'>Loading...</div>;
  //   }
  //   return (
  //     <div id='map'>Map will go here</div>
  //   );
  // }
}
export default Map;
