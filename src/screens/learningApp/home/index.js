import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import learninngStyle from '../style';
import Background from '@otherComponent/learning/home/background';
import Header from '@otherComponent/learning/home/header';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import {t} from 'i18next';
import Categories from '@otherComponent/learning/home/categories';
import {categories} from '@utils/json/learning';
import Courses from '@otherComponent/learning/home/courses';
import FeaturedCourse from '@otherComponent/learning/home/featuredCourse';
import Banner from '@otherComponent/learning/home/banner';
import PopularCourses from '@otherComponent/learning/home/popularCourses';
import {useValues} from '@App';

export default function home({navigation}) {
  const {isDark, textRTLStyle} = useValues();
  return (
    <View
      style={[
        learninngStyle.container,
        {backgroundColor: isDark ? appColors.darkPrimary : appColors.white},
      ]}>
      <Background
        showSearchBar
        content={<Header showSearchBar showLogo showUserInfo />}
      />
      <ScrollView
        contentContainerStyle={learninngStyle.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <View style={styles.margin}>
          <Text
            style={[
              styles.title,
              {
                textAlign: textRTLStyle,
                color: isDark ? appColors.white : appColors.learningBtn,
              },
            ]}>
            {t('common.Categories')}
          </Text>
          <Categories intializeSelectdCategory={0} data={categories} />
          <Text
            style={[
              styles.title,
              {
                textAlign: textRTLStyle,
                color: isDark ? appColors.white : appColors.learningBtn,
              },
            ]}>
            {t('learning.continueReading')}
          </Text>
          <Courses isHorizontal={true} />
          <Text
            style={[
              styles.title,
              {
                textAlign: textRTLStyle,
                color: isDark ? appColors.white : appColors.learningBtn,
              },
            ]}>
            {t('learning.featuredCourses')}
          </Text>
          <FeaturedCourse navigation={navigation} />
          <Banner />
          <Text
            style={[
              styles.title,
              {
                textAlign: textRTLStyle,
                color: isDark ? appColors.white : appColors.learningBtn,
              },
            ]}>
            {t('learning.popularCourses')}
          </Text>
          <PopularCourses navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: appColors.learningBtn,
    fontFamily: appFonts.InterSemiBold,
    fontSize: fontSizes.FONT21,
    marginTop: windowHeight(20),
    marginBottom: windowHeight(9),
    flexDirection: 'row-reverse',
    marginHorizontal: 10,
  },
  margin: {
    marginHorizontal: windowWidth(20),
  },
});
