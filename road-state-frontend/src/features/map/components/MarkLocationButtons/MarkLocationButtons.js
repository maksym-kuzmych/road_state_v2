import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

export default class MarkLocationButtons extends React.Component {
  handleChooseLocation = marker => {
    const {navigation, getSelectedLocation, setMarkerToNull} = this.props;
    getSelectedLocation(marker);
    navigation.navigate('CreateMark');
    setMarkerToNull();
  };

  render() {
    const {marker, chooseLocation, navigation} = this.props;

    return chooseLocation === true ? (
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
        }}>
        <View
          style={
            marker != null
              ? [styles.buttonContainer, {backgroundColor: '#0080ff'}]
              : [
                  styles.buttonContainerTransparent,
                  {backgroundColor: '#0080ff'},
                ]
          }>
          <TouchableOpacity onPress={() => this.handleChooseLocation(marker)}>
            <Text style={styles.btnText}>Select Location</Text>
          </TouchableOpacity>
        </View>
        <View
          style={
            marker != null
              ? [styles.buttonContainer, {backgroundColor: '#7D7D7D'}]
              : [
                  styles.buttonContainerTransparent,
                  {backgroundColor: '#7D7D7D'},
                ]
          }>
          <TouchableOpacity>
            <Text style={styles.btnText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    ) : null;
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainerTransparent: {
    height: 50,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.75,
  },
  btnText: {
    fontSize: 20,
    color: '#fff',
  },
});
