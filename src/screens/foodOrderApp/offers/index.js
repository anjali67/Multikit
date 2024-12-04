import {View, Text} from 'react-native';
import React from 'react';
import foodOrderStyle from '../style/styles';
import HeaderBar from '@otherComponent/food/headerBar';
import appColors from '@theme/appColors';
import styles from './styles';
import {t} from 'i18next';
import FoodTextInput from '@otherComponent/food/textInput';
import Coupons from './cuponsView';
import {useValues} from '@App';

export default function FoodOffers() {
  const {isDark} = useValues();
  return (
    <View style={[foodOrderStyle.mainContainer,{backgroundColor:isDark ? appColors.darkTheme : appColors.foodPrimary}]}>
      <HeaderBar
        notShowheaderBg
        title={t('bottomTab.Offers')}
        backColor={appColors.foodSecondary}
        titleStyle={[styles.titleStyle,{color:isDark ? appColors.white : appColors.foodSecondary}]}
        textView={styles.textView}
        backColor={isDark ? appColors.white : appColors.black}
      />
      <FoodTextInput
        textInputContainer={[
          foodOrderStyle.textInputContainer,
          styles.marginTop,
        ]}
        placeholder={t('myOffersArr.serachContent')}
      />
      <Coupons />
    </View>
  );
}
