import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);
    console.log('creating map');
    this.state = {};
    // html5 code to get current location from browser
    // navigator.geolocation.getCurrentPosition((data) => {console.log(data)})
  }
  componentDidMount() {
    console.log('map mounted');
    const uluru = {lat: 37.773972, lng: -122.431297};
    window.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: uluru
    });
    window.map.addListener('dblclick', () => {
      let zoom = window.map.getZoom() + 1;
      window.map.setZoom(zoom);
    });

    // const marker = new google.maps.Marker({
    //   position: uluru,
    //   map: window.map
    // });
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
