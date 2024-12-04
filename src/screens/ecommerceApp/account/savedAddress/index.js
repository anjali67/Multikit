import {View, ScrollView, ImageComponent} from 'react-native';
import React from 'react';
import HomeHeader from '@otherComponent/ecommerce/homeHeader';
import Address from './address';
import ecommerceStyles from '../../style';
import {Increase} from '@assets/images/grocery_assets/svg/increase';
import ButtonWithIcon from '@commonComponents/button/buttonWithIcon';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import styles from '../styles';
import BottomCartView from '@commonComponents/bottomCartView';
import {useValues} from '@App';

export default function EcommerceSavedAddresss({navigation}) {
  const {isDark} = useValues();

  return (
    <View
      style={[
        ecommerceStyles.mainView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <HomeHeader
        style={ecommerceStyles.mainView}
        title={'ecommerce.deliveryAddress'}
        titleStyle={[
          ecommerceStyles.title,
          {color: isDark ? appColors.white : appColors.ecommorcePrimary},
        ]}
        navigation={navigation}
        showBack
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[ecommerceStyles.scrollView]}>
        <View>
          <Address />
          <View style={ecommerceStyles.center}>
            <ButtonWithIcon
              btnStyle={[
                styles.btnStyle,
                {backgroundColor: isDark && appColors.blackColor},
              ]}
              mainContainer={styles.mainContainer}
              titleStyle={[
                styles.titleStyle,
                {color: isDark ? appColors.white : appColors.ecommerceFont},
              ]}
              icon={
                <Increase
                  color={isDark ? appColors.white : appColors.ecommerceFont}
                  height={'9'}
                  width={'9'}
                />
              }
              title={t('orderPlaced.newddress')}
            />
          </View>
        </View>
      </ScrollView>
      <BottomCartView
        title={t('ecommerce.payment')}
        content={t('ecommerce.viewDetails')}
        price={26}
        onPress={() => {
          navigation.navigate('EcommercePayment');
        }}
      />
    </View>
  );
}
