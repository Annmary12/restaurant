import * as React from 'react';

// style
import './SideNav.scss';

// icons
import AnalyticsIcon from '../../assets/images/Bar-graph@3x.png';
import RestaurantIcon from '../../assets/images/Kitchen utilities@3x.png';
import BlogPostIcon from '../../assets/images/News paper@3x.png';
import Notification from '../../assets/images/Message bubble@3x.png';
import UserIcon from '../../assets/images/User@3x.png';
import SettingIcon from '../../assets/images/setting@3x.png';

const SideNav = () => (
  <div className="sidenav">
    <div className="sidenav__header">
      Menyoo
    </div>
    <div className="sidenav__items">
      <ul>
        <li className="sidenav__item">
          <img src={AnalyticsIcon} alt="analytic icon" className="sidenav__icon"/>
          <span className="sidenav__item--text ml-3">Analytics</span>
        </li>
        <li className="sidenav__item sidenav__item--active">
          <img src={RestaurantIcon} alt="restaurant icon" className="sidenav__icon"/>
          <span className="sidenav__item--text ml-3">Restaurants</span>
        </li>
        <li className="sidenav__item">
          <img src={BlogPostIcon} alt="blog icon" className="sidenav__icon"/>
          <span className="sidenav__item--text ml-3">Blog Post</span>
        </li>
        <li className="sidenav__item">
          <img src={Notification} alt="notification icon" className="sidenav__icon"/>
          <span className="sidenav__item--text ml-3">Notifications</span>
        </li>
        <li className="sidenav__item">
          <img src={UserIcon} alt="user icon" className="sidenav__icon"/>
          <span className="sidenav__item--text ml-3">User</span>
        </li>
        <li className="sidenav__item">
          <img src={SettingIcon} alt="settings icon" className="sidenav__icon"/>
          <span className="sidenav__item--text ml-3">Settings</span>
        </li>
      </ul>
    </div>
  </div>
)

export default SideNav;
