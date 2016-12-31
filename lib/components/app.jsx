import React from 'react';
import Map from './map';
import Search from './search';
import History from './history';

class App extends React.Component {
  render() {
    return (
      <div id='app'>
        <Search />
        <Map />
        <History />
      </div>
    );
  }
}

export default App;
