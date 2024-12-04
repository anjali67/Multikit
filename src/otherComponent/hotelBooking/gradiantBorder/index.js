import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import appColors from '@theme/appColors';
import {t} from 'i18next';
import {useValues} from '@App';

export default function gradiantBorder(props) {
  const {viewRTLStyle, isDark} = useValues();
  return (
    <View>
      <LinearGradient
        colors={[
          appColors.onBoardGradiant,
          props.gradiant ? props.gradiant : appColors.onBoardGradiant1,
        ]}
        start={{x: 1, y: 0.2}}
        end={{x: 1, y: 1}}
        style={[styles.linearGradient, props.linearGradient]}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[
            styles.innerContainer,
            props.innerContainer,
            {backgroundColor: isDark ? appColors.blackColor : appColors.white},
          ]}>
          <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
            <Text style={[styles.iconView, props.iconStyle]}>＋</Text>
            <Text style={[styles.name, props.name]}>{t(props.title)}</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
