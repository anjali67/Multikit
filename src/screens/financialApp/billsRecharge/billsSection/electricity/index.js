import React from 'react';
import {View, Text} from 'react-native';
import financialStyles from '../../../styles';
import CommonBills from '@otherComponent/financial/commonBills';
import {electricityData} from '@utils/json/financial';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function electricityBills({route, navigation}) {
  const {isDark} = useValues();
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
        data={electricityData}
        title={route.params?.name}
        navigation={navigation}
      />
    </View>
  );
}
