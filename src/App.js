import React, { Component } from 'react';

// components
import NavBar from './components/Navbar';

// styles
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">Side Nav</div>
            <div className="col-10">
              <NavBar />
            </div>
          </div>
        </div>
        <header className="App-header">
          Restaurant
        </header>
      </div>
    );
  }
}

export default App;
