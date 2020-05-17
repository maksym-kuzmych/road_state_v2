import * as React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MapStack from '../map/mapNavigator/index';
import ProfileStack from '../profile/ProfileNavigator/index';
import {IMAGE} from '../../common/constants/image';
import {strings} from '../resources/resources';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Map') {
            iconName = focused ? IMAGE.ICON_WORLD : IMAGE.ICON_WORLD_BLACK;
          } else if (route.name === 'Profile') {
            iconName = focused ? IMAGE.ICON_PROFILE : IMAGE.ICON_PROFILE_BLACK;
          }

          return (
            <Image
              source={iconName}
              style={{width: 20, height: 20}}
              resizeMode="contain"
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#267175',
        inactiveTintColor: 'black',
        labelStyle: {
          fontSize: 15,
          margin: 0,
          padding: 0,
        },
      }}>
      <Tab.Screen
        name="Map"
        component={MapStack}
        options={{title: strings.bottomTabNavigation.map}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{title: strings.bottomTabNavigation.profile}}
      />
    </Tab.Navigator>
  );
}
