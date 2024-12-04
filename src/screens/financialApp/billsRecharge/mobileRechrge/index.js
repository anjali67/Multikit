import React from 'react';
import {View, TextInput, Text} from 'react-native';
import financialStyles from '../../styles';
import HeaderView from '../../pay/headerView';
import {t} from 'i18next';
import styles from './styles';
import appColors from '@theme/appColors';
import {mobileRechargeData} from '@utils/json/financial';
import RecentTransaction from '@otherComponent/financial/recentTransaction';
import {useValues} from '@App';

export default function MobileRecharge({navigation}) {
  const {isDark, isRTL, viewRTLStyle, textRTLStyle} = useValues();
  return (
    <View
      style={[
        financialStyles.mainContainer,
        {
          backgroundColor: isDark
            ? appColors.financeDarkBg
            : appColors.gradient2,
        },
      ]}>
      <HeaderView
        showUserDetails={false}
        showHederText={true}
        title={t('financial.mobileRechrge')}
        navigation={navigation}
      />
      <View style={[styles.container, {flexDirection: viewRTLStyle}]}>
        <TextInput
          placeholder="+91"
          style={[
            styles.mobileView,
            {
              backgroundColor: isDark
                ? appColors.financeDarkBg
                : appColors.inputBg,
              color: isDark ? appColors.darkTheme : appColors.gray,
            },
          ]}
          placeholderTextColor={appColors.financeContent}
        />
        <TextInput
          placeholder={t('financial.mobileNumber')}
          style={[
            styles.mobileView,
            styles.inputContainer,
            {
              textAlign: textRTLStyle,
              paddingRight: isRTL && 20,
              backgroundColor: isDark
                ? appColors.financeDarkBg
                : appColors.inputBg,
              color: isDark ? appColors.darkTheme : appColors.gray,
            },
          ]}
          placeholderTextColor={appColors.financeContent}
        />
      </View>
      <Text style={[styles.title, {textAlign: textRTLStyle}]}>
        {t('financial.myRecharge')}
      </Text>
      <RecentTransaction
        data={mobileRechargeData}
        nameStyle={styles.nameStyle}
        textStyle={styles.textStyle}
      />
    </View>
  );
}
