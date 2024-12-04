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
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function hotelSignUp({navigation}) {
  const {isDark} = useValues();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
      style={hotelStyle.mainContainer}>
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
                  {t('hotelBooking.signup')}
                </Text>
                <TextInput
                  label={t('signUp.Full Name')}
                  placeholder={t('hotelBooking.enterFullName')}
                />
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
                  btnTitle={t('hotelBooking.signupBtn')}
                  accountText={t('financial.aleradyAccount')}
                  onPress={() => {
                    navigation.navigate('HotelLogin');
                  }}
                  onBtnPress={() => {
                    navigation.navigate('HotelBookingDrawer');
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
                  signTxt={t('hotelBooking.signupWith')}
                  onPress={() => {}}
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
