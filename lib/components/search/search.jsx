import React from 'react';
import $ from 'jquery';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.createSearch = this.createSearch.bind(this);
    this.showResults = this.showResults.bind(this);
    // markers will be moved to redux app store
    this.markers = [];
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
    // create the google search box
    const input = document.getElementById('google-search');
    window.searchBox = new google.maps.places.SearchBox(input);
    // window.searchBox.addListener('places_changed', () => {
        //displaySearchResults(map, searchBox, markers);
    // });
  }

  createSearch(e) {
    const query = document.getElementById('google-search').value;
    if (query === '') {
      return;
    }
    const center = window.map.center;
    // const center = new google.maps.LatLng(37.763972, -122.441297);
    const request = {
      location: center,
      radius: '500',
      query: query
    };

    const service = new google.maps.places.PlacesService(window.map);
    service.textSearch(request, (places) => this.showResults(places));
  }

  showResults(places) {
    if (places.length === 0) {
      return;
    }

    this.clearMarkers();

    // For each place, get the icon, name and location.
    places.forEach((place, idx) => {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      //     // url: "https://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png" -- default red marker
      // url: place.icon
      // use custom marker icon image
      var icon = {
        url: "./resources/red_pin.png",
        size: new google.maps.Size(75, 90),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      const marker = new google.maps.Marker({
        map: window.map,
        icon: icon,
        title: place.name,
        position: place.geometry.location,
        id: idx
      });

      this.props.addMarker(marker);

      marker.addListener('click', () => {
        // center map at marker
        window.map.setCenter(marker.getPosition());
     });

    //  center map if there is only one search result
     if (places.length === 1) {
       window.map.setCenter(marker.getPosition());
       window.map.setZoom(18);
     }
    });
    this.props.addSearch(places);
  }

  clearMarkers() {
    // remove all markers from map
    this.props.markers.forEach((marker) => {
      marker.setMap(null);
    });
  }

  render() {
    if (this.state.errors) {
      return (
        <div id='search-container'>
          <h1>Places</h1>
          <input id='google-search' type='text' placeholder='Enter City'></input>
          <button id='search-button' onClick={this.createSearch}>Search</button>
          <p>Location not found!</p>
        </div>
      );
    } else {
      return (
        <div id='search-container'>
          <h1>Places</h1>
          <input id='google-search' type='text' placeholder='Enter City'></input>
          <button id='search-button' onClick={this.createSearch.bind(this)}>Search</button>
          <p id='errors'></p>
        </div>
      );
    }
  }
}
export default Search;
