import React from 'react';
import {View, Image} from 'react-native';
import {Marker} from 'react-native-maps';
import {IMAGE} from '../../../../common/constants/image';

export default class ShowMarksOnRoad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markerOnRoad: {
        longitude: 37.90834229439497,
        latitude: 48.69394284513635,
      },
      markerNotOnRoad: {
        longitude: 37.81017009168864,
        latitude: 48.71778749205081,
      },
      marksArray: [
        {
          location: {
            longitude: 37.90834,
            latitude: 48.69394,
          },
        },
        {
          location: {
            longitude: 37.81017,
            latitude: 48.71778,
          },
        },
      ],
      roadMarks: null,
    };
  }

  componentDidMount() {
    this.isOnRoadFull(this.state.marksArray, this.props.routeCoords);
  }

  isOnRoadFull = (arrayBr, arrayPoints) => {
    const newArray = [];
    for (let i = 0; i < arrayPoints.length - 1; i += 1) {
      for (let j = 0; j < arrayBr.length; j += 1) {
        if (
          this.isOnRoadSection(arrayBr[j].location, [
            arrayPoints[i],
            arrayPoints[i + 1],
          ])
        ) {
          if (newArray.length !== 0) {
            if (!newArray.includes(arrayBr[j])) {
              newArray.push(arrayBr[j]);
            }
          } else {
            newArray.push(arrayBr[j]);
          }
        }
      }
    }
    this.setState({roadMarks: newArray});
  };

  isOnRoadSection = (pointLocation, roadLocations) => {
    const errorSize = 0.00006;
    for (let i = 0; i < roadLocations.length - 1; i += 1) {
      const linearCoeffs = this.calculateLineCoeffs(
        roadLocations[i],
        roadLocations[i + 1],
      );
      const mult =
        pointLocation.longitude * linearCoeffs.slope + linearCoeffs.intercept;
      const subtraction = pointLocation.latitude - errorSize;
      const sum = pointLocation.latitude + errorSize;
      if (mult >= subtraction && mult <= sum) {
        return true;
      }
    }
    return false;
  };

  calculateLineCoeffs = (start, end) => {
    const k =
      (end.latitude - start.latitude) / (end.longitude - start.longitude);
    const b = start.latitude - k * start.longitude;
    const obj = {
      slope: k,
      intercept: b,
    };
    return obj;
  };

  renderMarkers = () => {
    const {roadMarks} = this.state;
    if (roadMarks && roadMarks.length !== 0) {
      return roadMarks.map((marker, i) => (
        <Marker
          key={i}
          coordinate={{
            latitude: marker.location.latitude,
            longitude: marker.location.longitude,
          }}
          onPress={() => this.props.navigation.navigate('CurrentMark')}>
          <Image source={IMAGE.ICON_CUSTOM_MARKER} />
        </Marker>
      ));
    }
  };

  render() {
    return <View>{this.renderMarkers()}</View>;
  }
}
