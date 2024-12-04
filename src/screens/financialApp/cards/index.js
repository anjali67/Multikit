import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import financialStyles from '../styles';
import HomeHeader from '@otherComponent/financial/homeHeader';
import Cards from '@otherComponent/cards';
import styles from './styles';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function finceCards() {
  const {isDark} = useValues();
  return (
    <View style={[financialStyles.mainContainer,{backgroundColor:isDark ? appColors.financeDarkBg : appColors.gradient2}]}>
      <View>
        <HomeHeader />
        <Cards />
        <View>
          <TouchableOpacity activeOpacity={0.7} style={[styles.bottomView,{ borderColor: isDark ? appColors.darkTheme : appColors.white}]}>
            <Text style={[styles.cardText,{ color: isDark ? appColors.darkTheme : appColors.white}]}>{t('paymentsArr.addNewCard')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
