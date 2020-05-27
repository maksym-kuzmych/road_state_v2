import * as React from 'react';
import AuthorizedScreen from '../ProfileScreen/AuthorizedScreen';
import UnauthorizedScreen from '../ProfileScreen/UnauthorizedScreen';

//const authorized = false;

export default class ProfileScreen extends React.Component {
  render() {
    const {navigation, locale, getLocale, isLogedIn, loginUser} = this.props;
    if (isLogedIn == true) {
      return (
        <AuthorizedScreen
          navigation={navigation}
          getLocale={getLocale}
          locale={locale}
          loginUser={loginUser}
        />
      );
    } else
      return (
        <UnauthorizedScreen
          navigation={navigation}
          getLocale={getLocale}
          locale={locale}
        />
      );
  }
}
// export default function ProfileScreen({navigation}) {
//   if (authorized == true) {
//     return <AuthorizedScreen navigation={navigation} />;
//   } else return <UnauthorizedScreen navigation={navigation} />;
// }
