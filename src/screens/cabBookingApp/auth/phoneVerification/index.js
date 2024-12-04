import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';
import {t} from 'i18next';
import TextInput from '@otherComponent/cabBooking/textInput';
import {DownArrow} from '@assets/images/common/svg/downArrow';
import {uk} from '@utils/images/images';
import {Phone} from '@assets/images/cab_theme/svg/phone';
import BtnView from '@otherComponent/cabBooking/btnView';
import {windowHeight} from '@theme/appConstant';
import cabStyle from '../../style';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function phoneVerification({navigation}) {
  const {textRTLStyle,isDark} = useValues();
  return (
    <View style={[cabStyle.mainContainer,{backgroundColor:isDark ? appColors.blackColor : appColors.white}]}>
      <View style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Text style={[styles.name, {textAlign: textRTLStyle, color: isDark ? appColors.white : appColors.cabText}]}>
            {t('cabBooking.enterNumber')}
          </Text>
          <Text style={[styles.content, {textAlign: textRTLStyle}]}>
            {t('cabBooking.numberContent')}
          </Text>
        </View>
        <View style={styles.blanView}></View>
        <TextInput
          placeholder={t('cabBooking.unitedKingdom')}
          icon={<DownArrow strokeWidth={1.8} color={appColors.foodContent} />}
          mainContainer={styles.mainContainer}
          showLeftIcon={true}
          image={uk}
        />
        <TextInput
          placeholder={t('signIn.phoneNumber')}
          icon={<Phone strokeWidth={1.8} color={appColors.foodContent} />}
          mainContainer={styles.mainContainer}
        />
      </View>
      <View style={{height: windowHeight(10)}}></View>
      <BtnView
        onBtnPress={() => {
          navigation.navigate('VerifyNumber');
        }}
        btnTitle={t('cabBooking.sendCode')}
      />
    </View>
  );
}
