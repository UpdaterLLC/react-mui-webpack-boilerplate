/**
 * main.jsx: Application Entry Point
 */
'use strict';
localStorage.debug = ("production" === process.env.NODE_ENV) ? '' : 'updaterllc:*';
const debug = require('debug')('updaterllc:example:main');

import React from 'react';
import { render } from 'react-dom';

// Needed for onTouchTap
// Check this repo: https://github.com/zilverline/react-tap-event-plugin
// This dependency is temporary and will go away once the official React version is released.
// Until then, be sure to inject this plugin at the start of your app.
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// google things
import GoogleMapsLoader from 'google-maps';
GoogleMapsLoader.KEY = '';
GoogleMapsLoader.SENSOR = false;
GoogleMapsLoader.LANGUAGE = 'jp';

// application's components
import 'normalize.css';
import Layout from 'components/Layout';
import NotFound from 'components/NotFound/NotFound';

// just for test
import RaisedButton from 'material-ui/RaisedButton';
class MyAwesomeReactComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <RaisedButton label="Default" />
    )
  }
}

// do the job
const appElement = document.getElementById('app');

if (!window.addEventListener) {
  
  debug('window.addEventListener is undefined.');
  if (!!appElement)
    render(<Layout><NotFound /></Layout>, appElement)
  
} else {
  
  debug('window.addEventListener is set.');
  window.addEventListener('load', () => {

    GoogleMapsLoader.load((google) => {

      debug('GoogleMapsLoader was loaded.');
      window.google = google;
      // window.ReactGoogleMaps = require('react-googlemaps');

      if (!!appElement)
        render(<Layout><MyAwesomeReactComponent /></Layout>, appElement);
    });
  }, false);
  
}
//__END__
