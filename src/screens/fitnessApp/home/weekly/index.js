import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from '../styles';
import appColors from '@theme/appColors';
import {t} from 'i18next';
import {weeklyExercise} from '@utils/json/fitness';
import fitnessStyle from '../styles';
import {fontSizes} from '@theme/appConstant';
import GradiantBtn from '@otherComponent/fitness/gradiantBtn';
import HeaderBg from './headerBg';
import {useValues} from '@App';

export default function weekly({navigation}) {
  const {isDark, viewRTLStyle, textRTLStyle} = useValues();

  return (
    <View
      style={[
        fitnessStyle.containerView,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <HeaderBg navigation={navigation} title={'fitness.exerciseTitle'} />
      <View style={styles.blankView}></View>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        data={weeklyExercise}
        renderItem={({item, index}) => (
          <View
            style={[
              styles.container,
              styles.rowContainer,
              {marginVertical: 15, flexDirection: viewRTLStyle},
            ]}>
            <View
              style={[
                styles.imageView,
                {
                  backgroundColor: isDark
                    ? appColors.darkTheme
                    : appColors.bgColor,
                },
              ]}>
              <Image source={item.image} style={styles.imageStyle} />
            </View>
            <View style={styles.textContainer}>
              <Text
                style={[
                  styles.title,
                  {
                    color: isDark ? appColors.white : appColors.fontColor,
                    fontSize: fontSizes.FONT19,
                  },
                ]}>
                {t(item.name)}
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    color: appColors.cabContent,
                    fontSize: fontSizes.FONT20,
                    marginTop: 5,
                    textAlign: textRTLStyle,
                  },
                ]}>
                X {item.times}
              </Text>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View
            style={[
              styles.seperator,
              {
                backgroundColor: isDark
                  ? appColors.darkTheme
                  : appColors.divider,
              },
            ]}></View>
        )}
      />
      <GradiantBtn
        title={'fitness.start'}
        onBtnPress={() => {
          navigation.navigate('Videos');
        }}
      />
      <View style={styles.blankView}></View>
    </View>
  );
}
