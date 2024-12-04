import React from 'react';
import {View, Text} from 'react-native';
import financialStyles from '../../../styles';
import CommonBills from '@otherComponent/financial/commonBills';
import {creditCardData} from '@utils/json/financial';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import {useValues} from '@App';

export default function CreditCardsBills({route, navigation}) {
  const {isDark, isRTL} = useValues();
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
      <CommonBills
        data={creditCardData}
        title={route.params?.name}
        navigation={navigation}
        imageStyle={{height: windowHeight(32), width: windowWidth(40)}}
        nameStyle={{
          marginTop: windowHeight(2),
          fontSize: fontSizes.FONT18HALF,
          width: windowWidth(300),
          right: isRTL ? windowWidth(10) : 0,
        }}
      />
    </View>
  );
}
