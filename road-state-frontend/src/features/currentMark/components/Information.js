import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {IMAGE} from '../../../common/constants/image';

export default function Information() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>General information: </Text>
      <View style={styles.infoContainer}>
        <View style={styles.itemContainer}>
          <Image source={IMAGE.ICON_DATE} style={styles.icon} />
          <Text>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>
              Creation Date:{' '}
            </Text>
            <Text style={styles.text}>14.05.2020</Text>
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Image source={IMAGE.ICON_MARKER} style={styles.icon} />
          <Text>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>Location: </Text>
            <Text style={styles.text}>San Francisco</Text>
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Image
            source={IMAGE.ICON_GENERAL_ROAD_CONDITION}
            style={styles.icon}
          />
          <Text>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>Condition: </Text>
            <Text style={styles.text}>Bad</Text>
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Image source={IMAGE.ICON_STAR} style={styles.icon} />
          <Text>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>Relevance: </Text>
            <Text style={styles.text}>10</Text>
          </Text>
        </View>
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
  infoContainer: {
    marginTop: 10,
    borderColor: '#7D7D7D',
    borderWidth: 1,
    borderRadius: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 7,
  },
  icon: {
    marginRight: 5,
    height: 24,
    width: 24,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginLeft: 5,
  },
});
