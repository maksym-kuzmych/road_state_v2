import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {strings} from '../../resources/resources';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
AndroidKeyboardAdjust.setAdjustPan();

export default function Description() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{strings.currentMark.lblDescription}: </Text>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.text}
          multiline={true}
          numberOfLines={3}
          value="Random Random Random Random Random Random Random Random"
          editable={false}
        />
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
  textContainer: {
    marginTop: 10,
    borderColor: '#7D7D7D',
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    textAlignVertical: 'top',
    color: '#000',
    fontSize: 15,
  },
});
