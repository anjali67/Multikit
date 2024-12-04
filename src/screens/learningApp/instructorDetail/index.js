import React from 'react';
import {View, ScrollView} from 'react-native';
import learningStyle from '../style';
import Background from '@otherComponent/learning/home/background';
import {windowHeight} from '@theme/appConstant';
import Header from '@otherComponent/learning/home/header';
import AboutSection from './aboutSection';
import FeaturedCourse from '@otherComponent/learning/home/featuredCourse';
import {coursesData} from '@utils/json/learning';
import {useValues} from '../../../../App';
import appColors from '@theme/appColors';

export default function instructorDetail() {
  const {isDark} = useValues();
  return (
    <ScrollView
      contentContainerStyle={learningStyle.contentContainerStyle}
      style={[
        learningStyle.container,
        {backgroundColor: isDark ? appColors.darkPrimary : appColors.white},
      ]}
      showsVerticalScrollIndicator={false}>
      <View>
        <Background
          image={{height: windowHeight(104)}}
          content={<Header showArrowIcon headerTitle={'learning.instructor'} />}
        />
        <AboutSection />
        <View style={{marginHorizontal: 20}}>
          <FeaturedCourse data={coursesData} />
        </View>
      </View>
    </ScrollView>
  );
}
