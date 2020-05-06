import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {View, Body} from 'native-base';

import {IMAGE} from '../../../../common/constants/image';

export default function SearchResults({predictions, getSelectedAddress}) {
  const handleSelectedAddress = placeID => {
    getSelectedAddress(placeID);
  };

  return predictions.length ? (
    <View style={styles.generalContainer}>
      <FlatList
        data={predictions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handleSelectedAddress(item.placeID)}>
            <View style={styles.listItemContaier}>
              <View style={styles.leftContainer}>
                <Image
                  source={IMAGE.ICON_MARKER}
                  style={styles.leftIcon}
                  tintColor="#7D7D7D"
                />
              </View>
              <Body style={styles.textBodyContainer}>
                <Text style={styles.primaryText}>{item.primaryText}</Text>
                <Text style={styles.secondaryText}>{item.secondaryText}</Text>
              </Body>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  generalContainer: {
    height: '72%',
    backgroundColor: '#fff',
  },
  listItemContaier: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  primaryText: {
    fontWeight: 'bold',
    color: '#373737',
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  secondaryText: {
    fontStyle: 'italic',
    color: '#7D7D7D',
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  leftContainer: {
    width: '5%',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
    marginRight: 20,
  },
  textBodyContainer: {
    paddingBottom: 5,
    borderBottomColor: '#7D7D7D',
    borderBottomWidth: 1.5,
  },
  leftIcon: {
    height: 20,
    width: 20,
  },
  distance: {
    fontSize: 12,
  },
});
