import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import CustomHeader from '../../header/index';
import LanguageSelector from '../ProfileScreen/components/LanguageSelector';
import {IMAGE} from '../../../common/constants/image';

export default function AuthorizedScreen({navigation}) {
  let [showLanguageSelector, setShowLanguageSelector] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Profile" navigation={navigation} />
      <View style={styles.mainView}>
        <View style={styles.innerView}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                marginTop: 25,
              },
            ]}
            onPress={() => navigation.navigate('PersonalData')}>
            <Image source={IMAGE.ICON_PROFILE} style={styles.bottomIcon} />
            <Text style={styles.bottomText}>Personal data</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('MarksCatalog')}>
            <Image source={IMAGE.ICON_CATALOG} style={styles.bottomIcon} />
            <Text style={styles.bottomText}>Marks catalog</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setShowLanguageSelector(true)}>
            <Image source={IMAGE.ICON_LANGUAGE} style={styles.bottomIcon} />
            <Text style={styles.bottomText}>Application language</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Help')}>
            <Image source={IMAGE.ICON_HELP} style={styles.bottomIcon} />
            <Text style={styles.bottomText}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={IMAGE.ICON_LOGOUT} style={styles.bottomIcon} />
            <Text style={styles.bottomText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      {showLanguageSelector ? (
        <LanguageSelector hideModal={setShowLanguageSelector} />
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerView: {
    justifyContent: 'center',
    height: '80%',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
  },
  bottomText: {
    marginTop: 2,
    marginLeft: 25,
    fontSize: 14,
  },
  bottomIcon: {
    marginLeft: 20,
    height: 25,
    width: 25,
  },
});
