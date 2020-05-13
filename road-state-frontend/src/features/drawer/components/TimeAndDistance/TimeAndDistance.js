import React from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import {View, Body} from 'native-base';

import {IMAGE} from '../../../../common/constants/image';

export default function TimeAndDistance({directionInformation}) {
  return directionInformation.travelDistance.length ? (
    <View style={styles.generalContainer}>
      <View style={styles.textContainer}>
        <View style={styles.itemContainer}>
          <Image source={IMAGE.ICON_DISTANCE} style={styles.icon} />
          <Text>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>
              Travel Distance:{' '}
            </Text>
            <Text style={styles.text}>
              {directionInformation.travelDistance}
            </Text>
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Image source={IMAGE.ICON_TIME} style={styles.icon} />
          <Text>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>
              Travel Time:{' '}
            </Text>
            <Text style={styles.text}>{directionInformation.travelTime}</Text>
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Image source={IMAGE.ICON_GENERAL_ROAD_CONDITION} style={styles.icon} />
          <Text>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>
              General road condition:{' '}
            </Text>
            <Text style={styles.text}>{directionInformation.travelTime}</Text>
          </Text>
        </View>
      </View>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  generalContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#ffe277',
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
    fontSize: 16,
    marginLeft: 5,
  },
});
