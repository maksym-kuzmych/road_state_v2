import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

export default function Description() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Description: </Text>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.text}
          multiline={true}
          numberOfLines={5}
          value="Random Random Random Random Random Random Random Random"
          editable={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {width: '100%', marginTop: 10},
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  textContainer: {
    marginTop: 10,
    borderColor: '#7D7D7D',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  text: {
    textAlignVertical: 'top',
    color: '#000',
    fontSize: 15,
  },
});
