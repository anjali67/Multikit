import React from 'react';
import {View, ScrollView} from 'react-native';
import learningStyle from '../../style';
import HeaderView from '@otherComponent/learning/courses/headerView';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import UnlockedCourses from './unlockedCourses';
import MoreCourses from './moreCourses';
import {t} from 'i18next';
import {MyTabBar} from './myTabBar';
import {useValues} from '@App';
import appColors from '@theme/appColors';

const Tab = createMaterialTopTabNavigator();
export default function courseTab() {
  const {isDark} = useValues();
  return (
    <ScrollView
      style={[
        learningStyle.container,
        {backgroundColor: isDark ? appColors.darkPrimary : appColors.white},
      ]}
      contentContainerStyle={{paddingBottom: 60}}>
      <HeaderView />
      <View style={{height: 600}}>
        <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
          <Tab.Screen
            name={t('learning.courses')}
            component={UnlockedCourses}
          />
          <Tab.Screen name={t('fitness.more')} component={MoreCourses} />
        </Tab.Navigator>
      </View>
    </ScrollView>
  );
}
