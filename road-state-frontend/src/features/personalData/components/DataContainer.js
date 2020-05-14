import * as React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function DataContainer() {
  return (
    <View style={styles.dataContainer}>
      <View style={[styles.itemContainer, {marginTop: 15}]}>
        <Text style={styles.label}>User Name:</Text>
        <TextInput
          style={styles.text}
          placeholder="Input your name"
          maxLength={45}
        />
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.text}
          placeholder="Input your email"
          maxLength={45}
        />
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>Birth Date:</Text>
        <TextInput
          style={styles.text}
          placeholder="Input your birthdate"
          maxLength={45}
        />
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.btnText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  dataContainer: {
    borderBottomWidth: 1,
    borderColor: '#000',
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  itemContainer: {
    marginLeft: 10,
    width: '100%',
    height: 60,
    borderBottomWidth: 0.5,
    borderColor: '#7D7D7D',
  },
  label: {
    fontSize: 16,
    marginLeft: 5,
    marginTop: 5,
  },
  text: {position: 'absolute', top: 17, fontSize: 16},
  buttonContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#0080ff',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.75,
    marginTop: 90
  },
  btnText: {fontSize: 20, color: '#fff'},
});
