import React, { Component } from 'react';
import Login from './components/login';
import Main from './components/main';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChartBar, faCloud, faUsers, faDesktop, faNetworkWired, faBell, faPlus, faTrashAlt, faClock
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faBell,
  faChartBar,
  faClock,
  faCloud,
  faDesktop,
  faNetworkWired,
  faPlus,
  faTrashAlt,
  faUsers
);

const authenticated = true;

class App extends Component {
  render() {
    if (authenticated) {
      return <Main />
    } else {
      return <Login />
    }
  }
}

export default App;
