import React, { Component } from 'react';
import SearchAppBar from './AppBar';
import FullWidthTabs from './Tabs';

class App extends Component {
  render() {
    return (
        <div className="App">
          <SearchAppBar/>
          <FullWidthTabs/>
        </div>
    );
  }
}
export default App;
