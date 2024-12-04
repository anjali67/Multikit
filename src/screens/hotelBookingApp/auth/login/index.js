import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import TopContainer from '@otherComponent/hotelBooking/auth/topContainer';
import {hotelStyle} from '../../styles';
import styles from '../styles';
import {t} from 'i18next';
import TextInput from '@otherComponent/hotelBooking/auth/textInput';
import BottomView from '@otherComponent/hotelBooking/auth/bottomView';
import AuthBottom from '@otherComponent/grocery/authBottom';
import {dividerImg} from '@utils/images/images';
import SocialBtn from '../socialBtn';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function hotelLogin({navigation}) {
  const {isDark} = useValues();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        hotelStyle.mainContainer,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <View>
        <TopContainer
          content={
            <>
              <View style={styles.mainView}>
                <Text
                  style={[
                    styles.title,
                    {color: isDark ? appColors.white : appColors.reviewText},
                  ]}>
                  {t('signIn.loginAccount')}
                </Text>
                <TextInput
                  keyboardType={"email-address"}
                  label={t('hotelBooking.emailId')}
                  placeholder={t('hotelBooking.enterEmail')}
                />
                <TextInput 
                  secureTextEntry={true} 
                  label={t('signIn.Password')}
                  placeholder={t('ecommerceAuth.passwordPlaceholder')}
                />
                <BottomView
                  btnTitle={t('ecommerceOnBoarding.login')}
                  onBtnPress={() => {
                    navigation.navigate('HotelBookingDrawer');
                  }}
                  accountText={t('signIn.createNow')}
                  onPress={() => {
                    navigation.navigate('hotelSignUp');
                  }}
                />
                <AuthBottom
                  divivderImg={dividerImg}
                  textStyle={[
                    styles.textStyle,
                    {
                      backgroundColor: isDark
                        ? appColors.blackColor
                        : appColors.white,
                    },
                  ]}
                  signInContainer={styles.signInContainer}
                  signTxt={t('signIn.signInWith')}
                  onPress={() => {}}
                  tintColor={'#A9A9A9'}
                />
                <SocialBtn />
              </View>
            </>
          }
        />
      </View>
    </ScrollView>
  );
}
