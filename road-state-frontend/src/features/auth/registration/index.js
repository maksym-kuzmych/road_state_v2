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
import CustomHeader from '../../header/index';
import PasswordToggleInput from '../components/PasswordToggleInput';

const _postData = (errorParam, setError) => {
  errorParam ? setError(false) : setError(true);
  // fetch('http://192.168.1.4:90/api/ApplicationUser/Register', {
  //   method: 'POST',
  //   header: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     UserName: 'TestName123',
  //     Email: 'blabla132@gmail.com',
  //     Password: '1234',
  //     FullName: 'asd qwe',
  //   }),
  // }).then(response =>
  //   console.log('POST RESPONSE: ' + JSON.stringify(response)),
  // );


  // .then(res => {
  //   res.json();
  // })
  // .then(data => console.log(data)) // ur data is here
  // .catch(err =>
  //   console.log('api Erorr: ', err),
  // );
};

export default function RegistrationForm({navigation}) {
  const [error, setError] = useState(false);

  let placeholderTextColor = error ? '#d63447' : '#fff';
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Register" navigation={navigation} />
      <LinearGradient colors={['#59b2af', '#267175']} style={styles.gradient}>
        <View style={styles.regform}>
          <TextInput
            style={error ? styles.validationField : styles.textinput}
            placeholder="What is your name?"
            placeholderTextColor={placeholderTextColor}
            underlineColorAndroid={'transparent'}
          />
          {error ? (
            <Text style={styles.validationError}>Field required</Text>
          ) : null}
          <TextInput
            style={error ? styles.validationField : styles.textinput}
            placeholder="Email"
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
            onPress={() => _postData(error, setError)}>
            <Text style={styles.btntext}>Sign Up</Text>
          </TouchableOpacity>
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
});
