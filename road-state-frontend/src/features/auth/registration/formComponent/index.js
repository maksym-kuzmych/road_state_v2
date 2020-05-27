import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from '../../../header/index';
import PasswordToggleInput from '../../components/PasswordToggleInput';
import {strings} from '../../../resources/resources';

const _postData = (errorParam, setError) => {
  fetch('http://192.168.1.4/api/values')
    .then(response => {
      console.log(response);
      response.json();
    })
    .then(json => {
      console.log(json);
    })
    .catch(error => {
      console.error(error);
    });
  // errorParam ? setError(false) : setError(true);
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

// export default function RegistrationForm({navigation}) {
//   const [error, setError] = useState(false);

//   let placeholderTextColor = error ? '#d63447' : '#fff';
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <CustomHeader title={strings.registration.header} navigation={navigation} />
//       <LinearGradient colors={['#59b2af', '#267175']} style={styles.gradient}>
//         <View style={styles.regform}>
//           <TextInput
//             style={error ? styles.validationField : styles.textinput}
//             placeholder={strings.registration.userNamePlaceholder}
//             placeholderTextColor={placeholderTextColor}
//             underlineColorAndroid={'transparent'}
//           />
//           {error ? (
//             <Text style={styles.validationError}>Field required</Text>
//           ) : null}
//           <TextInput
//             style={error ? styles.validationField : styles.textinput}
//             placeholder={strings.registration.emailPlaceholder}
//             placeholderTextColor={placeholderTextColor}
//             underlineColorAndroid={'transparent'}
//           />
//           {error ? (
//             <Text style={styles.validationError}>Field required</Text>
//           ) : null}
//           <PasswordToggleInput
//             textStyle={error ? styles.validationField : styles.textinput}
//             placeholderColor={placeholderTextColor}
//           />
//           {error ? (
//             <Text style={styles.validationError}>Field required</Text>
//           ) : null}
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => _postData(error, setError)}>
//             <Text style={styles.btntext}>{strings.registration.btnRegister}</Text>
//           </TouchableOpacity>
//         </View>
//       </LinearGradient>
//     </SafeAreaView>
//   );
// }

export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  handleRegistration = (isRegistered, isLoading) => {
    const {registerUser, navigation} = this.props;
    const payload = {
      isRegistered: isRegistered,
      isLoading: isLoading,
    };
    registerUser(payload);
    setTimeout(
      () =>
        Alert.alert(
          'Поздравляем!',
          'Вы успешно зарегистрированы в приложении! Для продолжения, войдите в профиль.',
          [{text: 'OK', onPress: () => navigation.navigate('Authorization')}],
        ),
      2000,
    );
  };

  render() {
    const {navigation} = this.props;
    const {error} = this.state;
    let placeholderTextColor = error ? '#d63447' : '#fff';
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader
          title={strings.registration.header}
          navigation={navigation}
        />
        <LinearGradient colors={['#59b2af', '#267175']} style={styles.gradient}>
          <View style={styles.regform}>
            <TextInput
              style={error ? styles.validationField : styles.textinput}
              placeholder={strings.registration.userNamePlaceholder}
              placeholderTextColor={placeholderTextColor}
              underlineColorAndroid={'transparent'}
            />
            {error ? (
              <Text style={styles.validationError}>Field required</Text>
            ) : null}
            <TextInput
              style={error ? styles.validationField : styles.textinput}
              placeholder={strings.registration.emailPlaceholder}
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
              onPress={() => this.handleRegistration(true, true)}>
              <Text style={styles.btntext}>
                {strings.registration.btnRegister}
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </SafeAreaView>
    );
  }
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
