import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import HomeHeader from '@otherComponent/ecommerce/homeHeader';
import ecommerceStyles from '../../style';
import SearchTextInput from '@otherComponent/ecommerce/searchTextInput';
import ProductHistory from './productHistory';
import {productHistoryData} from '@utils/json/ecommerce';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function OrderHistory({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        ecommerceStyles.mainView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <HomeHeader
        style={ecommerceStyles.mainView}
        title={'ecommerce.OrderHistory'}
        titleStyle={[
          styles.title,
          {color: isDark ? appColors.white : appColors.ecommorcePrimary},
        ]}
        navigation={navigation}
        showBack
      />
      <SearchTextInput
        container={styles.container}
        showFilter
        inputContainer={styles.inputContainer}
      />
      <ProductHistory
        showViewDetails
        data={productHistoryData}
        navigation={navigation}
      />
    </View>
  );
}
