import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Root} from 'native-base';
import CustomHeader from '../header/index';
import PersonalDataContainer from './components/PersonalDataHeader';
import DataContainer from './components/DataContainer';

export default function PersonalDataScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'lightgrey'}}>
      <CustomHeader title="Personal Data" navigation={navigation} />
      <Root>
        <View
          style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
          <PersonalDataContainer />
          <DataContainer />
        </View>
      </Root>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
