import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import {IMAGE} from '../../../../common/constants/image';

export default function SearchBox({
  getInputData,
  toggleSearchResultModal,
  getAddressPredictions,
  selectedAddress,
  addIntermediatePoint,
  removeIntermediatePoint,
  resultTypes,
  buildRoute,
  navigation,
}) {
  const [routeButtonEnabled, setRouteButtonEnabled] = useState(false);
  const {
    selectedPickUp,
    selectedIntermediate_1,
    selectedIntermediate_2,
    selectedIntermediate_3,
    selectedDropOff,
  } = selectedAddress || {};

  const isFirstUpdate = useRef(true);
  useEffect(() => {
    if (isFirstUpdate.current) {
      isFirstUpdate.current = false;
      return;
    }

    handleRouteButtonEnabling();
  });

  const handleRouteButtonEnabling = () => {
    if (resultTypes.intermediate_3.visible === true) {
      if (
        resultTypes.pickUpLocation &&
        resultTypes.dropOffLocation &&
        resultTypes.intermediate_1.location &&
        resultTypes.intermediate_2.location &&
        resultTypes.intermediate_3.location
      ) {
        setRouteButtonEnabled(true);
      } else {
        setRouteButtonEnabled(false);
      }
    } else if (resultTypes.intermediate_2.visible === true) {
      if (
        resultTypes.pickUpLocation &&
        resultTypes.dropOffLocation &&
        resultTypes.intermediate_1.location &&
        resultTypes.intermediate_2.location
      ) {
        setRouteButtonEnabled(true);
      } else {
        setRouteButtonEnabled(false);
      }
    } else if (resultTypes.intermediate_1.visible === true) {
      if (
        resultTypes.pickUpLocation &&
        resultTypes.dropOffLocation &&
        resultTypes.intermediate_1.location
      ) {
        setRouteButtonEnabled(true);
      } else {
        setRouteButtonEnabled(false);
      }
    } else if (resultTypes.pickUpLocation && resultTypes.dropOffLocation) {
      setRouteButtonEnabled(true);
    } else {
      setRouteButtonEnabled(false);
    }
  };

  const handleInput = (key, val) => {
    getInputData({
      key,
      value: val,
    });
    getAddressPredictions();
  };

  const handleAddPoint = number => {
    if (
      resultTypes.intermediate_1.visible === true &&
      resultTypes.intermediate_2.visible === true &&
      resultTypes.intermediate_3.visible === true
    ) {
      Alert.alert('Warning', 'Maximum intermediate points number is 3!');
    } else {
      addIntermediatePoint(number);
    }
  };

  const handleRemovePoint = pointId => {
    removeIntermediatePoint(pointId);
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <Image
          source={IMAGE.ICON_MARKER}
          style={styles.icon}
          tintColor="#21bf73"
        />
        <TextInput
          style={styles.textinput}
          placeholder="From"
          placeholderTextColor="#000"
          onChangeText={handleInput.bind(this, 'pickUp')}
          onFocus={() => toggleSearchResultModal('pickUp')}
          value={selectedPickUp && selectedPickUp.name}
        />
        {/* <TouchableOpacity style={styles.geoiconContainer}>
          <Image
            source={IMAGE.ICON_GEOLOCATION}
            style={styles.icon}
            tintColor="#fff"
          />
        </TouchableOpacity> */}
      </View>
      {resultTypes.intermediate_1.visible === true && (
        <View style={styles.inputContainer}>
          <Image
            source={IMAGE.ICON_MARKER}
            style={styles.icon}
            tintColor="#0779e4"
          />
          <TextInput
            style={styles.textinput}
            placeholder="Through"
            placeholderTextColor="#000"
            onChangeText={handleInput.bind(this, 'intermediate_1')}
            onFocus={() => toggleSearchResultModal('intermediate_1')}
            value={selectedIntermediate_1 && selectedIntermediate_1.name}
          />
          <TouchableOpacity
            style={styles.geoiconContainer}
            onPress={() => handleRemovePoint(resultTypes.intermediate_1.id)}>
            <Image
              source={IMAGE.ICON_CROSS}
              style={styles.icon}
              tintColor="#fff"
            />
          </TouchableOpacity>
        </View>
      )}
      {resultTypes.intermediate_2.visible === true && (
        <View style={styles.inputContainer}>
          <Image
            source={IMAGE.ICON_MARKER}
            style={styles.icon}
            tintColor="#0779e4"
          />
          <TextInput
            style={styles.textinput}
            placeholder="Through"
            placeholderTextColor="#000"
            onChangeText={handleInput.bind(this, 'intermediate_2')}
            onFocus={() => toggleSearchResultModal('intermediate_2')}
            value={selectedIntermediate_2 && selectedIntermediate_2.name}
          />
          <TouchableOpacity
            style={styles.geoiconContainer}
            onPress={() => handleRemovePoint(resultTypes.intermediate_2.id)}>
            <Image
              source={IMAGE.ICON_CROSS}
              style={styles.icon}
              tintColor="#fff"
            />
          </TouchableOpacity>
        </View>
      )}
      {resultTypes.intermediate_3.visible === true && (
        <View style={styles.inputContainer}>
          <Image
            source={IMAGE.ICON_MARKER}
            style={styles.icon}
            tintColor="#0779e4"
          />
          <TextInput
            style={styles.textinput}
            placeholder="Through"
            placeholderTextColor="#000"
            onChangeText={handleInput.bind(this, 'intermediate_3')}
            onFocus={() => toggleSearchResultModal('intermediate_3')}
            value={selectedIntermediate_3 && selectedIntermediate_3.name}
          />
          <TouchableOpacity
            style={styles.geoiconContainer}
            onPress={() => handleRemovePoint(resultTypes.intermediate_3.id)}>
            <Image
              source={IMAGE.ICON_CROSS}
              style={styles.icon}
              tintColor="#fff"
            />
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.inputContainer}>
        <Image
          source={IMAGE.ICON_MARKER}
          style={styles.icon}
          tintColor="#c70039"
        />
        <TextInput
          style={styles.textinput}
          placeholder="To"
          placeholderTextColor="#000"
          onChangeText={handleInput.bind(this, 'dropOff')}
          onFocus={() => toggleSearchResultModal('dropOff')}
          value={selectedDropOff && selectedDropOff.name}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={
            routeButtonEnabled
              ? styles.buildRouteButton
              : styles.buildRouteButtonDisabled
          }
          disabled={!routeButtonEnabled}
          onPress={() => {
            buildRoute(true);
            navigation.closeDrawer();
          }}>
          <Text
            style={
              routeButtonEnabled
                ? styles.buildRouteText
                : styles.buildRouteTextDisabled
            }>
            Buld Route
          </Text>
        </TouchableOpacity>
        <View style={styles.plusContainer}>
          <TouchableOpacity
            onPress={() => handleAddPoint(resultTypes.showPoint)}>
            <Image
              source={IMAGE.ICON_PLUS}
              style={styles.iconPlus}
              tintColor="#fff"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

{
  /* {intermediatePoints.map(item => (
        <View key={item.id} style={styles.inputContainer}>
          <Image
            source={IMAGE.ICON_MARKER}
            style={styles.icon}
            tintColor="#0779e4"
          />
          <TextInput
            style={styles.textinput}
            placeholder="Through"
            placeholderTextColor="#000"
          />
          <TouchableOpacity
            style={styles.geoiconContainer}
            onPress={() => removePoint(item.id)}>
            <Image
              source={IMAGE.ICON_CROSS}
              style={styles.icon}
              tintColor="#fff"
            />
          </TouchableOpacity>
        </View>
      ))} */
}

const styles = StyleSheet.create({
  textinput: {
    flex: 1,
    alignSelf: 'stretch',
  },
  icon: {
    padding: 10,
    margin: 5,
    height: 24,
    width: 24,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  geoiconContainer: {
    height: '100%',
    backgroundColor: '#dbdbdb',
    justifyContent: 'center',
  },
  inputContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#85a392',
    height: 40,
    backgroundColor: '#fff',
    width: '95%',
  },
  plusContainer: {
    position: 'absolute',
    right: 0,
    height: 35,
    width: 36,
    marginTop: 7,
    marginBottom: 10,
    backgroundColor: '#dbdbdb',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#85a392',
  },
  iconPlus: {
    height: 20,
    width: 20,
  },
  buildRouteButton: {
    height: 35,
    width: '85%',
    marginTop: 7,
    marginBottom: 10,
    backgroundColor: '#0779e4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buildRouteButtonDisabled: {
    height: 35,
    width: '85%',
    marginTop: 7,
    marginBottom: 10,
    backgroundColor: '#dbdbdb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buildRouteText: {fontSize: 15, color: '#fff'},
  buildRouteTextDisabled: {fontSize: 15, color: '#000'},
});
