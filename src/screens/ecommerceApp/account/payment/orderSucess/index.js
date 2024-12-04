import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {tick} from '@utils/images/images';
import styles from './styles';
import {t} from 'i18next';
import OrderDetails from './orderDetail';
import OrderSummary from '../orderSummary';
import TotalOrder from '../../orderDetail/totalOrder';
import ecommerceStyles from '../../../style';
import BottomCartView from '@commonComponents/bottomCartView';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function OrderSucess({navigation}) {
  const {isDark, textRTLStyle} = useValues();
  return (
    <View
      style={[
        ecommerceStyles.mainView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View style={styles.circleView}>
            <Image source={tick} style={styles.circleImage} />
          </View>
          <Text
            style={[
              styles.title,
              {color: isDark ? appColors.white : appColors.ecommerceFont},
            ]}>
            {t('ecommerce.orderSucessFully')}
          </Text>
          <Text style={[styles.subTitle]}>{t('ecommerce.orderContent')}</Text>
        </View>
        <OrderDetails />
        <View style={styles.divider}></View>
        <OrderSummary />
        <TotalOrder
          mainStyle={[
            styles.mainStyle,
            {
              backgroundColor: isDark
                ? appColors.blackColor
                : appColors.bgColor,
            },
          ]}
          titleStyle={styles.titleStyle}
          paymentText={styles.titleStyle}
          dataContainer={styles.container}
        />
      </ScrollView>
      <BottomCartView
        heading={t('ecommerce.trackOrder')}
        title={t('ecommerce.continueShopping')}
        mainView={styles.mainView}
        cartText={styles.cartText}
        onPress={() => {
          navigation.navigate('EcommerceDrawer');
        }}
        textView={styles.textView}
        textStyle={styles.textStyle}
      />
    </View>
  );
}
