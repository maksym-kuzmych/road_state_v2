import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class LocationPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Location: </Text>
        <View style={styles.locationContainer}>
          <TouchableOpacity
            onPress={this.onClickAddImage}
            style={styles.btnLocation}>
            <Text style={styles.btnText}>Choose Location</Text>
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
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 15,
  },
});
