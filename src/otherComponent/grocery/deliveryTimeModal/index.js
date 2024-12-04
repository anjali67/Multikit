import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import GridButton from '@commonComponents/button/gridButton';
import {delivery} from '@utils/json/grocery';
import {GlobalStyle} from '@style';
import appColors from '@theme/appColors';
import {t} from 'i18next';
import {useValues} from '@App';

export function DeliveryTimeModal(props) {
  const {textRTLStyle, isDark} = useValues();

  return (
    <View
      style={[
        GlobalStyle.modal,
        {
          backgroundColor: isDark ? appColors.blackColor : appColors.white,
          color: isDark ? appColors.white : appColors.black,
        },
      ]}>
      <Text
        style={[
          styles.title,
          {
            textAlign: textRTLStyle,
            color: isDark ? appColors.white : appColors.black,
          },
        ]}>
        {t('productDetailsPage.Select Time')}
      </Text>
      <FlatList
        numColumns={2}
        data={delivery}
        columnWrapperStyle={styles.column}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => props.selectDelivery(item, index)}
            style={[
              {
                backgroundColor: isDark
                  ? appColors.blackColor
                  : appColors.category,
                borderColor:
                  props.selectDeli === index
                    ? appColors.groceryBtn
                    : isDark
                    ? appColors.black
                    : appColors.border,
              },
              styles.view,
            ]}>
            <Text style={styles.txt}>{t(item.delivery)}</Text>
          </TouchableOpacity>
        )}
      />
      <GridButton
        onBtnPress={props.onPress}
        onBtn1Press={props.onApplyDeliverTime}
        btnStyle={styles.buttonStyle}
        btnTextStyle={styles.btnTextStyle}
        btn1Style={styles.ButtonStyle}
        btnText1Style={styles.buttonText}
        text={t('common.Cancel')}
        text1={t('common.Apply')}
      />
    </View>
  );
}
