import React from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import cabStyle from '../../style';
import TextInput from '@otherComponent/cabBooking/textInput';
import {t} from 'i18next';
import {Atsign} from '@assets/images/ecommerce_theme/svg/atsign';
import appColors from '@theme/appColors';
import {FincncePassword} from '@assets/images/ecommerce_theme/svg/password';
import styles from '../styles';
import BtnView from '@otherComponent/cabBooking/btnView';
import AuthBottom from '@otherComponent/grocery/authBottom';
import {useValues} from '@App';
import SocialBtn from '../../../hotelBookingApp/auth/socialBtn';
import {cabDivider} from '@utils/images/images';

export default function cabLogin({navigation}) {
  const {isDark} = useValues();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[cabStyle.mainContainer, {backgroundColor: isDark ? appColors.blackColor : appColors.white}]}>
      <View>
        <TextInput
          placeholder={t('signIn.Email Address')}
          icon={<Atsign strokeWidth={1.8} color={appColors.foodContent} />}
        />
        <TextInput
          placeholder={t('signIn.Password')}
          icon={
            <FincncePassword strokeWidth={1.8} color={appColors.foodContent} />
          }
        />
        <View style={styles.forgotView}>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.forgotText}>
              {t('signIn.Forgot password?')}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.blanView}></View>
        <BtnView
          onBtnPress={() => {
            navigation.navigate('PhoneVerification');
          }}
          btnTitle={t('onBoarding.signIn')}
        />
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            navigation.navigate('CabSignup');
          }}>
          <Text style={styles.text}>{t('signIn.createNow')}</Text>
        </TouchableOpacity>
        <AuthBottom
          divivderImg={cabDivider}
          textStyle={[
            styles.textStyle,
            {
              backgroundColor: isDark ? appColors.blackColor : appColors.white,
            },
          ]}
          signInContainer={styles.signInContainer}
          signTxt={t('signIn.signInWith')}
          onPress={() => {}}
          tintColor={'#A9A9A9'}
        />
        <View style={styles.padding}>
          <SocialBtn
            mainViewStyle={styles.mainViewStyle}
            titleStyle={[styles.titleStyle,{ color: isDark ? appColors.white : appColors.cabText}]}
          />
        </View>
      </View>
    </ScrollView>
  );
}
