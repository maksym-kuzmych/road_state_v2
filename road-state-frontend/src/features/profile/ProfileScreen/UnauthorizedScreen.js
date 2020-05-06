import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import CustomHeader from '../../header/index';
import LanguageSelector from '../ProfileScreen/components/LanguageSelector';
import {IMAGE} from '../../../common/constants/image';

export default function UnauthorizedScreen({navigation}) {
  let [showLanguageSelector, setShowLanguageSelector] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Profile" navigation={navigation} />
      <View style={styles.topView}>
        <Image
          source={IMAGE.ICON_PROFILE_MAIN}
          style={{
            height: 60,
            width: 60,
          }}
        />
        <Text style={styles.mainText}>Login to profile</Text>
        <Text style={styles.description}>
          Login or register to browse the catalog of your marks and leave
          comments on existing marks
        </Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[
              styles.commonButton,
              {
                backgroundColor: '#fff',
                borderRadius: 2.5,
                borderWidth: 1.2,
                borderColor: '#267175',
              },
            ]}
            onPress={() => navigation.navigate('Registration')}>
            <Text style={[styles.buttonText, {color: '#267175'}]}>
              Registration
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.commonButton,
              {marginLeft: 10, borderRadius: 2.5, backgroundColor: '#267175'},
            ]}
            onPress={() => navigation.navigate('Authorization')}>
            <Text style={[styles.buttonText, {color: '#fff'}]}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomView} elevation={5}>
        <TouchableOpacity
          style={[
            styles.bottomButton,
            {
              marginTop: 25,
              marginBottom: -3,
            },
          ]}
          onPress={() => setShowLanguageSelector(true)}>
          <Image source={IMAGE.ICON_LANGUAGE} style={styles.bottomIcon} />
          <Text style={styles.bottomText}>Application language</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.bottomButton,
            {
              marginTop: 10,
            },
          ]}
          onPress={() => navigation.navigate('Help')}>
          <Image source={IMAGE.ICON_HELP} style={styles.bottomIcon} />
          <Text style={styles.bottomText}>Help</Text>
        </TouchableOpacity>
      </View>
      {showLanguageSelector ? (
        <LanguageSelector hideModal={setShowLanguageSelector} />
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topView: {
    flex: 2.7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cae8d5',
  },
  mainText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 20,
    fontSize: 15,
    color: '#939999',
    width: '90%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  commonButton: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    height: '40%',
    width: '40%',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomView: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  bottomIcon: {
    marginLeft: 20,
    height: 25,
    width: 25,
  },
  bottomButton: {
    flex: 1,
    flexDirection: 'row',
  },
  bottomText: {
    marginTop: 2,
    marginLeft: 25,
    fontSize: 14,
  },
});
