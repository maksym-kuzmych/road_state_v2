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

export default class CustomDrawerContent extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <SearchBox
            getInputData={this.props.getInputData}
            toggleSearchResultModal={this.props.toggleSearchResultModal}
            getAddressPredictions={this.props.getAddressPredictions}
            selectedAddress={this.props.selectedAddress}
            addIntermediatePoint={this.props.addIntermediatePoint}
            removeIntermediatePoint={this.props.removeIntermediatePoint}
            resultTypes={this.props.resultTypes}
            routePoints={this.props.routePoints}
            buildRoute={this.props.buildRoute}
          />
        </View>
        {(this.props.resultTypes.pickUp ||
          this.props.resultTypes.intermediate_1.selected === true ||
          this.props.resultTypes.intermediate_2.selected === true ||
          this.props.resultTypes.intermediate_3.selected === true ||
          this.props.resultTypes.dropOff) && (
          <SearchResults
            predictions={this.props.predictions}
            getSelectedAddress={this.props.getSelectedAddress}
          />
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Map')}>
          <Text>Back to Map</Text>
        </TouchableOpacity>
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
  button: {
    position: 'absolute',
    bottom: 10,
    left: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
