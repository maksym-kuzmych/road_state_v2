import * as React from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';
import CustomHeader from '../header/index';

export default function HelpScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Help" navigation={navigation} />
      <View style={{flex: 1, alignItems: 'center'}}>
        <ScrollView>
          <View style={{width: '98%'}}>
            <Text
              style={{
                padding: 5,
                alignSelf: 'stretch',
                fontSize: 16,
                textAlign: 'justify',
              }}>
              This application is designed to facilitate the movement of drivers
              on given routes. The application will allow drivers to view
              problem areas along the route, as well as create their own marks
              of problem areas with descriptions and photos.
            </Text>
            <Text
              style={{
                padding: 7,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Problem areas view and creating new marks:
            </Text>
            <Text
              style={{
                padding: 7,
                fontSize: 16,
              }}>
              To view problem sections of the route, follow the next steps:
            </Text>
            <Text
              style={{
                padding: 5,
                fontSize: 16,
              }}>
              1. Click on the button ...
            </Text>
            <Text
              style={{
                padding: 5,
                fontSize: 16,
              }}>
              2. Set up the place of departure and place of arrival (NOTE: you
              can also set intermediate locations for the route. To do this,
              click ...)
            </Text>
            <Text
              style={{
                padding: 5,
                fontSize: 16,
              }}>
              3. After setting the route values, click the button ... (Build
              route)
            </Text>
            <Text
              style={{
                padding: 5,
                fontSize: 16,
              }}>
              4. After building a route, the travel distance and travel time
              parameters will be available for viewing in the construction
              menu.Also below them will be a list of locations of problem areas
              of the route.
            </Text>
            <Text
              style={{
                padding: 5,
                fontSize: 16,
              }}>
              5. After that, you will see the constructed route on the map. The
              departure point will be marked with a green marker, the arrival
              point will be red, and the intermediate points will be blue.
            </Text>
            <Text
              style={{
                padding: 5,
                fontSize: 16,
              }}>
              6. Problem areas of the route will be marked with special markers
              ... You can click on them to view information about an unfavorable
              section of the road.
            </Text>
            <Text
              style={{
                padding: 5,
                fontSize: 16,
              }}>
              7. Next, a window will open in which a description will be
              contained; problem status (bad, very bad, worst); photos showing
              the obviousness of the problem, as well as comments by registered
              users who did not remain indifferent to the problem.
            </Text>
            <Text
              style={{
                padding: 5,
                fontSize: 16,
              }}>
              8. You can evaluate the relevance of the problem by clicking ...
              or ...
            </Text>
            <Text
              style={{
                padding: 7,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Creating of own marks with problem areas:
            </Text>
            <Text
              style={{
                padding: 5,
                fontSize: 16,
              }}>
              1. Click on the button ...
            </Text>
            <Text
              style={{
                padding: 5,
                fontSize: 16,
              }}>
              2. Fill in required fields. These fields are: description, degree
              of problem, photos.
            </Text>
            <Text
              style={{
                padding: 5,
                fontSize: 16,
              }}>
              3. Click on the button ...
            </Text>
            <Text
              style={{
                padding: 5,
                fontSize: 16,
              }}>
              4. Your mark will be published and available for viewing when
              building routes after the moderator checks the contents of the new
              mark. If the content does not match the theme of the application,
              the mark will be rejected.
            </Text>
            <Text
              style={{
                padding: 7,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Registration in the system and additional features for users:
            </Text>
            <Text
              style={{
                padding: 5,
                fontSize: 16,
              }}>
              1. To register in the system, go to the "Profile" tab.
            </Text>
            <Text
              style={{
                padding: 5,
                fontSize: 16,
              }}>
              2. Click the "Register" or "Login" button if you already have an
              account.
            </Text>
            <Text
              style={{
                padding: 5,
                fontSize: 16,
              }}>
              3. Fill out the registration form and click the "Register" button.
            </Text>
            <Text
              style={{
                padding: 5,
                fontSize: 16,
              }}>
              4. After registration, log in to the application.
            </Text>
            <Text
              style={{
                padding: 5,
                fontSize: 16,
              }}>
              After you log in, you have an ability to use the next features:
            </Text>
            <Text
              style={{
                padding: 5,
                fontSize: 16,
              }}>
              1. Leaving comments on existing marks.
            </Text>
            <Text
              style={{
                padding: 5,
                fontSize: 16,
              }}>
              2. View your own catalog of marks.
            </Text>
            <Text
              style={{
                padding: 5,
                fontSize: 16,
              }}>
              3. Edit or remove marks that you created.
            </Text>
            <Text
              style={{
                padding: 7,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Changing application language:
            </Text>
            <Text
              style={{
                padding: 5,
                fontSize: 16,
              }}>
              1. Click the button ...
            </Text>
            <Text
              style={{
                padding: 5,
                fontSize: 16,
              }}>
              2. Choose the appropriate language.
            </Text>
            <Text
              style={{
                padding: 5,
                fontSize: 16,
              }}>
              3. Close language menu.
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
