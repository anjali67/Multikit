import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import learningStyle from '../style';
import Background from '@otherComponent/learning/home/background';
import Header from '@otherComponent/learning/home/header';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {t} from 'i18next';
import Categories from '@otherComponent/learning/home/categories';
import {categories} from '@utils/json/learning';
import PopularCourses from '@otherComponent/learning/home/popularCourses';
import Instructors from '@otherComponent/learning/instructors';
import {useValues} from '@App';

export default function search({navigation}) {
  const {isDark, textRTLStyle} = useValues();
  return (
    <ScrollView
      style={[
        learningStyle.container,
        {backgroundColor: isDark ? appColors.darkPrimary : appColors.white},
      ]}
      showsVerticalScrollIndicator={false}>
      <View>
        <Background
          showSearchBar
          image={{height: windowHeight(120)}}
          content={<Header showSearchBar sectionStyle={{marginTop: 0}} />}
        />
        <View style={styles.margin}>
          <Text
            style={[
              styles.title,
              {
                textAlign: textRTLStyle,
                color: isDark ? appColors.white : appColors.learningBtn,
              },
            ]}>
            {t('learning.topSearches')}
          </Text>
          <Categories data={categories} />
          <Text
            style={[
              [
                styles.title,
                {
                  textAlign: textRTLStyle,
                  color: isDark ? appColors.white : appColors.learningBtn,
                },
              ],
              {marginTop: windowHeight(10)},
            ]}>
            {t('learning.popularCourses')}
          </Text>
          <PopularCourses />
          <Text
            style={[
              styles.title,
              {
                textAlign: textRTLStyle,
                color: isDark ? appColors.white : appColors.learningBtn,
              },
            ]}>
            {t('learning.topInstructor')}
          </Text>
          <Instructors navigation={navigation} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: appColors.learningBtn,
    fontFamily: appFonts.InterSemiBold,
    fontSize: fontSizes.FONT21,
    marginTop: windowHeight(20),
    marginBottom: windowHeight(9),
  },
  margin: {
    marginHorizontal: windowWidth(20),
  },
});
