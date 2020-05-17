import React, {useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import SearchBox from '../components/SearchBox/SearchBox';
import SearchResults from '../components/SearchResults/SearchResults';
import TimeAndDistance from '../components/TimeAndDistance/TimeAndDistance';
import MarksList from '../components/MarksList/MarksList';
import {strings} from '../../resources/resources';

export default class CustomDrawerContent extends React.Component {
  render() {
    const {
      getInputData,
      toggleSearchResultModal,
      getAddressPredictions,
      selectedAddress,
      addIntermediatePoint,
      removeIntermediatePoint,
      resultTypes,
      routePoints,
      buildRoute,
      navigation,
      predictions,
      getSelectedAddress,
      directionInformation,
    } = this.props;

    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <SearchBox
            getInputData={getInputData}
            toggleSearchResultModal={toggleSearchResultModal}
            getAddressPredictions={getAddressPredictions}
            selectedAddress={selectedAddress}
            addIntermediatePoint={addIntermediatePoint}
            removeIntermediatePoint={removeIntermediatePoint}
            resultTypes={resultTypes}
            routePoints={routePoints}
            buildRoute={buildRoute}
            navigation={navigation}
          />
        </View>
        {(resultTypes.pickUp ||
          resultTypes.intermediate_1.selected === true ||
          resultTypes.intermediate_2.selected === true ||
          resultTypes.intermediate_3.selected === true ||
          resultTypes.dropOff) && (
          <SearchResults
            predictions={predictions}
            getSelectedAddress={getSelectedAddress}
          />
        )}
        <TimeAndDistance directionInformation={directionInformation} />
        <MarksList directionInformation={directionInformation} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{paddingVertical: 10, marginLeft: 15}}
            onPress={() => navigation.navigate('Map')}>
            <Text>{strings.drawer.backToMap}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#59b2af',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    backgroundColor: '#fff',
  },
});
