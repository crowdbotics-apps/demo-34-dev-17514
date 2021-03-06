import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen016410Navigator from '../features/BlankScreen016410/navigator';
import BlankScreen116409Navigator from '../features/BlankScreen116409/navigator';
import CopyOfBlankScreen116408Navigator from '../features/CopyOfBlankScreen116408/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen016410: { screen: BlankScreen016410Navigator },
BlankScreen116409: { screen: BlankScreen116409Navigator },
CopyOfBlankScreen116408: { screen: CopyOfBlankScreen116408Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
