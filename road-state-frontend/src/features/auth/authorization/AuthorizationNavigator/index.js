import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthorizationForm from '../AuthorizationForm/AuthorizationForm';
import RegistrationForm from '../../registration/index';
import ChangePasswordScreen from '../../../changePassword/index';

const navOptionHandler = () => ({
  headerShown: false,
});

const StackAuthorization = createStackNavigator();

export default function AuthorizationStack() {
  return (
    <StackAuthorization.Navigator initialRouteName="Authorization">
      <StackAuthorization.Screen
        name="Authorization"
        component={AuthorizationForm}
        options={navOptionHandler}
      />
      <StackAuthorization.Screen
        name="Registration"
        component={RegistrationForm}
        options={navOptionHandler}
      />
      <StackAuthorization.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={navOptionHandler}
      />
    </StackAuthorization.Navigator>
  );
}
