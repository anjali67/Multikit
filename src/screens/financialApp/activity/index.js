import {View, ScrollView} from 'react-native';
import React from 'react';
import financiaslStyles from '../styles';
import SearchTextInput from '@otherComponent/ecommerce/searchTextInput';
import appColors from '@theme/appColors';
import {t} from 'i18next';
import RecentTransaction from '@otherComponent/financial/recentTransaction';
import {activityData} from '@utils/json/financial';
import HomeHeader from '@otherComponent/financial/homeHeader';
import styles from './styles';
import {useValues} from '@App';

export default function financeActivity() {
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
      <HomeHeader mainContainer={styles.mainContainer} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <SearchTextInput
            notShowSerachIcon
            inputContainer={[
              styles.inputContainer,
              {
                backgroundColor: isDark
                  ? appColors.financeDarkBg
                  : appColors.financeBg,
              },
            ]}
            placeholder={t('financial.searchHere')}
            placeholderTextColor={appColors.financeContent}
            textInput={[
              styles.textInput,
              {textAlign: textRTLStyle, color: appColors.financeContent},
            ]}
          />
          <RecentTransaction data={activityData} mainContainer={styles.top} />
        </View>
      </ScrollView>
    </View>
  );
}
