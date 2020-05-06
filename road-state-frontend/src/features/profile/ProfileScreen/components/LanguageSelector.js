import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import RadioButtonGroup from '../components/RadioButtonGroup';

export default function LanguageSelector({hideModal}) {
  return (
    <Modal transparent={true} visible={true}>
      <View style={styles.container}>
        <View style={styles.mainView}>
          <Text style={styles.header}>Application language</Text>
          <RadioButtonGroup />
          <TouchableOpacity
            style={styles.button}
            onPress={() => hideModal(false)}>
            <Text style={styles.btnText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000aa',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainView: {
    position: 'absolute',
    top: 175,
    backgroundColor: '#fff',
    height: 180,
    width: 300,
    borderRadius: 3,
  },
  header: {
    padding: 10,
    fontSize: 19,
    fontWeight: 'bold',
  },
  button: {
    position: 'absolute',
    bottom: 15,
    right: 20,
  },
  btnText: {
    fontSize: 16,
    color: '#267175',
    textTransform: 'uppercase',
  },
});
