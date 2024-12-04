import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {curruncy} from '@utils/json/mainTheme';
import {setValue} from '@utils/localStorage';
import {useValues} from '../../../App';
import {fontSizes, windowWidth} from '@theme/appConstant';
import styles from './styles';
import {GlobalStyle} from '../../style';
import {t} from 'i18next';
import appColors from '@theme/appColors';

export default function CurrencyConverter(props) {
  const {setCurrSymbol, setCurrValue, viewRTLStyle, isDark, textRTLStyle} =
    useValues();
  const [currencys] = useState(curruncy);

  const changeCurrency = (curruncyIcon, curruncyValue) => {
    setValue('curruncySymbol', curruncyIcon.toString());
    setValue('curruncyValue', curruncyValue.toString());
    setCurrSymbol(curruncyIcon);
    setCurrValue(curruncyValue);
    props.visibleCurrencyModal();
  };
  return (
    <View
      style={[
        GlobalStyle.modal,
        {backgroundColor: isDark ? appColors.darkPrimary2 : appColors.white},
      ]}>
      <Text
        style={[
          styles.text,
          {
            color: isDark ? appColors.green : appColors.blackColor,
            fontSize: fontSizes.FONT21HALF,
            textAlign: textRTLStyle,
          },
        ]}>
        {t('mainTheme.selectCurruncy')}
      </Text>
      {currencys.map((item, key) => (
        <TouchableOpacity
          key={key}
          activeOpacity={0.8}
          onPress={() => changeCurrency(item.key, item.value)}
          style={[styles.icon, {flexDirection: viewRTLStyle}]}>
          {item.icons}
          <Text
            style={[
              styles.text,
              {
                marginLeft: windowWidth(20),
                color: isDark ? appColors.white : appColors.fontColor,
              },
            ]}>
            {t(item.name)}{' '}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
