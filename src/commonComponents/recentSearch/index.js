import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useValues} from '@App';
import {Cross} from '@assets/images/common/svg/cross';
import {t} from 'i18next';
import {windowWidth} from '@theme/appConstant';

export default function RecentSearch(props) {
  const {textRTLStyle, isRTL, viewRTLStyle, isDark} = useValues();
  return (
    <View style={[styles.container, props.viewContainer]}>
      <Text
        style={[
          styles.title,

          {
            textAlign: textRTLStyle,
            left: isRTL ? windowWidth(-4) : windowWidth(10),
            color: isDark ? appColors.white : appColors.black,
          },
          props.titleStyle,
        ]}>
        {t(props.title)}
      </Text>
      {props.searchArr.map(item => (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={props.onPress}
          style={[styles.recentSearch, {flexDirection: viewRTLStyle}]}>
          <View style={[styles.searchValue, {flexDirection: viewRTLStyle}]}>
            {props.icon && props.icon}
            <Text style={[styles.result, props.contentStyle]}>
              {t(item.result)}
            </Text>
          </View>
          <Cross
            color={props.crossColor ? props.crossColor : '#8F8FB2'}
            width={'34'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}
