import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'

class WarnRemoteActionsButton extends Component {

  onPress = () => {
    Alert.alert(
      'WARNING: This app will allow remote actions to your vehicle(s)',
      'Do you accept?',
      [
        {text: 'I understand the risk', onPress: () => this.props.userAcceptsConditions()},
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
               Access Remote Actions
            </Text>
         </TouchableOpacity>
      </View>
   )
  }
}

export default WarnRemoteActionsButton

const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
   },
   text: {
      borderWidth: 2,
      padding: 10,
      borderColor: 'white',
      backgroundColor: 'darkred',
      color: 'white',
      fontWeight: 'bold',
   }
})