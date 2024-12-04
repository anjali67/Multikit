import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '../../../../theme/appColors';
export default function paymentView() {
  const {viewRTLStyle, textRTLStyle,isDark} = useValues();
  return (
    <View style={[styles.container, {flexDirection: viewRTLStyle, backgroundColor: isDark ? appColors.gray :  appColors.fontColor,}]}>
      <View>
        <Text style={[styles.title, {textAlign: textRTLStyle, color: isDark ? appColors.black : appColors.white}]}>
          {t('orderDetailPage.paymentMethod')}:
        </Text>
        <Text style={[styles.content,{ color: isDark ? appColors.black : appColors.gray}]}>{t('financial.bankAccount')}</Text>
      </View>
      <View style={styles.mainView}>
        <Text style={styles.plusView}>＋</Text>
      </View>
    </View>
  );
}
