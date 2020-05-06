import * as React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import CustomHeader from '../header/index';

export default function PersonalDataScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Personal Data" navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Personal Data!</Text>
      </View>
    </SafeAreaView>
  );
}