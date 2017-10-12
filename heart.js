import React from 'react';
import {
  asset,
  Image,
  View,
  Text
} from 'react-vr';


export default class Heart extends React.Component {
  render() {
    return (
      <View>
        <Image source={asset('heart.svg')} style={{width: 2, height: 2}}>
          <Text style={{fontSize: 0.5, textAlign: 'center', margin: 0.3}}>I love you</Text>
        </Image>
      </View>
    );
  }
}