import React, { Component } from 'react';

// components
import NavBar from './components/Navbar';
import SideNav from './components/SideNav';
import RestaurantDashboard from './pages/restaurant';

// styles
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <SideNav />
            </div>
            <div className="col-md-10">
              <NavBar />
              <RestaurantDashboard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
