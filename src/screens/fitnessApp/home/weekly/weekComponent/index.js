import React from 'react';
import {View, ScrollView} from 'react-native';
import fitnessStyle from '../../../style';
import WeekItem from './weekItem';
import styles from '../../styles';
import GradiantBtn from '@otherComponent/fitness/gradiantBtn';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function weekComponent(props) {
  const {isDark} = useValues();
  return (
    <ScrollView
      contentContainerStyle={[
        styles.contentContainerStyle,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}
      showsVerticalScrollIndicator={false}
      style={fitnessStyle.container}>
      <View style={styles.marginTop}></View>
      <WeekItem numWeek={1} showGradinatBorder selectdDay />
      <WeekItem numWeek={2} />
      <WeekItem numWeek={3} />
      <View style={{height: 50}}></View>
      <GradiantBtn
        title={'fitness.start'}
        onBtnPress={() => {
          props.navigation.navigate('Weekly');
        }}
      />
    </ScrollView>
  );
}
