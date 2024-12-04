import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerScreen from './drawerScreen';
import {useValues} from '../../../../../App';
import MainCustomDrawer from './CustomDrawer';
const Drawer = createDrawerNavigator();

const SidemenuDrawer = () => {
  const {isRTL} = useValues();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: isRTL ? 'right' : 'left',
        swipeEnabled: true,
      }}
      drawerContent={props => <MainCustomDrawer />}
      initialRouteName="DrawerScreen">
      <Drawer.Screen
        name="DrawerScreen"
        component={DrawerScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default SidemenuDrawer;
