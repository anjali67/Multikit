import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles';
import appFonts from '@theme/appFonts';
import {useValues} from '@App';
import appColors from '../../../../../theme/appColors';

export default function textRow(props) {
  const {isDark, viewRTLStyle} = useValues();
  return (
    <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
      <View>
        <Text
          style={[
            styles.title,
            {
              textAlign: 'center',
              fontFamily: appFonts.MontserratSemiBold,
              color: isDark ? appColors.white : appColors.fontColor,
            },
          ]}>
          {props.totalCount}
        </Text>

        <Text style={styles.nameStyle}>{props.title}</Text>
      </View>
      {props.showVertical && <View style={styles.vertical}></View>}
    </View>
  );
}
