import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Picker} from 'native-base';

export default function ConditionDropdown() {
  const [pickerValue, setPickerValue] = useState('Average');
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>General condition: </Text>
      <View style={styles.pickerContainer}>
        <Picker
          mode="dropdown"
          selectedValue={pickerValue}
          onValueChange={setPickerValue.bind(this)}>
          <Picker.Item label="Average" value="Average" />
          <Picker.Item label="Bad" value="Bad" />
          <Picker.Item label="Awful" value="Awful" />
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {width: '95%', marginTop: 10},
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  pickerContainer: {
    marginTop: 10,
    borderColor: '#7D7D7D',
    borderWidth: 1,
    borderRadius: 5
  },
  text: {
    textAlignVertical: 'top',
    color: '#000',
    fontSize: 15,
  },
});
