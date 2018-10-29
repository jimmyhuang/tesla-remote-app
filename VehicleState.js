import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import YourCarPic from './YourCarPic'

export default class VehicleState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vehicleState: {}
    }
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
        <YourCarPic />
        <Text style={styles.welcome}> Welcome to your vehicle </Text>
        <Text style={styles.instructions}> Your car is named {this.props.allData.display_name} </Text>
        <Text style={styles.instructions}> Your VIN is {this.props.allData.vin} </Text>
        <Text style={styles.instructions}> Your car has the following options: {this.props.allData.option_codes} </Text>
        {this.state.vehicleState &&
          <View>
            <Text style={styles.instructions}>Odometer: {this.state.vehicleState.odometer}</Text>
            <Text style={styles.instructions}>Car Version: {this.state.vehicleState.car_version}</Text>
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
    marginTop: 25,
    paddingBottom: 20,
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    margin: 10,
  },
});