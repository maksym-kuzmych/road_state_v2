import * as React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import CustomHeader from '../header/index';

export default function CreateMarkScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="New Mark" navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>New Mark!</Text>
      </View>
    </SafeAreaView>
  );
}