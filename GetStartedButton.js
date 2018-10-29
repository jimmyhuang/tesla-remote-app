import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'

class GetStartedButton extends Component {

  onPress = () => {
    Alert.alert(
      'WARNING: This app will attempt to remotely connect to your vehicle(s)',
      'Do you accept?',
      [
        {text: 'I understand the risk', onPress: () => this.props.startConnectProcess()},
        {text: 'Yikes, I\'m sp00ked', onPress: () => alert('Don\'t worry, you\'re safe now')},
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <View style = {styles.container} >
         <TouchableOpacity onPress={this.onPress}>
            <Text style={styles.text}>
               Get Started
            </Text>
         </TouchableOpacity>
      </View>
   )
  }
}

export default GetStartedButton

const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
   },
   text: {
      borderWidth: 1,
      padding: 10,
      borderColor: 'white',
      backgroundColor: 'darkred',
      color: 'white',
      fontWeight: 'bold',
   }
})