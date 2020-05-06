import * as React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {IMAGE} from '../../../common/constants/image';

export default function CreateButton({navigation}) {
  return (
    <View style={styles.generalContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('CreateMark')}>
        <View style={styles.container}>
          <Image
            style={styles.icon}
            source={IMAGE.ICON_PLUS}
            resizeMode="contain"
            tintColor="#fff"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  generalContainer: {position: 'absolute', right: 30, bottom: 25},
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    width: 55,
    backgroundColor: '#59b2af',
    borderRadius: 30,
  },
  icon: {
    width: 26,
    height: 26,
  },
});
