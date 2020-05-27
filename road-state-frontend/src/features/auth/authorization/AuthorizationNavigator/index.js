import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//import AuthorizationForm from '../AuthorizationForm/AuthorizationForm';
import LoginContainer from '../container/index';
import RegistrationForm from '../../registration/formComponent/index';
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
        // component={AuthorizationForm}
        component={LoginContainer}
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
