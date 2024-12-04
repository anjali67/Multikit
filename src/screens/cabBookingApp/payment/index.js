import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import cabStyle from '../style';
import {t} from 'i18next';
import PaymentMethod from './paymentMehod';
import BottomView from './bottomView';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import {fontSizes} from '@theme/appConstant';

export default function cabPayment({navigation}) {
  const {viewRTLStyle, isDark, textRTLStyle} = useValues();
  return (
    <View
      style={[
        cabStyle.mainContainer,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <View style={styles.mainView}>
        <Text
          style={[
            styles.title,
            {
              textAlign: textRTLStyle,
              color: isDark ? appColors.white : appColors.cabText,
              fontSize: fontSizes.FONT24,
            },
          ]}>
          {t('financial.Payment')}
        </Text>
        <View style={styles.blankView}></View>
        <PaymentMethod />
      </View>
      <View style={{flex: 2}}></View>
      <ScrollView
        style={[
          styles.bottomView,
          {
            backgroundColor: isDark ? appColors.blackColor : appColors.white,
            borderWidth: isDark ? 1 : 0,
          },
        ]}>
        <BottomView navigation={navigation} />
      </ScrollView>
    </View>
  );
}
