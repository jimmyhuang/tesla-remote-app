import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import ActionButton from './ActionButton'

export default class RemoteActions extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  async flashHeadlights() {
    try {
      await fetch(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/flash_lights`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.props.bearerToken}`
        }
      });
    } catch (error) {
      console.error(error);
    }
    Alert.alert('Headlights flashed')
  }

  async remoteUnlock() {
    // https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/remote_start_drive?password={password}
    Alert.alert('Not enabled as password is not stored')
  }

  async climateControlOn() {
    try {
      await fetch(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/auto_conditioning_start`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.props.bearerToken}`
        }
      });
    } catch (error) {
      console.error(error);
    }
    Alert.alert('Climate control on')
  }

  async climateControlOff() {
    try {
      await fetch(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/auto_conditioning_stop`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.props.bearerToken}`
        }
      });
    } catch (error) {
      console.error(error);
    }
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