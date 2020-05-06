import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {IMAGE} from '../../../../common/constants/image';

export default function RadioButtonGroup() {
  let [data, setData] = useState(['Русский', 'English']);
  let [checked, setChecked] = useState(0);

  const rbColor = '#423c6d';

  return (
    <View style={styles.container}>
      {data.map((data, Id) => {
        return (
          <View key={Id}>
            {checked === Id ? (
              <TouchableOpacity style={styles.button}>
                <Image
                  style={styles.icon}
                  source={IMAGE.ICON_RADIO_CHECKED}
                  tintColor={rbColor}
                />
                <Text style={styles.text}>{data}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.button}
                onPress={() => setChecked(Id)}>
                <Image
                  style={styles.icon}
                  source={IMAGE.ICON_RADIO_UNCHECKED}
                  tintColor={rbColor}
                />
                <Text style={styles.text}>{data}</Text>
              </TouchableOpacity>
            )}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: 'grey',
    justifyContent: 'center',
    height: '50%',
    paddingTop: 23,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 17,
    paddingBottom: 15,
  },
  icon: {
    height: 25,
    width: 25,
  },
  text: {
    marginLeft: 15,
    fontSize: 15,
  },
});
