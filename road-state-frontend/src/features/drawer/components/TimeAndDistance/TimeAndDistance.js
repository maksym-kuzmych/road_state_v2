import React from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import {View, Body} from 'native-base';

import {IMAGE} from '../../../../common/constants/image';

export default function TimeAndDistance() {
  return (
    <View style={styles.generalContainer}>
      <View style={styles.textContainer}>
        <View style={styles.itemContainer}>
          <Image source={IMAGE.ICON_DISTANCE} style={styles.icon} />
          <Text style={styles.text}>Travelling Distance: 26 km</Text>
        </View>
        <View style={styles.itemContainer}>
          <Image source={IMAGE.ICON_TIME} style={styles.icon} />
          <Text style={styles.text}>Travelling Time: 36 min</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  generalContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 5,
  },
  icon: {
    marginRight: 5,
    height: 24,
    width: 24,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  textContainer: {
    width: '90%',
  },
  text: {
    fontSize: 18,
    marginLeft: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#7D7D7D',
  },
});
