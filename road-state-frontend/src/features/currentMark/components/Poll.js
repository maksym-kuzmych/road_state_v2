import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {strings} from '../../resources/resources';

export default function Poll({setRelevance}) {
  const [poll, setPoll] = useState(false);
  return poll === false ? (
    <View style={styles.generalContainer}>
      <Text style={styles.headerText}>{strings.currentMark.lblPoll}: </Text>
      <View style={styles.pollContainer}>
        <Text style={styles.label}>{strings.currentMark.pollBody}</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={[styles.btnContainer, {backgroundColor: 'green'}]}
            onPress={() => {
              setPoll(true);
              setRelevance(1);
            }}>
            <Text style={styles.btnText}>{strings.currentMark.btnYes}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnContainer, {backgroundColor: 'red'}]}
            onPress={() => {
              setPoll(true);
              setRelevance(-1);
            }}>
            <Text style={styles.btnText}>{strings.currentMark.btnNo}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ) : (
    <View style={styles.generalContainer}>
      <Text style={styles.headerText}>{strings.currentMark.lblPoll}: </Text>
      <View style={styles.pollContainer}>
        <Text
          style={{
            fontSize: 15,
            marginLeft: 10,
            paddingBottom: 5,
            paddingTop: 5,
          }}>
          Спасибо за ваш отзыв. Он был учтён в актуальности данной отметки.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  generalContainer: {width: '95%', marginTop: 10},
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  pollContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#7D7D7D',
    borderWidth: 1,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    marginTop: 5,
  },
  btnContainer: {
    height: 35,
    width: 65,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    marginTop: 5,
    marginBottom: 10,
  },
  btnText: {
    fontSize: 15,
    color: '#fff',
  },
});
