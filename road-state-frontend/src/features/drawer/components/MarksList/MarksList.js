import React from 'react';
import {Text, StyleSheet, Image, ScrollView} from 'react-native';
import {View, Body} from 'native-base';
import {IMAGE} from '../../../../common/constants/image';
import {strings} from '../../../resources/resources';

export default function MarksList({directionInformation}) {
  return directionInformation.travelDistance.length ? (
    <View style={styles.generalContainer}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'lightblue',
        }}>
        <Text style={{padding: 7, fontSize: 16}}>
          {strings.routeInformation.lblIssuesLocations}
        </Text>
      </View>
      <ScrollView>
        <View style={styles.listItemContaier}>
          <View style={styles.leftContainer}>
            <Image
              source={IMAGE.ICON_MARKER}
              style={styles.leftIcon}
              tintColor="red"
            />
          </View>
          <Body style={styles.textBodyContainer}>
            <Text style={styles.primaryText}>primaryText</Text>
            <Text style={styles.secondaryText}>secondaryText</Text>
          </Body>
        </View>
        <View style={styles.listItemContaier}>
          <View style={styles.leftContainer}>
            <Image
              source={IMAGE.ICON_MARKER}
              style={styles.leftIcon}
              tintColor="yellow"
            />
          </View>
          <Body style={styles.textBodyContainer}>
            <Text style={styles.primaryText}>primaryText</Text>
            <Text style={styles.secondaryText}>secondaryText</Text>
          </Body>
        </View>
        <View style={styles.listItemContaier}>
          <View style={styles.leftContainer}>
            <Image
              source={IMAGE.ICON_MARKER}
              style={styles.leftIcon}
              tintColor="green"
            />
          </View>
          <Body style={styles.textBodyContainer}>
            <Text style={styles.primaryText}>primaryText</Text>
            <Text style={styles.secondaryText}>secondaryText</Text>
          </Body>
        </View>
        <View style={styles.listItemContaier}>
          <View style={styles.leftContainer}>
            <Image
              source={IMAGE.ICON_MARKER}
              style={styles.leftIcon}
              tintColor="#7D7D7D"
            />
          </View>
          <Body style={styles.textBodyContainer}>
            <Text style={styles.primaryText}>primaryText</Text>
            <Text style={styles.secondaryText}>secondaryText</Text>
          </Body>
        </View>
        <View style={styles.listItemContaier}>
          <View style={styles.leftContainer}>
            <Image
              source={IMAGE.ICON_MARKER}
              style={styles.leftIcon}
              tintColor="#7D7D7D"
            />
          </View>
          <Body style={styles.textBodyContainer}>
            <Text style={styles.primaryText}>primaryText</Text>
            <Text style={styles.secondaryText}>secondaryText</Text>
          </Body>
        </View>
        <View style={styles.listItemContaier}>
          <View style={styles.leftContainer}>
            <Image
              source={IMAGE.ICON_MARKER}
              style={styles.leftIcon}
              tintColor="#7D7D7D"
            />
          </View>
          <Body style={styles.textBodyContainer}>
            <Text style={styles.primaryText}>primaryText</Text>
            <Text style={styles.secondaryText}>secondaryText</Text>
          </Body>
        </View>
        <View style={styles.listItemContaier}>
          <View style={styles.leftContainer}>
            <Image
              source={IMAGE.ICON_MARKER}
              style={styles.leftIcon}
              tintColor="#7D7D7D"
            />
          </View>
          <Body style={styles.textBodyContainer}>
            <Text style={styles.primaryText}>primaryText</Text>
            <Text style={styles.secondaryText}>secondaryText</Text>
          </Body>
        </View>
        <View style={styles.listItemContaier}>
          <View style={styles.leftContainer}>
            <Image
              source={IMAGE.ICON_MARKER}
              style={styles.leftIcon}
              tintColor="#7D7D7D"
            />
          </View>
          <Body style={styles.textBodyContainer}>
            <Text style={styles.primaryText}>primaryText</Text>
            <Text style={styles.secondaryText}>secondaryText</Text>
          </Body>
        </View>
      </ScrollView>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  generalContainer: {
    height: '45%',
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
