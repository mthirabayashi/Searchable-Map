import React from 'react';
import SearchContainer from './search/searchContainer';
import MapContainer from './map/mapContainer';
import HistoryContainer from './history/historyContainer';

const App = ({ route }) => {
  console.log('loading app');
  return (
    <div id='app'>
      <SearchContainer />
      <MapContainer />
      <HistoryContainer />
    </div>
  );
};

export default App;


// class App extends React.Component {
//   render() {
//     return (
//       <div id='app'>
//         <searchContainer />
//         <mapContainer />
//         <History />
//       </div>
//     );
//   }
// }
//
// export default App;
