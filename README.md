# Places Map

[Live Link](https://mthirabayashi.github.io/Searchable-Map/)

Places Map is a simple front end web application that utilizes the Google Maps and Places API. Users can search various addresses, places, or keywords and view the results on an interactive Google map.

## Features & Implementation


#### Search
![](https://res.cloudinary.com/duep1w4tv/image/upload/v1483508341/ShareAGram/fpf4sp93qci6ifh9pk31.png)

Features

- Users can search specific addresses
- Users can search names of places
- Users can search by keywords (ex: "burgers")

Implementation

The search field uses Google's places SearchBox API to autocomplete user input. The search button is tied to the search field value and upon clicking the search button, a textSearch API request is sent. The callback of the textSearch displays the places on the map and creates a results items at the bottom of the page.



#### Map
![](https://res.cloudinary.com/duep1w4tv/image/upload/v1483508356/ShareAGram/fioonjhp4k3tmtksjkfv.png)

Features

- Search results are displayed on the map by default
  - Each search result creates and displays its own marker on the map
  - Clicking a marker will center the map to the clicked location
- There is a 'Show All Recent Places' and a 'Clear All Markers' button that shows or hides all the markers on the map respectively
- Markers can individually be toggled on and off by clicking the associated search result item at the bottom of the screen
- HTML5 geolocation is used to find the users current location

Implementation

The map is implemented using Google's map API. Once the map component is mounted, HTML5 geolocation is used to find the users current position. Current location is used to prioritize search results. Places and their corresponding markers are stored in a Redux application store. The 'Show All Recent Places' button expands the map view until all the search results are displayed within the bounds of the map.

#### Search Results
![](https://res.cloudinary.com/duep1w4tv/image/upload/v1483512184/ShareAGram/qtxhxnzonfgyl44szvqt.png)

Features

- Search results are displayed based off recent searches
- All previous search results can be deleted with on click of the 'Clear All Results' button
- Search results can be individually toggled to display its corresponding marker on the map
	- 'Orange' highlighting means that the corresponding map marker is visible on the map
- Search result items can be individually removed to simply the search results
- The 'Info' button displays detailed information about the selected result on the map

Implementation

Search results are populated based on the search criteria. The 'Info' button displays detailed information about the selected result on the map using Google Map's InfoWindow.

## Technologies
- HTML5: Geolocation services to get users current location
- jQuery: Primarily used for toggling styling classes
- CSS: Used for styling various components on the page
- ReactJS: Renders various components on the page and handles updates to those components based on user interaction
- Redux: Holds an application wide store used by various React components that manipulates the the objects displayed on the map.
- Webpack: bundled various scripts
