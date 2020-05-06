import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CustomHeader from '../header/index';

export default function ChangePasswordScreen({navigation}) {
  const [error, setError] = useState(false);

  let placeholderTextColor = error ? '#d63447' : '#000';

  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Change Password" navigation={navigation} />
      <View style={styles.generalContainer}>
        <View style={styles.container}>
          <Text style={styles.textInfo}>
            Enter the email you use to sign in. We will send an instruction
            letter with a confirmation code.
          </Text>
          <TextInput
            style={error ? styles.validationField : styles.textinput}
            placeholder="Email or phone number"
            placeholderTextColor={placeholderTextColor}
            underlineColorAndroid={'transparent'}
          />
          {error ? (
            <Text style={styles.validationError}>Field required</Text>
          ) : null}
          <TouchableOpacity
            style={styles.button}
            onPress={() => (error ? setError(false) : setError(true))}>
            <Text style={styles.btntext}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  generalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    width: '95%',
  },
  textInfo: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 15,
  },
  textinput: {
    height: 40,
    marginTop: 15,
    marginBottom: 25,
    color: '#000',
    borderBottomColor: '#267175',
    borderBottomWidth: 1.5,
    width: '85%',
    fontSize: 15,
  },
  validationField: {
    marginTop: 15,
    height: 40,
    marginBottom: 10,
    color: '#d63447',
    borderBottomColor: '#d63447',
    borderBottomWidth: 1.5,
    width: '85%',
    fontSize: 15,
  },
  validationError: {
    fontSize: 15,
    marginBottom: 25,
    color: '#d63447',
    alignSelf: 'stretch',
    marginBottom: 7,
    marginLeft: 32,
  },
  button: {
    width: '85%',
    alignItems: 'center',
    padding: 17,
    backgroundColor: '#59b2af',
    marginTop: 20,
    borderRadius: 5,
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
