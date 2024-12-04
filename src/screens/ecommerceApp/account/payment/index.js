import {View, ScrollView} from 'react-native';
import React from 'react';
import ecommerceStyles from '../../style';
import HomeHeader from '@otherComponent/ecommerce/homeHeader';
import CardOptions from './cardOptions';
import TotalOrder from '../orderDetail/totalOrder';
import BottomCartView from '@commonComponents/bottomCartView';
import {t} from 'i18next';
import styles from './styles';
import {useValues} from '../../../../../App';
import appColors from '@theme/appColors';

export default function EcommercePayment({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        ecommerceStyles.mainView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <HomeHeader
        style={ecommerceStyles.mainView}
        title={'orderDetailPage.paymentMethod'}
        titleStyle={[
          ecommerceStyles.title,
          {color: isDark ? appColors.white : appColors.ecommorcePrimary},
        ]}
        navigation={navigation}
        showBack
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <CardOptions />
        <View style={styles.blankView}></View>
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
          paymentText={styles.paymentText}
          dataContainer={styles.container}
        />
      </ScrollView>
      <BottomCartView
        title={t('ecommerce.payNoW')}
        mainView={styles.mainView}
        cartText={styles.cartText}
        content={t('ecommerce.viewDetails')}
        price={26}
        onPress={() => {
          navigation.navigate('OrderSucess');
        }}
      />
    </View>
  );
}
