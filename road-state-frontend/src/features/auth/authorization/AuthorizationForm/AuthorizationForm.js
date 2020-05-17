import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from '../../../header/index';
import PasswordToggleInput from '../../components/PasswordToggleInput';
import {strings} from '../../../resources/resources';

export default function AuthorizationForm({navigation}) {
  const [error, setError] = useState(false);

  let placeholderTextColor = error ? '#d63447' : '#fff';
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader
        title={strings.authorization.header}
        navigation={navigation}
      />
      <LinearGradient colors={['#59b2af', '#267175']} style={styles.gradient}>
        <View style={styles.regform}>
          <TextInput
            style={error ? styles.validationField : styles.textinput}
            placeholder={strings.authorization.userNamePlaceholder}
            placeholderTextColor={placeholderTextColor}
            underlineColorAndroid={'transparent'}
          />
          {error ? (
            <Text style={styles.validationError}>Field required</Text>
          ) : null}
          <PasswordToggleInput
            textStyle={error ? styles.validationField : styles.textinput}
            placeholderColor={placeholderTextColor}
          />
          {error ? (
            <Text style={styles.validationError}>Field required</Text>
          ) : null}
          <TouchableOpacity
            style={styles.button}
            onPress={() => (error ? setError(false) : setError(true))}>
            <Text style={styles.btntext}>{strings.authorization.btnLogin}</Text>
          </TouchableOpacity>
          <View style={styles.bottomView}>
            <TouchableOpacity
              style={{marginBottom: 10}}
              onPress={() => navigation.navigate('ChangePassword')}>
              <Text style={styles.bottomText}>
                {strings.authorization.textForgotPassword}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginBottom: 10}}
              onPress={() => navigation.navigate('Registration')}>
              <Text style={styles.bottomText}>
                <Text style={{color: '#dee3e2'}}>
                  {strings.authorization.textDontHaveAnAccount}
                </Text>{' '}
                <Text style={{fontWeight: 'bold'}}>
                  {strings.authorization.textCreateAccount}
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: 'center',
  },
  regform: {
    marginTop: '19%',
    alignSelf: 'stretch',
    paddingLeft: 60,
    paddingRight: 60,
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 25,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1.5,
    fontSize: 14,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 17,
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 5,
  },
  btntext: {
    color: '#267175',
    fontWeight: 'bold',
    fontSize: 16,
  },
  validationField: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 10,
    color: '#d63447',
    borderBottomColor: '#d63447',
    borderBottomWidth: 1.5,
    fontSize: 14,
  },
  validationError: {
    fontSize: 14,
    marginBottom: 25,
    color: '#d63447',
    alignSelf: 'stretch',
    marginBottom: 7,
    marginLeft: 5,
  },
  bottomView: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 14,
    color: '#fff',
  },
});
