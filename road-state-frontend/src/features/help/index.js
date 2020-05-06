import * as React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import CustomHeader from '../header/index';

export default function HelpScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Help" navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Help!</Text>
      </View>
    </SafeAreaView>
  );
}