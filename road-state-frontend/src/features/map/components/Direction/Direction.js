import React from 'react';
import {View} from 'react-native';
import {Marker, Polyline as Route} from 'react-native-maps';
import Polyline from '@mapbox/polyline';
import ShowMarksOnRoad from '../ShowMarksOnRoad/ShowMarksOnRoad';

const GOOGLE_MAPS_APIKEY = 'AIzaSyArRVqnpPHZ-q2BMzjM62NmsU0885mHvLs';

export default class Direction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: null,
      intermediatePoints: {},
    };

    const {resultTypes} = this.props;
    const interimDestinations = this.getInterimDestinations();
    const apiInterimParams = this.convertInterimPointsToString(
      interimDestinations,
    );
    const startLoc = `${resultTypes.pickUpLocation.latitude},${
      resultTypes.pickUpLocation.longitude
    }`;
    const destLoc = `${resultTypes.dropOffLocation.latitude},${
      resultTypes.dropOffLocation.longitude
    }`;
    this.getDirection(startLoc, destLoc, apiInterimParams, interimDestinations);
  }

  getInterimDestinations = () => {
    const {resultTypes} = this.props;
    let interimDestinations = [];

    if (resultTypes.intermediate_1.location) {
      interimDestinations.push(resultTypes.intermediate_1.location);
    }
    if (resultTypes.intermediate_2.location) {
      interimDestinations.push(resultTypes.intermediate_2.location);
    }
    if (resultTypes.intermediate_3.location) {
      interimDestinations.push(resultTypes.intermediate_3.location);
    }

    return interimDestinations;
  };

  convertInterimPointsToString = interimDestinations => {
    let interimStr = '';
    if (interimDestinations.length !== 0) {
      for (let i = 0; i < interimDestinations.length; i++) {
        let concatDest = '';
        if (i !== interimDestinations.length - 1) {
          concatDest = `${interimDestinations[i].latitude},${
            interimDestinations[i].longitude
          }|`;
        } else {
          concatDest = `${interimDestinations[i].latitude},${
            interimDestinations[i].longitude
          }`;
        }
        interimStr += concatDest;
      }
    }

    return interimStr;
  };

  async getDirection(startLoc, destLoc, apiInterimParams, interimDestinations) {
    try {
      const {getDirectionInfo} = this.props;
      let resp;
      if (apiInterimParams !== '') {
        resp = await fetch(
          `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destLoc}&waypoints=${apiInterimParams}&key=${GOOGLE_MAPS_APIKEY}`,
        );
      } else {
        resp = await fetch(
          `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destLoc}&key=${GOOGLE_MAPS_APIKEY}`,
        );
      }
      const respJson = await resp.json();
      const response = respJson.routes[0];
      const distanceTime = response.legs[0];
      const travelDistance = distanceTime.distance.text;
      const travelTime = distanceTime.duration.text;
      const points = Polyline.decode(
        respJson.routes[0].overview_polyline.points,
      );

      const coordinates = points.map(point => {
        return {
          latitude: point[0],
          longitude: point[1],
        };
      });

      const actionPayload = {
        distance: travelDistance,
        time: travelTime,
        coords: coordinates,
      };

      this.setState({
        coords: coordinates,
        intermediatePoints: interimDestinations,
      });
      getDirectionInfo(actionPayload);
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  render() {
    const {resultTypes, navigation} = this.props;
    const {coords, intermediatePoints} = this.state;
    
    return (
      <View>
        <Marker
          coordinate={resultTypes.pickUpLocation}
          title="Origin Location"
          pinColor="green"
        />
        {coords && (
          <Route strokeWidth={3} strokeColor="blue" coordinates={coords} />
        )}
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
          coordinate={resultTypes.dropOffLocation}
          title="Destination Location"
        />
        {coords && (
          <ShowMarksOnRoad navigation={navigation} routeCoords={coords} />
        )}
      </View>
    );
  }
}
