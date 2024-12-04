import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import RecentTransaction from '@otherComponent/financial/recentTransaction';
import HeaderView from '@screens/financialApp/pay/headerView';
import SearchTextInput from '@otherComponent/ecommerce/searchTextInput';
import {t} from 'i18next';
import {useValues} from '@App';
import styles from './styles';
import appColors from '@theme/appColors';

export default function commonBills(props) {
  const {textRTLStyle, isDark} = useValues();
  return (
    <View style={{flex: 1}}>
      <HeaderView
        showUserDetails={false}
        showHederText={true}
        title={t(props.title)}
        navigation={props.navigation}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.blankView}></View>
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
              {
                textAlign: textRTLStyle,
                color: isDark ? appColors.darkTheme : appColors.gray,
              },
            ]}
          />
          <Text style={[styles.title, {textAlign: textRTLStyle}]}>
            {t('financial.myRecharge')}
          </Text>
          <RecentTransaction
            data={props.data}
            mainContainer={styles.top}
            nameStyle={props.nameStyle ? props.nameStyle : styles.nameStyle}
            container={styles.container}
            imageStyle={props.imageStyle ? props.imageStyle : styles.imageStyle}
          />
        </View>
      </ScrollView>
    </View>
  );
}
