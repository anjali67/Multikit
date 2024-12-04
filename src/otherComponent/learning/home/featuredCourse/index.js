import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {featuredCourses} from '@utils/json/learning';
import {t} from 'i18next';
import styles from '../styles';
import appFonts from '@theme/appFonts';
import {fontSizes, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {StarIcon} from '@assets/images/hotel_theme/svg/ratingStar';
import {useValues} from '@App';

export default function featuredCourse(props) {
  const {currSymbol, currValue, viewRTLStyle, isDark} = useValues();
  return (
    <View style={styles.marginTop}>
      {props.data && (
        <Text
          style={[
            styles.titleStyle,
            {color: isDark ? appColors.white : appColors.learningBtn},
          ]}>
          {t('learning.myCourses')} ({props.data.length})
        </Text>
      )}
      <FlatList
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        data={props.data ? props.data : featuredCourses}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              props.navigation.navigate('LearningCategory');
            }}
            style={[
              styles.featuredContainer,
              {
                backgroundColor: isDark
                  ? appColors.darkPrimary2
                  : appColors.category,
              },
            ]}>
            <View
              style={{
                paddingVertical: 14,
                paddingHorizontal: 8,
              }}>
              <Image source={item.image} style={styles.featuredImg} />
              <Text
                style={[
                  styles.title,
                  {
                    color: isDark ? appColors.white : appColors.learningBtn,
                    fontSize: fontSizes.FONT17,
                    fontFamily: appFonts.InterMedium,
                    marginTop: 10,
                    width: windowWidth(200),
                  },
                ]}>
                {t(item.title)}
              </Text>
              <View
                style={[styles.ratingComtainer, {flexDirection: viewRTLStyle}]}>
                <View style={[styles.singleRow, {flexDirection: viewRTLStyle}]}>
                  <StarIcon height={'21'} width={'16'} />
                  <Text
                    style={[
                      styles.rate,
                      {color: isDark ? appColors.white : appColors.learningBtn},
                    ]}>
                    {item.rate}
                  </Text>
                </View>
                <Text
                  style={[
                    styles.price,
                    {color: isDark ? appColors.white : appColors.learningBtn},
                  ]}>
                  {currSymbol}
                  {currValue * item.price.toFixed(2)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={{marginBottom: 18}}></View>}
      />
    </View>
  );
}
