import React from 'react';

console.log('got to map component');
class Map extends React.Component {
  constructor(props) {
    super(props);
    console.log('creating map');
    this.loadMap();
    this.getCurrentLocation();
    this.state = {};
  }

  loadMap() {
    console.log('loading map');
  }

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

  render() {
    return (
      <div id='map'>This is the map component</div>
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
