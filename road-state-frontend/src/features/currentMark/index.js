import * as React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import CustomHeader from '../header/index';
import Slider from './components/Slider';

export default function CurrentMarkScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Current Mark" navigation={navigation} />
      <View>
        <Slider />
        <Text>Current Mark!</Text>
      </View>
    </SafeAreaView>
  );
}
