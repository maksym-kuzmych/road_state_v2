import * as React from 'react';
import {View, StyleSheet} from 'react-native';

export default function MarkCard({navigation}) {
  return <View style={styles.markContainer} />;
}

const styles = StyleSheet.create({
  markContainer: {
    width: '90%',
    height: 150,
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#85a392',
  },
});
