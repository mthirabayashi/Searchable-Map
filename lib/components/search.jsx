import React from 'react';
import $ from 'jquery';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.createMarker = this.createMarker.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.displayMarkers = this.displayMarkers.bind(this);
    this.notFound = this.notFound.bind(this);
    this.temp = this.temp.bind(this);
    this.state = {
      places: [],
      errors: false
    };
  }
  componentDidMount() {
    console.log('mounting search');
    const defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(37.763972, -122.441297),
      new google.maps.LatLng(37.783972, -122.421297));
    const options = {
      bounds: defaultBounds
    };
    const input = document.getElementById('google-search');
    window.searchBox = new google.maps.places.SearchBox(input);
    // const autocomplete = new google.maps.places.Autocomplete(input, options);
    // google.maps.event.addListener(autocomplete, "place_changed", console.log('autocomplete changed')
    // );

    // ******************************
    // start of google demo code
    // manually finds places upon changing search params and adds/remove markers for each location on the map

    let markers = [];
    window.searchBox.addListener('places_changed', function() {
      const places = window.searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      let bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        markers.push(new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        }));

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      window.map.fitBounds(bounds);
    });
    // end of google api demo code
    // ************************
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
    // this.setState({places: places}, this.displayMarkers());
  }

  temp() {
    // $.getJSON('https://maps.googleapis.com/maps/api/place/textsearch/xml?query=restaurants+in+Sydney&key=AIzaSyBg_-3mtwqCmsKeGOWdGkgyOHNyfgNH774'), function (data) {
    //   console.log(data);
    // };
    $.getJSON('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=AIzaSyBg_-3mtwqCmsKeGOWdGkgyOHNyfgNH774'), function(data) {
      console.log(data);
    };
  }

  displayMarkers() {
    //loop all the addresses and call a marker for each one
    const addressesArray = this.state.places;
    const that = this;
    for (let x = 0; x < addressesArray.length; x++) {
      $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address='+addressesArray[x]+'&sensor=false', null, function (data) {
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
