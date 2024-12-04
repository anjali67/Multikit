import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {DownArrow} from '@assets/images/common/svg/downArrow';
import styles from './styles';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {windowWidth} from '../../theme/appConstant';

export default function DropdownView(props) {
  const {viewRTLStyle, isDark, isRTL} = useValues();
  return (
    <View style={[styles.optionMainView, {flexDirection: viewRTLStyle}]}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={props.visibleQuantityModal}
        style={[
          styles.option,
          {right: 2},
          {
            flexDirection: viewRTLStyle,
            backgroundColor: isDark ? '#222222' : appColors.dropdown,
          },
        ]}>
        <Text
          style={[
            styles.optionTxt,
            {color: isDark ? appColors.white : appColors.black},
          ]}>
          {props.leftTitle}
        </Text>
        <View style={styles.dopdownView}>
          <DownArrow />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={props.visibleDeliveryModal}
        style={[
          styles.option,
          {
            flexDirection: viewRTLStyle,
            backgroundColor: isDark ? '#222222' : appColors.dropdown,
          },
        ]}>
        <Text
          style={[
            styles.optionTxt,
            {color: isDark ? appColors.white : appColors.black},
          ]}>
          {t(props.rightTitle)}
        </Text>
        <View
          style={[
            styles.dopdownView,
            {left: isRTL ? windowWidth(18) : windowWidth(12)},
          ]}>
          <DownArrow />
        </View>
      </TouchableOpacity>
    </View>
  );
}
