import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MapContainer from '../container/index';
import CurrentMarkScreen from '../../currentMark/index';
import CreateMarkContainer from '../../createMark/container/index';

const navOptionHandler = () => ({
  headerShown: false,
});

const StackMap = createStackNavigator();

export default function MapStack() {
  return (
    <StackMap.Navigator initialRouteName="Map">
      <StackMap.Screen
        name="Map"
        component={MapContainer}
        options={navOptionHandler}
      />
      <StackMap.Screen
        name="CurrentMark"
        component={CurrentMarkScreen}
        options={navOptionHandler}
      />
      <StackMap.Screen
        name="CreateMark"
        component={CreateMarkContainer}
        // component={CurrentMarkScreen}
        options={navOptionHandler}
      />
    </StackMap.Navigator>
  );
}
