import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default function Poll() {
  return (
    <View style={styles.generalContainer}>
      <Text style={styles.headerText}>Poll: </Text>
      <View style={styles.pollContainer}>
        <Text style={styles.label}>
          Is this problem relevant at the moment?
        </Text>
        <TouchableOpacity
          style={{
            height: 26,
            width: 50,
            backgroundColor: 'green',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 5,
          }}>
          <Text style={styles.btnText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 26,
            width: 50,
            backgroundColor: 'red',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.btnText}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  generalContainer: {width: '100%', marginTop: 10},
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  pollContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  label: {
    fontSize: 16,
    marginLeft: 10,
    marginRight: 7,
  },
  btnText: {
    fontSize: 15,
    color: '#fff',
  },
});
