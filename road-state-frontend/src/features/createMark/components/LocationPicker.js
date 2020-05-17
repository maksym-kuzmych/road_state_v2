import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {strings} from '../../resources/resources'

export default class LocationPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
    };
  }

  handleChooseLocation = () => {
    const {buildRoute, getCreateLocation, navigation} = this.props;
    if (buildRoute === true) {
      getCreateLocation(true);
      navigation.navigate('Map');
    } else {
      Alert.alert(strings.newMark.errorHeader, strings.newMark.errorBody);
    }
  };

  render() {
    const {selectedLocation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>{strings.newMark.lblLocation}: </Text>
        {selectedLocation.length && (
          <Text style={styles.selectedLocation}>{selectedLocation}</Text>
        )}
        <View style={styles.locationContainer}>
          <TouchableOpacity
            onPress={this.handleChooseLocation}
            style={styles.btnLocation}>
            <Text style={styles.btnText}>{strings.newMark.btnChooseLocation}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {width: '95%', marginTop: 10},
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  locationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLocation: {
    backgroundColor: '#0080ff',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 5,
    width: '100%',
  },
  btnText: {
    color: '#fff',
    fontSize: 15,
  },
  selectedLocation: {
    marginLeft: 10,
    fontSize: 15,
    paddingTop: 5,
  },
});
