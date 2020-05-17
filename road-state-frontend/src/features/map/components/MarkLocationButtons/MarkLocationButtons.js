import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {strings} from '../../../resources/resources';

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
          <TouchableOpacity
            disabled={marker === null}
            onPress={() => this.handleChooseLocation(marker)}>
            <Text style={styles.btnText}>
              {strings.locationPickerMapButtons.btnSelect}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.buttonContainer, {backgroundColor: '#7D7D7D'}]}>
          <TouchableOpacity onPress={() => navigation.navigate('CreateMark')}>
            <Text style={styles.btnText}>
              {strings.locationPickerMapButtons.btnCancel}
            </Text>
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
