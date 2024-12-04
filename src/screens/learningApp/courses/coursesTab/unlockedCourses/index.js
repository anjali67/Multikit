import {ScrollView} from 'react-native';
import React from 'react';
import learningStyle from '../../../style';
import CourseListItem from '@otherComponent/learning/courses/courseList';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function unlockedCourses() {
  const {isDark} = useValues();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        learningStyle.container,
        {backgroundColor: isDark ? appColors.darkPrimary : appColors.white},
      ]}>
      <CourseListItem slectedCourse />
    </ScrollView>
  );
}
