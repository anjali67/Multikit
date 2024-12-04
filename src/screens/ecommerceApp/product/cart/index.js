import {View, ScrollView, Text} from 'react-native';
import React, {useEffect} from 'react';
import HomeHeader from '@otherComponent/ecommerce/homeHeader';
import styles from './styles';
import {cartData} from '@utils/json/ecommerce';
import CartProduct from './cartProduct';
import ProcutBanner from '@otherComponent/ecommerce/productBanner';
import TotalOrder from '../../account/orderDetail/totalOrder';
import BottomCartView from '@commonComponents/bottomCartView';
import {t} from 'i18next';
import Toast from 'react-native-toast-message';
import ecommerceStyles from '../../style';
import {Alert} from '@assets/images/ecommerce_theme/svg/alert';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function EcommerceCart({navigation}) {
  const {isDark, viewRTLStyle} = useValues();
  const toastConfig = {
    tomatoToast: ({text1, props}) => (
      <View style={[styles.toastView, {flexDirection: viewRTLStyle}]}>
        <Alert />
        <Text style={styles.alertText}>{t('ecommerce.alertMessage')}</Text>
      </View>
    ),
  };
  useEffect(() => {
    Toast.show({
      type: 'tomatoToast',
    });
  }, []);

  return (
    <View
      style={[
        ecommerceStyles.mainView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <HomeHeader
        title={'ecommerce.shoppingCart'}
        titleStyle={[
          styles.titleStyle,
          {
            marginBottom: 0,
            marginTop: 2,
            color: isDark ? appColors.white : appColors.ecommorcePrimary,
          },
        ]}
        navigation={navigation}
      />
      <Toast config={toastConfig} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartProduct data={cartData} navigation={navigation} />
        <ProcutBanner />
        <View style={styles.divider}></View>
        <TotalOrder mainStyle={styles.mainStyle} />
      </ScrollView>
      <BottomCartView
        title={t('foodCart.selectAddress')}
        content={t('ecommerce.viewDetails')}
        price={26}
        onPress={() => {
          navigation.navigate('EcommerceSavedAddresss');
        }}
      />
    </View>
  );
}
