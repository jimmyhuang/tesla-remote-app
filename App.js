/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MainPic from './MainPic'
import GetStartedButton from './GetStartedButton'
import ConnectToVehicle from './ConnectToVehicle';

const instructions = Platform.select({
  ios: 'A simple app using React Native \n and the Unofficial Tesla API \n',
  android:
    'It is recommended that you use iOS as this app is not optimized for Android'
});

// type Props = {};
export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userAcceptsConditions: false
    }
    this.startConnectProcess = this.startConnectProcess.bind(this)
  }

  startConnectProcess = () => {
    this.setState({
      userAcceptsConditions: true
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.userAcceptsConditions ? <ConnectToVehicle /> : 
        <View style={styles.container}>
          <MainPic />
          <Text style={styles.welcome}>Welcome to Tesla Remote</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <GetStartedButton startConnectProcess={this.startConnectProcess} />
        </View>
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 25,
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    margin: 10,
  },
});
