import * as React from 'react';
import AuthorizedScreen from '../ProfileScreen/AuthorizedScreen';
import UnauthorizedScreen from '../ProfileScreen/UnauthorizedScreen';

const authorized = true;

export default function ProfileScreen({navigation}) {
  if (authorized == true) {
    return <AuthorizedScreen navigation={navigation} />;
  } else return <UnauthorizedScreen navigation={navigation} />;
}
