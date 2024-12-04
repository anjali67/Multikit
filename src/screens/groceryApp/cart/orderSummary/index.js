import {View, ScrollView, Text} from 'react-native';
import React from 'react';
import HeaderWithBack from '@commonComponents/headerWithBack';
import {t} from 'i18next';
import OrderDetailsView from './orderDetailsView';
import styles from './styles';
import ItemsView from './ItemsView';
import Total from '@commonComponents/total';
import appColors from '@theme/appColors';
import AddressView from './addressView';
import PaymentMethodView from './paymentMethodView';
import Button from '@commonComponents/button/button';
import {useValues} from '@App';

export default function GroceryOrderSummary({navigation}) {
  const {isDark,currValue} = useValues();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.container,
            {backgroundColor: isDark ? appColors.blackColor : appColors.white},
          ]}>
          <HeaderWithBack
            navigation={navigation}
            title={t('orderSummary.OrderSummary')}
          />
          <OrderDetailsView />
          <ItemsView />
          <View style={styles.blank}></View>
          <Total
           title={'common.Order Details'}
           bagPrice={(currValue * 220).toFixed(2)}
           savingsPrice={-(currValue * 20).toFixed(2)}
           delivery={(currValue * 50).toFixed(2)}
           total={(currValue * 270).toFixed(2)}
            color={isDark ? appColors.white : appColors.groceryBtn}
          />
          <AddressView />
          <PaymentMethodView />
        </View>
      </ScrollView>
      <Button
        text={t('orderDetailPage.reorder')}
        style={styles.btnStyle}
        btnTextStyle={styles.btn}
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'GroceryDrawer'}],
          });
        }}
      />
    </View>
  );
}
