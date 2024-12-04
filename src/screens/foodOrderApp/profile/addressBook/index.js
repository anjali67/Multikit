import {View, Text} from 'react-native';
import React from 'react';
import foodOrderStyle from '../../style/styles';
import HeaderBar from '@otherComponent/food/headerBar';
import {t} from 'i18next';
import Addresses from './addresses';
import {Foodhome} from '@assets/images/food_ordering_theme/svg/foodHome';
import appColors from '../../../../theme/appColors';
import {City} from '../../../../assets/images/food_ordering_theme/svg/city';
import styles from './styles';
import Button from '@commonComponents/button/button';
import {useValues} from '@App';

export default function AddressBook() {
  const {isDark} = useValues();
  return (
    <View style={[foodOrderStyle.mainContainer,{backgroundColor: isDark ? appColors.darkTheme : appColors.foodPrimary}]}>
      <HeaderBar color={appColors.white} title={t('orderDetailPage.address')} />
      <View style={styles.blank}></View>
      <View style={{flex: 8, bottom: 0}}>
        <Addresses
          icon={<Foodhome color={isDark ? appColors.white : appColors.foodSecondary} />}
          title={t('bottomTab.home')}
          content={t('orderPlaced.addressBook')}
        />
        <Addresses
          icon={<City color={isDark ? appColors.white : appColors.foodSecondary} />}
          title={t('orderPlaced.office')}
          content={t('orderPlaced.addressBook')}
        />
      </View>
      <View style={styles.center}>
        <Button
          text={t('orderPlaced.newddress')}
          style={foodOrderStyle.buttonStyle}
          btnTextStyle={foodOrderStyle.btn}
          onPress={() => {}}
        />
      </View>
    </View>
  );
}
