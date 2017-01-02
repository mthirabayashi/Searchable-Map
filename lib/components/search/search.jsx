import React from 'react';
import $ from 'jquery';

// console.log('got to search.jsx');

class Search extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    // console.log('creating search');
    // this.createMarker = this.createMarker.bind(this);
    this.createSearch = this.createSearch.bind(this);
    this.showResults = this.showResults.bind(this);
    // this.displayMarkers = this.displayMarkers.bind(this);
    // this.notFound = this.notFound.bind(this);
    // markers will be moved to redux app store
    this.markers = [];
    this.state = {
      places: [],
      errors: false
    };
  }
  componentDidMount() {
    // console.log('mounting search');
    const defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(37.763972, -122.441297),
      new google.maps.LatLng(37.783972, -122.421297));
    const options = {
      bounds: defaultBounds
    };
    // create the google search box
    const input = document.getElementById('google-search');
    window.searchBox = new google.maps.places.SearchBox(input);
    window.searchBox.addListener('places_changed', () => {
        //displaySearchResults(map, searchBox, markers);
    });
    window.geocoder = new google.maps.Geocoder();

  }

  // createSearch(e) {
  //
  //   const input = document.getElementById('google-search');
  //   input.value = 'pizza';
  //   input.focus();
  //
  //   const places = window.searchBox.getPlaces();
  //   console.log(places);
  //
  //   if (places.length === 0) {
  //     return;
  //   }
  //
  //   // Clear out the old markers.
  //   this.props.markers.forEach((marker) => {
  //     console.log('clearing marker from map');
  //     console.log(marker);
  //     marker.setMap(null);
  //   });
  //
  //   // For each place, get the icon, name and location.
  //   // let bounds = new google.maps.LatLngBounds();
  //   places.forEach((place) => {
  //     if (!place.geometry) {
  //       console.log("Returned place contains no geometry");
  //       return;
  //     }
  //     //     console.log(place.icon);
  //     //     // url: "https://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png" -- default red marker
  //     // url: place.icon
  //     var icon = {
  //       url: "./resources/red_pin.png",
  //       size: new google.maps.Size(75, 90),
  //       origin: new google.maps.Point(0, 0),
  //       anchor: new google.maps.Point(17, 34),
  //       scaledSize: new google.maps.Size(25, 25)
  //     };
  //
  //     // Create a marker for each place.
  //     const marker = new google.maps.Marker({
  //       map: window.map,
  //       icon: icon,
  //       title: place.name,
  //       position: place.geometry.location
  //     });
  //
  //     this.props.addMarker(marker);
  //     window.map.setZoom(18);
  //     window.map.setCenter(marker.getPosition());
  //
  //     // console.log(this.markers);
  //
  //   });
  //   this.props.addSearch(places);
  // }

  createSearch(e) {
    const query = document.getElementById('google-search').value;
    const pyrmont = window.map.center;
    // const pyrmont = new google.maps.LatLng(37.763972, -122.441297);
    const request = {
      location: pyrmont,
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

    // Clear out the old markers.
    this.props.markers.forEach((marker) => {
      console.log('clearing marker from map');
      console.log(marker);
      marker.setMap(null);
    });

    // For each place, get the icon, name and location.
    // let bounds = new google.maps.LatLngBounds();
    places.forEach((place) => {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      //     console.log(place.icon);
      //     // url: "https://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png" -- default red marker
      // url: place.icon
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
        position: place.geometry.location
      });

      this.props.addMarker(marker);
      window.map.setZoom(18);
      window.map.setCenter(marker.getPosition());

      // console.log(this.markers);

    });
    this.props.addSearch(places);
  }

  // createMarker(e) {
  //   console.log('search clicked');
  //   // console.log(e);
  //   e.preventDefault();
  //   const place = document.getElementById('google-search').value;
  //   console.log(place);
  //   let places = this.state.places;
  //   if (!places.includes(place)) {
  //     places.push(place);
  //   }
  //   console.log(places);
  //   this.setState({places: places}, this.displayMarkers());
  //   // this.setState({places: places}, this.displayMarkers());
  // }
  //
  // displayMarkers() {
  //   //loop all the addresses and call a marker for each one
  //   const addressesArray = this.state.places;
  //   const that = this;
  //   for (let x = 0; x < addressesArray.length; x++) {
  //     $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address='+addressesArray[x]+'&sensor=false', null, function (data) {
  //       console.log(data);
  //       if (data.status === 'ZERO_RESULTS') {
  //         // alert('could not find on map');
  //         return that.notFound();
  //       }
  //       const p = data.results[0].geometry.location;
  //       const latlng = new google.maps.LatLng(p.lat, p.lng);
  //       const aMarker= new google.maps.Marker({
  //           position: latlng, //it will place marker based on the addresses, which they will be translated as geolocations.
  //           map: window.map
  //       });
  //       aMarker.addListener('click', function() {
  //         // window.map.setZoom(12);
  //         window.map.setCenter(aMarker.getPosition());
  //       });
  //       console.log(x);
  //       console.log(addressesArray.length-1);
  //       if (x === addressesArray.length-1) {
  //         window.map.setZoom(12);
  //         window.map.setCenter(aMarker.getPosition());
  //       }
  //     });
  //   }
  // }
  //
  // notFound() {
  //   this.setState({errors: true});
  // }

  render() {
    // console.log(this.state);
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
