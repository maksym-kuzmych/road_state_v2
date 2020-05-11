import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from '../components/CustomDrawerContent';
import TabNavigator from '../../tabNavigation/index';

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Map"
          drawerContent={props => (
            <CustomDrawerContent
              {...props}
              getInputData={this.props.getInputData}
              toggleSearchResultModal={this.props.toggleSearchResultModal}
              getAddressPredictions={this.props.getAddressPredictions}
              resultTypes={this.props.resultTypes}
              predictions={this.props.predictions}
              getSelectedAddress={this.props.getSelectedAddress}
              selectedAddress={this.props.selectedAddress}
              addIntermediatePoint={this.props.addIntermediatePoint}
              removeIntermediatePoint={this.props.removeIntermediatePoint}
              routePoints={this.props.routePoints}
              buildRoute={this.props.buildRoute}
              directionInformation={this.props.directionInformation}
            />
          )}>
          <Drawer.Screen name="Map" component={TabNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

// export default function DrawerNavigator({getInputData}) {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         initialRouteName="Map"
//         drawerContent={props => (
//           <CustomDrawerContent {...props} getInput={getInputData} />
//         )}>
//         <Drawer.Screen name="Map" component={TabNavigator} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
