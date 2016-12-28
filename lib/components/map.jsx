import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);
    console.log('creating map');
    this.state = {};
  }
  componentDidMount() {
    console.log('map mounted');
    const uluru = {lat: 37.773972, lng: -122.431297};
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
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
