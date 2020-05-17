import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthorizationStack from '../../auth/authorization/AuthorizationNavigator/index';
import RegistrationForm from '../../auth/registration/index';
// import ProfileScreen from '../ProfileScreen/ProfileScreen';
import ProfileContainer from '../container/index'
import MarksCatalogScreen from '../../marksCatalog/index';
import PersonalDataScreen from '../../personalData/index';
import HelpScreen from '../../help/index';

const navOptionHandler = () => ({
  headerShown: false,
});

const StackProfile = createStackNavigator();

export default function ProfileStack() {
  return (
    <StackProfile.Navigator initialRouteName="Profile">
      <StackProfile.Screen
        name="Profile"
        component={ProfileContainer}
        options={navOptionHandler}
      />
      <StackProfile.Screen
        name="Authorization"
        component={AuthorizationStack}
        options={navOptionHandler}
      />
      <StackProfile.Screen
        name="Registration"
        component={RegistrationForm}
        options={navOptionHandler}
      />
      <StackProfile.Screen
        name="MarksCatalog"
        component={MarksCatalogScreen}
        options={navOptionHandler}
      />
      <StackProfile.Screen
        name="PersonalData"
        component={PersonalDataScreen}
        options={navOptionHandler}
      />
      <StackProfile.Screen
        name="Help"
        component={HelpScreen}
        options={navOptionHandler}
      />
    </StackProfile.Navigator>
  );
}
