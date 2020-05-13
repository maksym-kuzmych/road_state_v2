import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Root} from 'native-base';
import CustomHeader from '../header/index';
import Description from './components/Description';
import ConditionDropdown from './components/ConditionDropdown';
import Attachment from './components/Attachment';
import LocationPicker from './components/LocationPicker';

export default function CreateMarkScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="New Mark" navigation={navigation} />
      <ScrollView>
        <Root>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Attachment />
            <LocationPicker />
            <ConditionDropdown />
            <Description />
          </View>
        </Root>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={[styles.buttonContainer, {backgroundColor: '#0080ff'}]}>
          <Text style={styles.btnText}>Create Mark</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonContainer, {backgroundColor: '#7D7D7D'}]}>
          <Text style={styles.btnText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.75,
  },
  btnText: {
    fontSize: 20,
    color: '#fff',
  },
});
