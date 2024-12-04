import {View, Text} from 'react-native';
import React from 'react';
import {myOffers} from '@utils/json/food';
import styles from './styles';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '../../../../theme/appColors';

export default function Coupons() {
  const {viewRTLStyle, isRTL, isDark, textRTLStyle} = useValues();
  return (
    <View style={styles.coupon}>
      {myOffers.map(item => (
        <View
          style={[
            styles.mainView,
            {backgroundColor: isDark ? appColors.blackColor : appColors.white},
          ]}>
          <View
            onPress={() => {}}
            activeOpacity={0.8}
            style={[styles.subView, {flexDirection: viewRTLStyle}]}>
            <View style={[styles.view, {flexDirection: viewRTLStyle}]}>
              <View style={[styles.view, {flexDirection: viewRTLStyle}]}>
                <Text style={styles.priceTxt}>{item.price}</Text>
                <View style={styles.leftView}>
                  <Text
                    style={[
                      styles.percent,
                      {
                        textAlign: textRTLStyle,
                        color: isDark
                          ? appColors.white
                          : appColors.foodSecondary,
                      },
                    ]}>
                    %
                  </Text>
                  <Text
                    style={[
                      styles.off,
                      {
                        textAlign: textRTLStyle,
                        color: isDark
                          ? appColors.white
                          : appColors.foodSecondary,
                      },
                    ]}>
                    {t('myOffersArr.off')}
                  </Text>
                </View>
              </View>
              <View style={isRTL ? styles.marginRight : styles.titleView}>
                <Text
                  style={[
                    styles.titleTxt,
                    {color: isDark ? appColors.white : appColors.black},
                  ]}>
                  {t(item.onOrder)}
                </Text>
                <Text style={[styles.content, {textAlign: textRTLStyle}]}>
                  {t(item.onOrderAbove)}
                </Text>
                <Text style={[styles.content, {textAlign: textRTLStyle}]}>
                  $250
                </Text>
              </View>
            </View>
            <View>
              <Text style={styles.useCode}>{t('myOffersArr.useCode')}</Text>
              <Text style={styles.code}>{t(item.code)}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
