import React from 'react';
import {View} from 'react-native';
import {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyArRVqnpPHZ-q2BMzjM62NmsU0885mHvLs';

export default class Direction extends React.Component {
  getIntermediateCoordinates = () => {
    let destinationCoordinates = [];
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
    return destinationCoordinates;
  };

  render() {
    let intermediatePoints = this.getIntermediateCoordinates();
    return (
      <View>
        <Marker
          coordinate={this.props.resultTypes.pickUpLocation}
          title="Origin Location"
          pinColor="green"
        />
        <MapViewDirections
          origin={this.props.resultTypes.pickUpLocation}
          destination={this.props.resultTypes.dropOffLocation}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          waypoints={intermediatePoints}
          strokeColor="blue"
          splitWaypoints={true}
        />
        {intermediatePoints.length
          ? intermediatePoints.map((marker, index) => (
              <Marker
                key={index}
                coordinate={marker}
                title="Intermediate Location"
                pinColor="blue"
              />
            ))
          : null}
        <Marker
          coordinate={this.props.resultTypes.dropOffLocation}
          title="Destination Location"
        />
      </View>
    );
  }
}
