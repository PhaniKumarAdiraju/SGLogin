/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
} from 'react-native';
import LoginScreen from './src/Components/LoginScreen'
import { nikeAuthenticate, adidasAuthenticate } from './src/utils/db.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      valid: false,
      client: 'Nike',
      authenticate: adidasAuthenticate,
    };
  }

  handleLogin = () => {
    this.setState({
      authenticated: true,
      valid: this.state.authenticate,
    })
  }

  render() {
    const { authenticated, valid } = this.state;

    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <LoginScreen handleLogin={this.handleLogin}
            authenticated={authenticated}
            valid={valid}
          />
        </SafeAreaView>
      </Fragment>
    );
  }
};

export default App;
