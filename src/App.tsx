import React from 'react';
import {Component} from 'react';
import {Button, NativeEventEmitter,NativeModules, StyleSheet, Text, Vibration, View} from 'react-native';
import SystemSetting from 'react-native-system-setting'

type VersionInfo = {
  version: {
    major: number;
    minor: number;
    patch: number;
  };
};

type Props = {};
export default class App extends Component<Props> {
  state = {
    volume:0,
    preVolume:0
  }



  componentDidMount =()=>{
  
    // listen the volume changing if you need
    const volumeListener = SystemSetting.addVolumeListener((data) => {
      const volume = data.value;
      this.setState({volume})
      console.log("changes to =>",volume);
    });
        
    // // // listen the volume changing if you need
    // const volumeListener = SystemSetting.addVolumeListener((data) => {
    //   const volume = data.value;
    //   let nextCount = this.state.count
    //   if(nextCount % 4 == 0)
    //   this.setState({count: this.state.count+1})
    //   console.log("volume is ==>",volume);
    // });    
  }
  
  render() {
    const useHermes = global.hasOwnProperty('HermesInternal');
    const RNVersion: VersionInfo = require('../node_modules/react-native/Libraries/Core/ReactNativeVersion');
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is a demo using React Native {RNVersion.version.minor} -- {this.state.volume}
        </Text>
        <Button onPress={()=>{}} title="Click here"></Button>
        <Text>
          {useHermes
            ? 'JavaScript engine: Hermes'
            : 'JavaScript engine: JavaScriptCore'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
