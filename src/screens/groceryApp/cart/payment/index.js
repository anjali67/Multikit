import {View, ScrollView} from 'react-native';
import React from 'react';
import HeaderWithBack from '@commonComponents/headerWithBack';
import {t} from 'i18next';
import SelectCard from '@commonComponents/selectCard';
import Total from '@commonComponents/total';
import Button from '@commonComponents/button/button';
import styles from './styles';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function GroceryPayment({navigation}) {
  const {isDark,currValue} = useValues();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <HeaderWithBack
        navigation={navigation}
        title={t('common.addPaymentMethod')}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <SelectCard />
        <Total
        title={'common.Order Details'}
        bagPrice={(currValue * 220).toFixed(2)}
        savingsPrice={-(currValue * 20).toFixed(2)}
        delivery={(currValue * 50).toFixed(2)}
        total={(currValue * 270).toFixed(2)}
          titleStyle={styles.titleStyle}
          mainStyle={[
            styles.mainStyle,
            {
              backgroundColor: isDark
                ? appColors.blackColor
                : appColors.bgColor,
            },
          ]}
        />
        <View style={styles.blank}></View>
      </ScrollView>
      <Button
        text={t('common.Proceed to Checkout')}
        style={styles.btnStyle}
        btnTextStyle={styles.btn}
        onPress={() => {
          navigation.navigate('GroceryOrderSucess', {
            navigation: navigation,
          });
        }}
      />
    </View>
  );
}
