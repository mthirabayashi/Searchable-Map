import React from 'react';
import SearchContainer from './search/searchContainer';
import MapContainer from './map/mapContainer';
import HistoryContainer from './history/historyContainer';

const App = ({ route }) => {
  return (
    <div id='app'>
      <SearchContainer />
      <MapContainer />
      <HistoryContainer />
    </div>
  );
};

export default App;
