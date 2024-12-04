import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import appColors from '../../theme/appColors';
import {useValues} from '@App';
import {windowHeight} from '@theme/appConstant';
import appFonts from '../../theme/appFonts';
import {fontSizes} from '@theme/appConstant';
import {t} from 'i18next';

const BillRow = props => {
  const {viewRTLStyle,currSymbol} = useValues();
  return (
    <View style={[styles.dataView, {flexDirection: viewRTLStyle}]}>
      <Text style={[styles.data, props.titleStyle]}>{t(props.title)}</Text>
      <Text style={[styles.data, props.priceStyle]}>{props.price}</Text>
    </View>
  );
};

export default BillRow;

const styles = StyleSheet.create({
  data: {
    fontSize: fontSizes.FONT20,
    color: appColors.foodContent,
    fontFamily: appFonts.LatoRegular,
  },
  dataView: {
    marginTop: windowHeight(4.7),
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: windowHeight(7),
  },
});
