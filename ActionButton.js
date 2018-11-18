import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class ActionButton extends Component {

  render() {
    return (
      <View style = {styles.container} >
         <TouchableOpacity onPress={this.props.action}>
            <Text style={styles.text}>
               {this.props.actionName}
            </Text>
         </TouchableOpacity>
      </View>
   )
  }
}

export default ActionButton

const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
   },
   text: {
      borderWidth: 1,
      padding: 10,
      borderColor: 'white',
      backgroundColor: 'black',
      color: 'white',
      marginTop: 10,
   }
})