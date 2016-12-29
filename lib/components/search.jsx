import React from 'react';
import $ from 'jquery';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.createMarker = this.createMarker.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.displayMarkers = this.displayMarkers.bind(this);
    this.notFound = this.notFound.bind(this);
    this.state = {
      places: [],
      errors: false
    };
  }
  componentDidMount() {
    const defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(37.763972, -122.441297),
      new google.maps.LatLng(37.783972, -122.421297));
    const options = {
      bounds: defaultBounds
    };
    const input = document.getElementById('google-search')
    const autocomplete = new google.maps.places.Autocomplete(input, options);
    // google.maps.event.addListener(autocomplete, "place_changed", console.log('autocomplete changed')
    // );
  }

  updateSearch(e) {
    console.log('search field updated');
    // console.log(e.target.value);
    // this.setState({
    //   search: e.target.value
    // }, console.log(e.target.value));
  }

  createMarker(e) {
    console.log('search clicked');
    // console.log(e);
    e.preventDefault();
    const place = document.getElementById('google-search').value;
    console.log(place);
    let places = this.state.places;
    if (!places.includes(place)) {
      places.push(place);
    }
    console.log(places);
    this.setState({places: places}, this.displayMarkers());
  }

  displayMarkers() {
    //loop all the addresses and call a marker for each one
    const addressesArray = this.state.places;
    const that = this;
    for (let x = 0; x < addressesArray.length; x++) {
      $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addressesArray[x]+'&sensor=false', null, function (data) {
        console.log(data);
        if (data.status === 'ZERO_RESULTS') {
          // alert('could not find on map');
          return that.notFound();
        }
        const p = data.results[0].geometry.location;
        const latlng = new google.maps.LatLng(p.lat, p.lng);
        const aMarker= new google.maps.Marker({
            position: latlng, //it will place marker based on the addresses, which they will be translated as geolocations.
            map: window.map
        });
        aMarker.addListener('click', function() {
          // window.map.setZoom(12);
          window.map.setCenter(aMarker.getPosition());
        });
        console.log(x);
        console.log(addressesArray.length-1);
        if (x === addressesArray.length-1) {
          window.map.setZoom(12);
          window.map.setCenter(aMarker.getPosition());
        }
      });
    }
  }

  notFound() {
    this.setState({errors: true});
  }

  render() {
    // console.log(this.state);
    if (this.state.errors) {
      return (
        <div id='search-container'>
          <h1>Places</h1>
          <input id='google-search' type='text' placeholder='Enter City' onChange={this.updateSearch}></input>
          <button id='search-button' onClick={this.createMarker}>Search</button>
          <p>Location not found!</p>
        </div>
      );
    } else {
      return (
        <div id='search-container'>
          <h1>Places</h1>
          <input id='google-search' type='text' placeholder='Enter City' onChange={this.updateSearch}></input>
          <button id='search-button' onClick={this.createMarker}>Search</button>
          <p id='errors'></p>
        </div>
      );
    }
  }
}
export default Search;


// var defaultBounds = new google.maps.LatLngBounds(
//   new google.maps.LatLng(-33.8902, 151.1759),
//   new google.maps.LatLng(-33.8474, 151.2631));
//
// var input = document.getElementById('searchTextField');
// var options = {
//   bounds: defaultBounds,
//   types: ['establishment']
// };
//
// autocomplete = new google.maps.places.Autocomplete(input, options);
