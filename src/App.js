import React, { Component } from 'react';
import SearchAppBar from './AppBar';
import NavTabs from "./Tabs";


class App extends Component {
  render() {
    return (
        <div className="App">
          <SearchAppBar/>
          <NavTabs/>
        </div>
    );
  }
}
export default App;
