import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import financiaslStyles from '../styles';
import HomeHeader from '@otherComponent/financial/homeHeader';
import BillSection from '@otherComponent/financial/billSection';
import BillsRecharge from '@otherComponent/financial/billsRecharge';
import {t} from 'i18next';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {BillsRechrge} from '@utils/json/financial';
import {bookingNow} from '@utils/json/financial';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function financePayment({navigation}) {
  const {textRTLStyle, isDark} = useValues();

  return (
    <View
      style={[
        financiaslStyles.mainContainer,
        {
          backgroundColor: isDark
            ? appColors.financeDarkBg
            : appColors.gradient2,
        },
      ]}>
      <HomeHeader />
      <ScrollView
        contentContainerStyle={financiaslStyles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View>
          <BillSection />
          <Text
            style={[
              financiaslStyles.title,
              {
                textAlign: textRTLStyle,
                color: isDark ? appColors.blackColor : appColors.white,
              },
            ]}>
            {t('financial.biilsRecharge')}
          </Text>
          <BillsRecharge
            data={BillsRechrge}
            container={styles.container}
            name={styles.name}
            textContainer={styles.textContainer}
            navigation={navigation}
          />
          <Text
            style={[
              financiaslStyles.title,
              {
                textAlign: textRTLStyle,
                color: isDark ? appColors.blackColor : appColors.white,
              },
            ]}>
            {t('financial.bookingNow')}
          </Text>
          <BillsRecharge
            data={bookingNow}
            container={styles.container}
            name={styles.name}
            textContainer={styles.textContainer}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: windowHeight(4),
  },
  name: {
    opacity: 0.7,
  },
  textContainer: {
    marginHorizontal: windowWidth(18),
  },
});
