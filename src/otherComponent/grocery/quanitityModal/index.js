import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import GridButton from '@commonComponents/button/gridButton';
import {quantity} from '@utils/json/grocery';
import {GlobalStyle} from '@style';
import appColors from '@theme/appColors';
import {t} from 'i18next';
import {useValues} from '@App';

export function QuanitityModal(props) {
  const {textRTLStyle, isDark,currSymbol,currValue  } = useValues();
  return (
    <View
      style={[
        GlobalStyle.modal,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <Text
        style={[
          styles.title,
          {
            textAlign: textRTLStyle,
            color: isDark ? appColors.white : appColors.black,
          },
        ]}>
        {t('productDetailsPage.Select Quantity')}
      </Text>
      <FlatList
        numColumns={2}
        data={quantity}
        columnWrapperStyle={styles.column}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              props.selectQuantity(index), props.setValue(item);
            }}
            style={[
              {
                backgroundColor: isDark
                  ? appColors.blackColor
                  : appColors.category,
                borderColor:
                  props.selectQty === index
                    ? appColors.groceryBtn
                    : isDark
                    ? appColors.black
                    : appColors.border,
              },
              styles.view,
            ]}>
            <Text style={styles.txt}>
              {t(item.gram)} / {currSymbol}{(currValue * item.price).toFixed(2)}
            </Text>
          </TouchableOpacity>
        )}
      />
      <GridButton
        onBtnPress={props.onCancel}
        onBtn1Press={props.onApplyBtn}
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
