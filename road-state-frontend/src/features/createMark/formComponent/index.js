import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Root} from 'native-base';
import CustomHeader from '../../header/index';
import Description from '../components/Description';
import ConditionDropdown from '../components/ConditionDropdown';
import Attachment from '../components/Attachment';
import LocationPicker from '../components/LocationPicker';
import Spinner from '../../spinner/formComponent/index';
import {strings} from '../../resources/resources';

export default class CreateMarkScreen extends React.Component {
  render() {
    const {
      navigation,
      resultTypes,
      getCreateLocation,
      selectedLocation,
      hideSpinner,
    } = this.props;

    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader title={strings.newMark.header} navigation={navigation} />
        <ScrollView>
          {/* <Spinner /> */}
          <Root>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Attachment />
              <LocationPicker
                buildRoute={resultTypes.buildRoute}
                navigation={navigation}
                getCreateLocation={getCreateLocation}
                selectedLocation={selectedLocation}
              />
              <ConditionDropdown />
              <Description />
            </View>
          </Root>
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={[styles.buttonContainer, {backgroundColor: '#0080ff'}]}
            onPress={() => hideSpinner(true)}>
            <Text style={styles.btnText}>{strings.newMark.btnCreate}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, {backgroundColor: '#7D7D7D'}]}>
            <Text style={styles.btnText}>{strings.newMark.btnCancel}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    // opacity: 0.75,
  },
  btnText: {
    fontSize: 20,
    color: '#fff',
  },
});
