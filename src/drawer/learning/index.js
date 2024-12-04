import React from 'react';
import LearningTabBar from '../../bottomTab/learningTab';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Account from '../../screens/learningApp/account';
import {useValues} from '@App';
import LockedCourses from '../../screens/learningApp/courses/lockedCourses';
import MyCourses from '../../screens/learningApp/myCourses';

const Drawer = createDrawerNavigator();

export default function drawer({navigation}) {
  const {setIsRTL, isRTL, isDark, setIsDark} = useValues();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: isRTL ? 'right' : 'left',
        swipeEnabled: true,
      }}
      drawerContent={props => (
        <Account navigation={navigation} NotShowIcon NotShowHeader />
      )}>
      <Drawer.Screen
        options={{headerShown: false}}
        name="LearningTabBar"
        component={LearningTabBar}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="LockedCourses"
        component={LockedCourses}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="Account"
        component={Account}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="MyCourses"
        component={MyCourses}
      />
    </Drawer.Navigator>
  );
}
