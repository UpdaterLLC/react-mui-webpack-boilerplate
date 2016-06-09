/**
 * Layout.jsx: base layout component
 */
'use strict';

import React from 'react';
import { render } from 'react-dom';

import {lightGreen500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppBar from 'material-ui/AppBar';

import 'styles/layout.styl';

const muiTheme = getMuiTheme({
  palette: {
    // This replaces the textColor value on the palette
    // and then update the keys for each component that depends on it.
    // More on Colors: http://www.material-ui.com/#/customization/colors
    textColor: lightGreen500,
  },
  appBar: {
    height: 50,
  },
});

class Layout extends React.Component {
  
  getChildContext() { return { muiTheme: muiTheme } }
  
  constructor(props) { super(props) }
  
  render() {
    return (
      <div>
        <AppBar title="react-webpack-boilerplate" />

        { this.props.children }

        <footer>
          <p>Copyright (c) 2016 Updater LLC. Licence: MIT.</p>
          <p>The licensing conditions of redistributed software are listed in <a href="list-of-redistribued-software.html">here</a>.</p>
        </footer>

      </div>
    );
  }
}

Layout.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

Layout.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ]).isRequired
};

export default Layout;

//__END__
