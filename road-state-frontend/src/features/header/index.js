import * as React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {IMAGE} from '../../common/constants/image';

export default function CustomHeader({
  title,
  isHome,
  navigation,
  chooseLocation,
  getCreateLocation,
}) {
  const handelBackNavigation = () => {
    if (chooseLocation === true) {
      getCreateLocation(false);
      navigation.navigate('CreateMark');
    } else {
      navigation.goBack();
    }
  };
  
  return (
    <View style={styles.container} elevation={15}>
      <View style={styles.leftView}>
        {isHome && chooseLocation !== true ? (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={{width: 23, height: 23, marginLeft: 17}}
              source={IMAGE.ICON_OPEN_MENU}
              resizeMode="contain"
              tintColor="#fff"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => handelBackNavigation()}>
            <Image
              style={{width: 30, height: 18.5, marginLeft: 12}}
              source={IMAGE.ICON_BACK}
              resizeMode="contain"
              tintColor="#fff"
            />
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          flex: 1.5,
          justifyContent: 'center',
        }}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View
        style={{
          flex: 1,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#59b2af',
  },
  leftView: {
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
  },
});
