// react libraries
import React, { Component } from 'react';

// styles
import './Navbar.scss';

// icon
import searchIcon from '../../assets/images/search.svg';

class NavBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      showSearchInput: false,
    }
  }

  /**
   * toggles the select input
   *
   * @returns {void}
   */
  toggleSearchInput = () => {
    this.setState({
      showSearchInput: !this.state.showSearchInput
    })
  }

  render() {
    return (
      <div className="navbar col-md-12">
        <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        { this.state.showSearchInput &&
          <input
            type="text"
            name="search"
            placeholder="Searh Restaurant"
            className='select-box__input ml-2'
            autoComplete="off"
          />
        }
          <img src={searchIcon}  className="navbar__search ml-4" alt="search-img" onClick={this.toggleSearchInput}/>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active ml-4">
                <span className="navbar__search-restaurants">Search Restaurants</span>
              </li>
            </ul>
            <span class="navbar-text mr-5 pr-3">
              <img className="navbar__img rounded" src="https://res.cloudinary.com/annmary/image/upload/v1551864775/fashion_dm2i4a.jpg" alt="" />
              <span className="navbar__name ml-3">Jemima Assim-Ita</span>
            </span>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar;
