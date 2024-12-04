import {View, ScrollView} from 'react-native';
import React from 'react';
import ecommerceStyles from '../../style';
import HomeHeader from '@otherComponent/ecommerce/homeHeader';
import {orderData} from '@utils/json/ecommerce';
import ProductHistory from '../orderHistory/productHistory';
import {windowHeight, windowWidth} from '@theme/appConstant';
import OrderTraking from './orderTraking';
import TotalOrder from './totalOrder';
import OrderAddress from './orderAddress';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function ecommerceOrderDetails({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        ecommerceStyles.mainView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <HomeHeader
        style={ecommerceStyles.mainView}
        title={'common.Order Details'}
        titleStyle={[
          ecommerceStyles.title,
          {color: isDark ? appColors.white : appColors.ecommorcePrimary},
        ]}
        navigation={navigation}
        showBack
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        <View>
          <ProductHistory
            backgroundStyle={{
              width: '100%',
              marginVertical: windowHeight(12),
              marginHorizontal: windowWidth(20),
              right: windowWidth(20),
              backgroundColor: appColors.lightGray,
            }}
            data={orderData}
          />
          <OrderTraking />
          <TotalOrder />
          <OrderAddress />
        </View>
      </ScrollView>
    </View>
  );
}
