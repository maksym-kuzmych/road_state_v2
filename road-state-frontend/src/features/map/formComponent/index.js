import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import CustomHeader from '../../header/index';
import CreateButton from '../../createMark/components/CreateButton';
import Direction from '../components/Direction/Direction';
import MarkLocationButtons from '../components/MarkLocationButtons/MarkLocationButtons';
import {strings} from '../../resources/resources';

export default class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = null;
    this.state = {
      latitude: 48.591765,
      longitude: 37.995209,
      error: null,
      destinationPoints: [],
      marker: null,
      headerText: 'Карта',
    };
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => this.setState({error: error.message}),
    );
  }

  componentDidUpdate() {
    const {resultTypes} = this.props;
    if (resultTypes.buildRoute === true) {
      this.handleMapZoom();
    }
  }

  handleMapZoom = () => {
    const {resultTypes} = this.props;

    let destinationCoordinates = [resultTypes.pickUpLocation];
    if (resultTypes.intermediate_1.location) {
      destinationCoordinates.push(resultTypes.intermediate_1.location);
    }
    if (resultTypes.intermediate_2.location) {
      destinationCoordinates.push(resultTypes.intermediate_2.location);
    }
    if (resultTypes.intermediate_3.location) {
      destinationCoordinates.push(resultTypes.intermediate_3.location);
    }
    destinationCoordinates.push(resultTypes.dropOffLocation);
    this.mapRef.fitToCoordinates(destinationCoordinates, true);
  };

  handleMapOnPress = e => {
    const {chooseLocation, directionInformation} = this.props;
    if (chooseLocation === true) {
      this.createMarkerOnRoute(
        e.nativeEvent.coordinate,
        directionInformation.directionCoordinates,
      );
    }
  };

  createMarkerOnRoute = (markerCoords, routeCoords) => {
    let mapMarkerCoord = null;
    for (let i = 0; i < routeCoords.length - 1; i++) {
      if (this.isPointInRouteSegment(markerCoords, routeCoords[i])) {
        let minLng = Math.min(
          routeCoords[i].longitude,
          routeCoords[i + 1].longitude,
        );
        let coord =
          routeCoords[i].longitude === minLng
            ? routeCoords[i]
            : routeCoords[i + 1];
        mapMarkerCoord = coord;
        break;
      }
    }
    this.setState({marker: mapMarkerCoord});
  };

  isPointInRouteSegment = (markerCoords, routePoint) => {
    const errorFarSize = 0.009;
    const errorCloseSize = 0.0004;
    const distance = Math.abs(markerCoords.longitude - routePoint.longitude);
    if (distance <= errorCloseSize) return true;
    else if (distance <= errorFarSize) return true;
    else return false;
  };

  render() {
    const {
      navigation,
      chooseLocation,
      getCreateLocation,
      resultTypes,
      getDirectionInfo,
      directionInformation,
      getSelectedLocation,
    } = this.props;
    const {marker, headerText} = this.state;

    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader
          title={strings.map.header}
          isHome={true}
          navigation={navigation}
          chooseLocation={chooseLocation}
          getCreateLocation={getCreateLocation}
        />
        <MapView
          showsUserLocation
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            //latitude: this.state.latitude,
            //longitude: this.state.longitude,
            latitude: 48.591765,
            longitude: 37.995209,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          ref={ref => {
            this.mapRef = ref;
          }}
          onPress={e => this.handleMapOnPress(e)}>
          {resultTypes.buildRoute === true && (
            <Direction
              resultTypes={resultTypes}
              getDirectionInfo={getDirectionInfo}
              coordinates={directionInformation.directionCoordinates}
              navigation={navigation}
            />
          )}
          {marker && <Marker coordinate={marker} />}
        </MapView>
        {chooseLocation !== true && <CreateButton navigation={navigation} />}
        <MarkLocationButtons
          chooseLocation={chooseLocation}
          marker={marker}
          navigation={navigation}
          getSelectedLocation={getSelectedLocation}
          setMarkerToNull={() => {
            this.setState({marker: null});
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    flex: 1,
    height: '100%',
  },
});
