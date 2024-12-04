import React from 'react'
import { View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainBottomTab from '../../bottomTab/mainTab/MainBottomTab';
import {useValues} from '@App';
import MainThemeDrawer from './drawer/mainTheme';


export default function mainDrawer() {
  const Drawer = createDrawerNavigator();
  const {setIsRTL, isRTL, isDark, setIsDark} = useValues();
  return (
   
     <Drawer.Navigator  screenOptions={{
      drawerPosition: isRTL ? 'right' : 'left',
      swipeEnabled: true,
    }}
    drawerContent={props => <MainThemeDrawer/>}>
        <Drawer.Screen   options={{headerShown: false}} name="MainBottomTab" component={MainBottomTab} />
      </Drawer.Navigator>
  
  )
}