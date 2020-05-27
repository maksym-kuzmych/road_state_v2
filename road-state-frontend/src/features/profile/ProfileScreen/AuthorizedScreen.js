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
import {strings} from '../../resources/resources';

export default function AuthorizedScreen({
  navigation,
  locale,
  getLocale,
  loginUser,
}) {
  let [showLanguageSelector, setShowLanguageSelector] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader
        title={strings.authorizedScreen.header}
        navigation={navigation}
      />
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
            <Text style={styles.bottomText}>
              {strings.authorizedScreen.personalData}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('MarksCatalog')}>
            <Image source={IMAGE.ICON_CATALOG} style={styles.bottomIcon} />
            <Text style={styles.bottomText}>
              {strings.authorizedScreen.marksCatalog}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setShowLanguageSelector(true)}>
            <Image source={IMAGE.ICON_LANGUAGE} style={styles.bottomIcon} />
            <Text style={styles.bottomText}>
              {strings.authorizedScreen.applicationLanguage}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Help')}>
            <Image source={IMAGE.ICON_HELP} style={styles.bottomIcon} />
            <Text style={styles.bottomText}>
              {strings.authorizedScreen.help}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => loginUser(false)}>
            <Image source={IMAGE.ICON_LOGOUT} style={styles.bottomIcon} />
            <Text style={styles.bottomText}>
              {strings.authorizedScreen.logout}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {showLanguageSelector ? (
        <LanguageSelector
          hideModal={setShowLanguageSelector}
          getLocale={getLocale}
          locale={locale}
          navigation={navigation}
        />
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
