import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class YourCarPic extends Component {
  render() {
    let pic = {
      uri: 'https://static-assets.tesla.com/configurator/compositor/?model=m3&options=$APPB,$BT37,$PMNG,$IN3PB,$MDL3,$DV2W,ZCST,$PRM31,$W38B,WR01&view=STUD_3QTR&size=1020&bkba_opt=1'
    };
    return (
      <Image source={pic} style={{width: 270, height: 110}}/>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => YourCarPic);
