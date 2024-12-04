import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from '../signIn/styles';
import {loginBg} from '@utils/images/images';
import {groceryLogo} from '@utils/images/images';
import {useTranslation} from 'react-i18next';
import InputField from '@otherComponent/grocery/inputField';
import {Mail} from '@assets/images/grocery_assets/svg/mail';
import {Password} from '@assets/images/grocery_assets/svg/password';
import {User} from '@assets/images/grocery_assets/svg/user';
import {windowHeight} from '@theme/appConstant';
import BottomView from '../../component/bottomView';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';

export default function GrocerySignUp({navigation}) {
  const {t} = useTranslation();
  const {viewSelfRTLStyle, textRTLStyle, isRTL, isDark} = useValues();
  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: windowHeight(20)}}
      style={[
        styles.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}
      showsVerticalScrollIndicator={false}>
      <Image source={loginBg} style={styles.imageStyle} />
      <View style={styles.mainView}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: isRTL ? 'flex-end' : 'flex-start',
            marginTop: isRTL ? windowWidth(25) : 0,
            marginHorizontal: isRTL ? windowWidth(20) : 0,
          }}>
          <Image source={groceryLogo} style={styles.logo} />
        </View>

        <Text style={[styles.textStyle, {textAlign: textRTLStyle}]}>
          {t('signIn.signInContent')}
        </Text>
        <Text
          style={[
            styles.title,
            {
              textAlign: textRTLStyle,
              color: isDark ? appColors.white : appColors.black,
            },
          ]}>
          {t('signUp.registerAccount')}
        </Text>
        <View style={styles.blankView}></View>
        <InputField placeholder={t('signUp.Full Name')} icon={<User />} />
        <InputField keyboardType={"email-address"} placeholder={t('signIn.Email Address')} icon={<Mail />} />
        <InputField  secureTextEntry={true}  placeholder={t('signIn.Password')} icon={<Password />} />
        <BottomView
          btnText={t('signUp.signUp')}
          text={t('signUp.aleradyAccount')}
          continuWith={t('signIn.signInWith')}
          goToScreen={() => navigation.navigate('GrocerySignIn')}
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
}
