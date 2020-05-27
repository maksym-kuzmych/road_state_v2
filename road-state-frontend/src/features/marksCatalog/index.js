import * as React from 'react';
import {Text, View, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import CustomHeader from '../header/index';
import MarkCard from './components/MarkCard';
import {strings} from '../resources/resources';

export default function MarksCatalogScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader
        title={strings.marksCatalog.header}
        navigation={navigation}
      />
      <ScrollView>
        <View style={styles.container}>
          {/* <MarkCard navigation={navigation} /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
