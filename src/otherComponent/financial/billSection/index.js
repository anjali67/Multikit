import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {t} from 'i18next';
import {useValues} from '@App';
import {bills} from '@utils/json/financial';
import styles from './styles';
import appColors from '@theme/appColors';
import {windowWidth} from '@theme/appConstant';

export default function BillSection() {
  const {viewRTLStyle, textRTLStyle, isDark, currSymbol, currValue, isRTL} =
    useValues();
  return (
    <View style={styles.mainContainer}>
      <FlatList
        inverted={isRTL ? true : false}
        contentContainerStyle={[
          styles.contentContainerStyle,
          {right: isRTL && windowWidth(12)},
        ]}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={bills}
        renderItem={({item, index}) => {
          return (
            <View
              style={[
                styles.container,
                {
                  backgroundColor:
                    isDark && item.darkBgColor
                      ? item.darkBgColor
                      : item.bgColor,
                  paddingHorizontal:
                    index == 0 ? windowWidth(12) : windowWidth(22),
                },
              ]}>
              <Text
                style={[
                  styles.name,
                  {
                    color:
                      index == 0 ? appColors.financeContent : appColors.white,
                    textAlign: textRTLStyle,
                  },
                ]}>
                {t(item.name)}
              </Text>
              <Text
                style={[
                  styles.billNumber,
                  {
                    color:
                      index == 1
                        ? appColors.gray
                        : index == 2
                        ? appColors.white
                        : appColors.inActiveIcon,
                    textAlign: textRTLStyle,
                  },
                ]}>
                {t(item.billNumber)}
              </Text>
              <View style={styles.blank}></View>
              <Text
                style={[
                  styles.name,
                  {
                    color:
                      index == 1
                        ? appColors.gray
                        : index == 2
                        ? appColors.white
                        : appColors.inActiveIcon,
                    textAlign: textRTLStyle,
                  },
                ]}>
                {t('financial.totalBill')}
              </Text>
              <View
                style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
                <Text
                  style={[
                    styles.name,
                    {
                      color:
                        index == 0 ? appColors.financeContent : appColors.white,
                    },
                  ]}>
                  {currSymbol}
                  {(currValue * item.totalBill).toFixed(2)}
                </Text>
                <Text
                  style={[
                    styles.name,
                    {maxWidth: 120},
                    index == 1
                      ? [
                          styles.paidStyle,
                          {left: isRTL ? windowWidth(20) : null},
                        ]
                      : styles.expired,

                    {
                      color: index == 2 ? appColors.white : appColors.black ,
                    },
                  ]}>
                  {t(item.expired)}
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.9}
                style={index == 0 ? styles.buttonView : styles.btnView}>
                <Text style={index == 0 ? styles.buttonStyle : styles.btnText}>
                  {t(item.billPay)}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}
