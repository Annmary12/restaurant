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
            <div className="col-lg-2 col-md-3">
              <SideNav />
            </div>
            <div className="col-lg-10 col-md-9">
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
