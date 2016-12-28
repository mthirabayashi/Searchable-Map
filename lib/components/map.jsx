import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);
    console.log('creating map');
    this.state = {};
  }
  componentDidMount() {
    console.log('map mounted');
    const uluru = {lat: -25.363, lng: 131.044};
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
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
}
export default Map;
