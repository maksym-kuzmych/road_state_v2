import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import CustomHeader from '../../header/index';
import CreateButton from '../../createMark/components/CreateButton';
import Direction from '../components/Direction/Direction';

export default class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = null;
    this.state = {
      latitude: 48.591765,
      longtitude: 37.995209,
      error: null,
      destinationPoints: [],
      marker: null,
    };
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longtitude: position.coords.longtitude,
        });
      },
      error => this.setState({error: error.message}),
    );
  }

  componentDidUpdate() {
    if (this.props.resultTypes.buildRoute === true) {
      this.handleMapZoom();
    }
  }

  handleMapZoom = () => {
    let destinationCoordinates = [this.props.resultTypes.pickUpLocation];
    if (this.props.resultTypes.intermediate_1.location) {
      destinationCoordinates.push(
        this.props.resultTypes.intermediate_1.location,
      );
    }
    if (this.props.resultTypes.intermediate_2.location) {
      destinationCoordinates.push(
        this.props.resultTypes.intermediate_2.location,
      );
    }
    if (this.props.resultTypes.intermediate_3.location) {
      destinationCoordinates.push(
        this.props.resultTypes.intermediate_3.location,
      );
    }
    destinationCoordinates.push(this.props.resultTypes.dropOffLocation);
    this.mapRef.fitToCoordinates(destinationCoordinates, true);
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader
          title="Map"
          isHome={true}
          navigation={this.props.navigation}
        />
        <MapView
          showsUserLocation
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: this.state.latitude,
            longitude: this.state.longtitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          ref={ref => {
            this.mapRef = ref;
          }}
          onPress={e => {
            this.setState({marker: e.nativeEvent.coordinate});
            // console.log(e.nativeEvent.coordinate);
          }}>
          {this.props.resultTypes.buildRoute === true && (
            <Direction
              resultTypes={this.props.resultTypes}
              getDirectionInfo={this.props.getDirectionInfo}
              coordinates={this.props.directionInformation.directionCoordinates}
              navigation={this.props.navigation}
            />
          )}
          {this.state.marker && <Marker coordinate={this.state.marker} />}
        </MapView>
        <CreateButton navigation={this.props.navigation} />
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
