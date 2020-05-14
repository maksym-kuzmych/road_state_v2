import * as React from 'react';
import {ScrollView, View, SafeAreaView} from 'react-native';
import CustomHeader from '../header/index';
import Slider from './components/Slider';
import Description from './components/Description';
import Comments from './components/Comments';
import Information from './components/Information';
import Poll from './components/Poll';

export default function CurrentMarkScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Current Mark" navigation={navigation} />
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Slider />
          <Description />
          <Information />
          <Poll />
          <Comments />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
