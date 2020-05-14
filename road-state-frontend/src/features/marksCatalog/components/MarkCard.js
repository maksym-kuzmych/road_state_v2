import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {IMAGE} from '../../../common/constants/image';

export default function MarkCard({navigation}) {
  return (
    <View style={styles.markContainer}>
      <View style={styles.cardHeader}>
        <Text style={styles.headerText}>Mark №1</Text>
      </View>
      <View style={styles.cardContent}>
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
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'lightgrey'}]}
          onPress={() => navigation.navigate('CurrentMark')}>
          <Text style={styles.btnText}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'red', marginLeft: 5}]}>
          <Text style={styles.btnText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  markContainer: {
    width: '90%',
    height: 239,
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#85a392',
  },
  cardHeader: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#59b2af',
    height: '25%',
  },
  headerText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
  },
  cardContent: {
    // height: '50%',
    borderColor: '#7D7D7D',
    borderBottomWidth: 1,
  },
  buttonContainer: {
    marginTop: 7,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    height: 30,
    width: 65,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 15,
    color: '#fff',
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
