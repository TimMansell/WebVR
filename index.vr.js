import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

import Heart from './heart';

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>

        <View style={{ flex: 1, flexDirection: 'column', width: 2, alignItems: 'stretch', transform: [{translate: [-1, 1, -5]}], }}> 
          <View style={{ margin: 0.1, height: 0.3, transform: [{translate: [0, 0, 2]}], }}> 
            <Text style={{fontSize: 0.5, textAlign: 'center'}}>Look</Text> 
          </View> 
          <View style={{ margin: 0.1, height: 0.3, transform: [{translate: [0, 0, 1]}], }}>  
            <Text style={{fontSize: 0.5, textAlign: 'center'}}>Behind</Text> 
          </View>
          <View style={{ margin: 0.1, height: 0.3, transform: [{translate: [0, 0, -2]}], }}> 
            <Text style={{fontSize: 0.5, textAlign: 'center'}}>You</Text> 
          </View> 
        </View>

        <View billboarding={'on'} style={{ flex: 1, flexDirection: 'column', width: 2, alignItems: 'stretch', transform: [{translate: [-1, 2, 5]} ], }}> 
           <Heart />
        </View>
        
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
