import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from '../components/CustomDrawerContent';
import TabNavigator from '../../tabNavigation/index';
import SpinnerContainer from '../../spinner/container/index';

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends React.Component {
  constructor(props) {
    super(props);
    const {getLocale} = this.props;
    getLocale('ru');
    console.disableYellowBox = true;
  }

  render() {
    const {
      getInputData,
      toggleSearchResultModal,
      getAddressPredictions,
      resultTypes,
      predictions,
      getSelectedAddress,
      selectedAddress,
      addIntermediatePoint,
      removeIntermediatePoint,
      routePoints,
      buildRoute,
      directionInformation,
    } = this.props;

    return (
      <NavigationContainer>
        <SpinnerContainer />
        <Drawer.Navigator
          initialRouteName="Map"
          drawerContent={props => (
            <CustomDrawerContent
              {...props}
              getInputData={getInputData}
              toggleSearchResultModal={toggleSearchResultModal}
              getAddressPredictions={getAddressPredictions}
              resultTypes={resultTypes}
              predictions={predictions}
              getSelectedAddress={getSelectedAddress}
              selectedAddress={selectedAddress}
              addIntermediatePoint={addIntermediatePoint}
              removeIntermediatePoint={removeIntermediatePoint}
              routePoints={routePoints}
              buildRoute={buildRoute}
              directionInformation={directionInformation}
            />
          )}>
          <Drawer.Screen name="Map" component={TabNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
