import React from 'react';
import {View, Text} from 'react-native';
import financialStyles from '../../../styles';
import CommonBills from '@otherComponent/financial/commonBills';
import {BroadbandRechargeData} from '@utils/json/financial';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import {useValues} from '@App';

export default function broadBandRecharge({route, navigation}) {
  const {isDark} = useValues();
  return (
    <View style={[financialStyles.mainContainer,{backgroundColor:isDark ? appColors.financeDarkBg : appColors.gradient2}]}>
      <CommonBills
        data={BroadbandRechargeData}
        title={route.params?.name}
        navigation={navigation}
        imageStyle={{height: windowHeight(30), width: windowWidth(38)}}
        nameStyle={{marginTop: windowHeight(2), fontSize: fontSizes.FONT18HALF}}
      />
    </View>
  );
}
