import React from 'react';
import Map from './map';
import Search from './search';


class App extends React.Component {
  render() {
    return (
      <div id='app'>
        <Search />
        <Map />
      </div>
    );
  }
}

export default App;
