import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {t} from 'i18next';
import {DownArrow} from '@assets/images/common/svg/downArrow';
import {stepsec1} from '@utils/images/images';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import ChartSection from './charSection';

export default function bottomSection() {
  const {isDark, viewRTLStyle, isRTL} = useValues();
  return (
    <View style={[styles.margin, {marginHorizontal: 0}]}>
      <View style={{marginHorizontal: isRTL ? 20 : 10}}>
        <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
          <Text
            style={[
              styles.title,
              {color: isDark ? appColors.white : appColors.fontColor},
            ]}>
            {t('fitness.weight')}
          </Text>
          <View
            style={[
              styles.dropdown,
              {
                backgroundColor: isDark
                  ? appColors.darkTheme
                  : appColors.lightBorder,
              },
            ]}>
            <Text
              style={[
                styles.date,
                {color: isDark ? appColors.white : appColors.cabContent},
              ]}>
              2022
            </Text>
            <DownArrow color={'#ADADAD'} str />
          </View>
        </View>
        <Image source={stepsec1} style={styles.image} />
        <View
          style={[
            styles.divider,
            {
              borderBottomColor: isDark
                ? appColors.darkTheme
                : appColors.bgColor,
            },
          ]}></View>
        <ChartSection />
      </View>
    </View>
  );
}
