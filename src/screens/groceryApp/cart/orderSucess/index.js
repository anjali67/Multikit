import {View, Image, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../../component/header';
import {orderSucess} from '@utils/images/images';
import {t} from 'i18next';
import Button from '@commonComponents/button/button';
import {useValues} from '@App';
import appColors from '../../../../theme/appColors';
import {BackArrow} from '../../../../assets/images/common/svg/backArrow';

export default function GroceryOrderSucess({navigation, route}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <Header backIcon={<BackArrow height={'40'} width={'40'} />} />
      <View style={styles.center}>
        <View style={styles.blank}></View>
        <Image source={orderSucess} style={styles.image} />
        <Text
          style={[
            styles.title,
            {color: isDark ? appColors.white : appColors.black},
          ]}>
          {t('orderSucess.theankyouOrder')}
        </Text>
        <Text style={styles.content}>{t('orderSucess.content')}</Text>
        <Button
          text={t('common.Order Details')}
          style={styles.btnStyle}
          btnTextStyle={styles.btn}
          onPress={() => {
            navigation.navigate('GroceryOrderSummary');
          }}
        />
      </View>
    </View>
  );
}
