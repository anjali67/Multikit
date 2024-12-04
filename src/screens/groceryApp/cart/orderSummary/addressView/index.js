import {View, Text} from 'react-native';
import React from 'react';
import {t} from 'i18next';
import styles from './styles';
import {useValues} from '@App';
import appColors from '../../../../../theme/appColors';

export default function AddressView() {
  const {viewRTLStyle, textRTLStyle, isDark} = useValues();
  return (
    <View style={styles.dataView}>
      <Text
        style={[
          styles.addTxt,
          {
            textAlign: textRTLStyle,
            color: isDark ? appColors.white : appColors.groceryBtn,
          },
        ]}>
        {t('orderDetailPage.address')}
      </Text>
      <View>
        <Text
          style={[
            styles.name,
            {
              textAlign: textRTLStyle,
              color: isDark ? appColors.white : appColors.black,
            },
          ]}>
          {t('orderDetailPage.name')}
        </Text>
        <Text style={[styles.locationTxt, {textAlign: textRTLStyle}]}>
          {t('orderDetailPage.location')}
        </Text>
      </View>
    </View>
  );
}
