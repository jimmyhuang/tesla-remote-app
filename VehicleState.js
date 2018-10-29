import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default class VehicleState extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <View>
        <Text style={styles.welcome}> Welcome to your vehicle </Text>
        <Text style={styles.instructions}> The bearer ID is {this.props.allData.vin} </Text>
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
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    margin: 10,
  },
});