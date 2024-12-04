import {ScrollView} from 'react-native';
import React from 'react';
import financiaslStyles from '../styles';
import AccountHeader from './accountHeader';
import PaymentView from './paymentView';
import Account from '@commonComponents/account';
import styles from './styles';
import {financeMenuItems} from '@utils/json/financial';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function financeProfile({navigation}) {
  const {isDark} = useValues();

  return (
    <ScrollView
      style={[
        financiaslStyles.mainContainer,
        {
          backgroundColor: isDark
            ? appColors.financeDarkBg
            : appColors.gradient2,
        },
      ]}>
      <AccountHeader navigation={navigation} />
      <PaymentView />
      <Account
        titleStyle={[
          styles.name,
          {color: isDark ? appColors.blackColor : appColors.gray},
        ]}
        profileData={financeMenuItems}
      />
    </ScrollView>
  );
}
