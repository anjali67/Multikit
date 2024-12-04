import React from 'react';
import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import {popularCourse} from '@utils/json/learning';
import styles from './styles';
import {t} from 'i18next';
import {LearningPlay} from '@assets/images/learning_theme/svg/play';
import {StarIcon} from '@assets/images/hotel_theme/svg/ratingStar';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default function popularCourses(props) {
  const {currSymbol, currValue, viewRTLStyle, textRTLStyle, isRTL, isDark} =
    useValues();
  return (
    <View style={styles.marginTop}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={props.data ? props.data : popularCourse}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => props.navigation.navigate('LockedCourses')}
            style={[
              styles.row,
              styles.containerView,
              {
                flexDirection: viewRTLStyle,
                backgroundColor: isDark
                  ? appColors.darkPrimary2
                  : appColors.category,
              },
            ]}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textView}>
              <Text
                style={[
                  styles.title,
                  {
                    textAlign: textRTLStyle,
                    color: isDark ? appColors.white : appColors.learningBtn,
                  },
                ]}>
                {t(item.title)}
              </Text>
              <View
                style={[
                  styles.row,
                  styles.margin,
                  {flexDirection: viewRTLStyle},
                ]}>
                <LearningPlay />
                <Text style={[styles.content, {textAlign: textRTLStyle}]}>
                  {item.numlessons} {t('learning.lessons')}
                </Text>
              </View>
              <View
                style={[
                  styles.row,
                  {
                    justifyContent: 'space-between',
                    width: windowWidth(255),
                    flexDirection: viewRTLStyle,
                  },
                  styles.margin,
                ]}>
                <View
                  style={[
                    styles.row,
                    {flexDirection: viewRTLStyle, right: isRTL ? 10 : null},
                  ]}>
                  <StarIcon />
                  <Text
                    style={[
                      styles.rate,
                      {color: isDark ? appColors.white : appColors.learningBtn},
                    ]}>
                    {' '}
                    {item.courseRate}{' '}
                    <Text
                      style={{
                        color: isDark
                          ? appColors.white
                          : appColors.learningPlaceholder,
                      }}>
                      ({item.ratings}) {t('learning.ratings')}
                    </Text>{' '}
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
        ItemSeparatorComponent={() => <View style={styles.marginStyle}></View>}
      />
    </View>
  );
}
