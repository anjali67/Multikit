import {View} from 'react-native';
import React from 'react';
import ecommerceStyles from '../../style';
import HomeHeader from '@otherComponent/ecommerce/homeHeader';
import {wishlistData} from '@utils/json/ecommerce';
import JustForYouSection from '../../home/justForyouView';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function ecommerceWishlist({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        ecommerceStyles.mainView,
        {
          paddingBottom: 70,
          backgroundColor: isDark ? appColors.darkTheme : appColors.white,
        },
      ]}>
      <HomeHeader
        style={ecommerceStyles.mainView}
        title={'ecommerce.whishlist'}
        titleStyle={[
          ecommerceStyles.title,
          {color: isDark ? appColors.white : appColors.ecommorcePrimary},
        ]}
        navigation={navigation}
        showBack
      />
      <View style={{height: 5}}></View>
      <JustForYouSection
        showCartIcon
        data={wishlistData}
        navigation={navigation}
      />
    </View>
  );
}
