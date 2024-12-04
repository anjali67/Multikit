import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import learningStyle from '../../style';
import Background from '@otherComponent/learning/home/background';
import {windowHeight} from '@theme/appConstant';
import Header from '@otherComponent/learning/home/header';
import Instructors from '@otherComponent/learning/instructors';
import {t} from 'i18next';
import FeaturedCourse from '@otherComponent/learning/home/featuredCourse';
import Categories from '@otherComponent/learning/home/categories';
import {categories} from '@utils/json/learning';
import PopularCourses from '@otherComponent/learning/home/popularCourses';
import {allCourse} from '@utils/json/learning';
import {useValues} from '../../../../../App';
import appColors from '@theme/appColors';

export default function category({navigation}) {
  const {isDark} = useValues();
  return (
    <ScrollView
      style={[
        learningStyle.container,
        {backgroundColor: isDark ? appColors.darkPrimary : appColors.white},
      ]}
      contentContainerStyle={learningStyle.contentContainerStyle}
      showsVerticalScrollIndicator={false}>
      <View>
        <Background
          image={{height: windowHeight(104)}}
          content={
            <Header showArrowIcon headerTitle={'learning.businessAnalyst'} />
          }
        />
        <View style={learningStyle.marginHorizontal}>
          <Text
            style={[
              learningStyle.titleStyle,
              {color: isDark ? appColors.white : appColors.learningBtn},
            ]}>
            {t('learning.topInstructor')}
          </Text>
          <Instructors
            contentContainerStyle={{paddingBottom: 0}}
            navigation={navigation}
          />
          <Text
            style={[
              learningStyle.titleStyle,
              {color: isDark ? appColors.white : appColors.learningBtn},
            ]}>
            {t('learning.trendingCourses')}
          </Text>
          <FeaturedCourse navigation={navigation} />
          <Text
            style={[
              learningStyle.titleStyle,
              {color: isDark ? appColors.white : appColors.learningBtn},
            ]}>
            {t('learning.subCategories')}
          </Text>
          <Categories data={categories} />
          <Text
            style={[
              [
                learningStyle.titleStyle,
                {color: isDark ? appColors.white : appColors.learningBtn},
              ],
              {marginTop: 20},
            ]}>
            {t('learning.allCourses')}
          </Text>
          <PopularCourses navigation={navigation} data={allCourse} />
        </View>
      </View>
    </ScrollView>
  );
}
