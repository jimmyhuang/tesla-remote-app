import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import YourCarPic from './YourCarPic'
import WarnRemoteActionsButton from './WarnRemoteActionsButton'
import RemoteActions from './RemoteActions'

export default class VehicleState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vehicleState: {},
      userAcceptsConditions: false,
    }
    this.userAcceptsConditions = this.userAcceptsConditions.bind(this)
  }

  userAcceptsConditions = () => {
    this.setState({
      userAcceptsConditions: true
    })
  }

  componentDidMount() {
    async function getVehicleState(allData, bearerToken, fn) {
      try {
        let response = await fetch(`https://owner-api.teslamotors.com/api/1/vehicles/${allData.id_s}/data_request/vehicle_state`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${bearerToken}`
          }
        });
        let responseJson = await response.json();
        fn(responseJson.response)
      } catch (error) {
        console.error(error);
      }
    }
    getVehicleState(this.props.allData, this.props.bearerToken, this.setVehicleState)
  }

  setVehicleState = (vehicleState) => {
    this.setState({
      vehicleState
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.userAcceptsConditions ? <RemoteActions bearerToken={this.props.bearerToken} vehicleId={this.props.allData.id_s} /> : 
          <View>
          <YourCarPic />
          <Text style={styles.welcome}> Welcome to your vehicle </Text>
          <Text style={styles.instructions}> Your car is named {this.props.allData.display_name} </Text>
          <Text style={styles.instructions}> Your VIN is: {this.props.allData.vin.slice(0,this.props.allData.vin.length-4)+'XXXX'} {'\n'}</Text>
          {this.state.vehicleState &&
            <View>
              <Text style={styles.welcome}> Current Vehicle State</Text>
              <Text style={styles.instructions}>Odometer: {Number(this.state.vehicleState.odometer).toFixed(2)} miles</Text>
              <Text style={styles.instructions}>Car Version: {this.state.vehicleState.car_version}{'\n'}</Text>
            </View>
          }
          <WarnRemoteActionsButton userAcceptsConditions={this.userAcceptsConditions} /> 
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
    paddingTop: 50,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
    paddingBottom: 20,
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    margin: 10,
  },
});