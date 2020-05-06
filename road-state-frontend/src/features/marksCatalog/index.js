import * as React from 'react';
import {Text, View, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import CustomHeader from '../header/index';
import MarkCard from './components/MarkCard';

export default function MarksCatalogScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Marks Catalog" navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <MarkCard />
          <MarkCard />
          <MarkCard />
          <MarkCard />
          <MarkCard />
          <MarkCard />
          <MarkCard />
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
