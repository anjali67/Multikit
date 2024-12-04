import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import financialStyles from '../styles';
import HomeHeader from '@otherComponent/financial/homeHeader';
import HomeBanner from '@otherComponent/financial/homeBanner';
import PaymentSection from '@otherComponent/financial/paymentSection';
import BillsRecharge from '@otherComponent/financial/billsRecharge';
import HeadingText from '@commonComponents/headingText';
import {t} from 'i18next';
import {useValues} from '@App';
import PeopleSection from '@otherComponent/financial/peopelSection';
import RecentTransaction from '@otherComponent/financial/recentTransaction';
import BillSection from '@otherComponent/financial/billSection';
import {BillsRechrge} from '@utils/json/financial';
import {recentTransactionData} from '@utils/json/financial';
import appColors from '@theme/appColors';
import {windowWidth} from '../../../theme/appConstant';

export default function financeHome({navigation}) {
  const {isDark, textRTLStyle} = useValues();
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
      <HomeHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <HomeBanner />
          <PaymentSection />
          <Text
            style={[
              financialStyles.title,
              {
                textAlign: textRTLStyle,
                color: isDark ? appColors.blackColor : appColors.white,
              },
            ]}>
            {t('financial.biilsRecharge')}
          </Text>
          <BillsRecharge
            name={styles.name}
            navigation={navigation}
            data={BillsRechrge}
          />
          <HeadingText
            textStyle={[
              financialStyles.textStyle,
              {color: isDark ? appColors.blackColor : appColors.white},
            ]}
            seeAllStyle={financialStyles.seeAllStyle}
            title={t('financial.People')}
            seeAll={t('financial.seeMore')}
          />
          <PeopleSection navigation={navigation} />
          <Text
            style={[
              financialStyles.title,
              {
                textAlign: textRTLStyle,
                left: 6,
                color: isDark ? appColors.blackColor : appColors.white,
              },
            ]}>
            {t('financial.recentTransaction')}
          </Text>
          <RecentTransaction data={recentTransactionData} />
          <Text
            style={[
              financialStyles.title,
              {
                textAlign: textRTLStyle,
                color: isDark ? appColors.blackColor : appColors.white,
              },
            ]}>
            {t('financial.yourBills')}
          </Text>
          <BillSection />
        </View>
      </ScrollView>
    </View>
  );
}

export const styles = StyleSheet.create({
  name: {
    right: windowWidth(16),
  },
});
