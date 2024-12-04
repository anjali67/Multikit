import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {t} from 'i18next';
import {useValues} from '@App';
import BillRow from '@commonComponents/billRow';
import Button from '@commonComponents/button/button';
import appColors from '@theme/appColors';
import {windowWidth} from '@theme/appConstant';

export default function BillDetails(props) {
  const {textRTLStyle, isDark, isRTL,currValue,currSymbol} = useValues();
  return (
    <>
      <View style={[styles.mainView, props.mainStyle]}>
        <Text
          style={[
            styles.title,
            {
              textAlign: textRTLStyle,
              color: isDark ? appColors.white : appColors.black,
              right: isRTL ? windowWidth(8) : 0,
            },
          ]}>
          {t(props.title)}:
        </Text>
        <View
          style={[
            styles.mainContainer,
            {backgroundColor: isDark ? appColors.blackColor : appColors.white},
          ]}>
          <BillRow title={'foodCart.itemTotal'} price={currSymbol + (currValue * 220).toFixed(2)}/>
          <BillRow title={'foodCart.deliveryFee'} price={currSymbol + (currValue * 20).toFixed(2)} />
          <BillRow
            title={'foodCart.deliveryTip'}
            priceStyle={styles.addTip}
            price={t('foodCart.addTip')}
          />
          <BillRow title={'foodCart.taxesAndChanges'} price={ currSymbol +   (currValue * 50).toFixed(2)} />
          <View style={styles.border}></View>
          <BillRow
            titleStyle={[
              styles.titleStyle,
              {
                color: isDark ? appColors.white : appColors.foodSecondary,
                left: isRTL ? windowWidth(6) : 0,
              },
            ]}
            title={'foodCart.totalPay'}
            price={currSymbol + (currValue * 290).toFixed(2)}
            priceStyle={[
              styles.titleStyle,
              {color: isDark ? appColors.white : appColors.foodSecondary},
            ]}
          />
        </View>
      </View>
      <View
        style={[
          styles.mainContainer,
          {backgroundColor: isDark ? appColors.blackColor : appColors.white},
        ]}>
        <Text
          style={[
            styles.addressText,
            {
              textAlign: textRTLStyle,
              color: isDark ? appColors.white : appColors.foodSecondary,
              right: isRTL ? windowWidth(4) : 0,
            },
          ]}>
          {t('foodCart.selectAddress')}
        </Text>
        <View style={styles.border}></View>
        <BillRow
          title={'foodCart.billAmount'}
          priceStyle={[
            styles.titleStyle,
            {
              color: isDark ? appColors.white : appColors.foodSecondary,
              right: isRTL ? windowWidth(4) : 0,
            },
          ]}
          price={currSymbol + (currValue * 290).toFixed(2)}
        />
        <Button
          text={t('foodCart.proceedTopay')}
          style={styles.btnStyle}
          btnTextStyle={styles.btn}
          onPress={() => {
            props.navigation.navigate('FoodPayment');
          }}
        />
      </View>
    </>
  );
}
