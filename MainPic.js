import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class MainPic extends Component {
  render() {
    let pic = {
      uri: 'https://crdms.images.consumerreports.org/c_lfill,w_480/prod/cars/cr/model-years/9120-2020-tesla-roadster'
    };
    return (
      <Image source={pic} style={{width: 270, height: 110}}/>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => MainPic);
