import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import CustomHeader from '../header/index';
import {strings} from '../resources/resources';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
AndroidKeyboardAdjust.setAdjustPan();

export default function HelpScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title={strings.help.header} navigation={navigation} />
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.textContainer}>
            <Text style={styles.generalDescription}>
              {strings.help.description}
            </Text>
            <Text style={styles.featureHeading}>
              {strings.help.firstHeading}:
            </Text>
            <Text style={styles.regularText}>
              {strings.help.firstHeadingDescription}:
            </Text>
            <Text style={styles.regularText}>
              1. {strings.help.viewMarkFirstStep}{' '}
            </Text>
            <Text style={styles.regularText}>
              2. {strings.help.viewMarkSecondStep}
            </Text>
            <Text style={styles.regularText}>
              3. {strings.help.viewMarkThirdStep}
            </Text>
            <Text style={styles.regularText}>
              4. {strings.help.viewMarkFourthStep}
            </Text>
            <Text style={styles.regularText}>
              5. {strings.help.viewMarkFifthStep}
            </Text>
            <Text style={styles.regularText}>
              6. {strings.help.viewMarkSixthStepFirstPart}
              ... {strings.help.viewMarkSixthStepSecondPart}
            </Text>
            <Text style={styles.regularText}>
              7. {strings.help.viewMarkSeventhStep}
            </Text>
            <Text style={styles.regularText}>
              8. {strings.help.viewMarkEightStep}
            </Text>
            <Text style={styles.featureHeading}>
              {strings.help.secondHeading}:
            </Text>
            <Text style={styles.regularText}>
              1. {strings.help.createMarkFirstStep}
            </Text>
            <Text style={styles.regularText}>
              2. {strings.help.createMarkSecondStep}
            </Text>
            <Text style={styles.regularText}>
              3. {strings.help.createMarkThirdStep}
            </Text>
            <Text style={styles.regularText}>
              4. {strings.help.createMarkFourthStep}
            </Text>
            <Text style={styles.featureHeading}>
              {strings.help.thirdHeading}:
            </Text>
            <Text style={styles.regularText}>
              1. {strings.help.registrationFirstStep}
            </Text>
            <Text style={styles.regularText}>
              2. {strings.help.registrationSecondStep}
            </Text>
            <Text style={styles.regularText}>
              3. {strings.help.registrationThirdStep}
            </Text>
            <Text style={styles.regularText}>
              4. {strings.help.registrationFourthStep}
            </Text>
            <Text style={styles.regularText}>
              {strings.help.registrationFeatureDescriptionHeading}:
            </Text>
            <Text style={styles.regularText}>1. {strings.help.feature1}</Text>
            <Text style={styles.regularText}>2. {strings.help.feature2}</Text>
            <Text style={styles.regularText}>3. {strings.help.feature3}</Text>
            <Text style={styles.featureHeading}>
              {strings.help.languageHeading}:
            </Text>
            <Text style={styles.regularText}>1. {strings.help.langStep1}</Text>
            <Text style={styles.regularText}>2. {strings.help.langStep2}</Text>
            <Text style={styles.regularText}>3. {strings.help.langStep3}</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  textContainer: {width: '98%'},
  generalDescription: {
    padding: 5,
    alignSelf: 'stretch',
    fontSize: 16,
    textAlign: 'justify',
  },
  regularText: {
    padding: 5,
    fontSize: 16,
  },
  featureHeading: {
    padding: 7,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
