import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import ActionButton from './ActionButton'

export default class RemoteActions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vehicleState: {},
    }
    this.flashHeadlights = this.flashHeadlights.bind(this)
  }

  flashHeadlights() {
    Alert.alert('Headlights flashed')
  }

  remoteUnlock() {
    Alert.alert('Car unlocked remotely for 2 minutes')
  }

  climateControlOn() {
    Alert.alert('Climate control on')
  }

  climateControlOff() {
    Alert.alert('Climate control off')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Remote Actions </Text>
        <ActionButton action={this.flashHeadlights} actionName='Flash Headlights'/>
        <ActionButton action={this.remoteUnlock} actionName='Unlock Car'/>
        <ActionButton action={this.climateControlOn} actionName='Climate Control On'/>
        <ActionButton action={this.climateControlOff} actionName='Climate Off' />
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
    paddingTop: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  button: {
    borderWidth: 2,
    padding: 10,
    borderColor: 'white',
    backgroundColor: 'darkred',
    color: 'white',
    fontWeight: 'bold'
  }
});