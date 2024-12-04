import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {loginBg} from '@utils/images/images';
import {groceryLogo} from '@utils/images/images';
import {useTranslation} from 'react-i18next';
import InputField from '@otherComponent/grocery/inputField';
import {Mail} from '@assets/images/grocery_assets/svg/mail';
import {Password} from '@assets/images/grocery_assets/svg/password';
import BottomView from '../../component/bottomView';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default function GrocerySignIn({navigation}) {
  const {t} = useTranslation();
  const {textRTLStyle, isRTL, isDark} = useValues();
  return (
    <ScrollView
      contentContainerStyle={styles.scroll}
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
          {t('signIn.loginAccount')}
        </Text>
        <View style={styles.blankView}></View>
        <InputField keyboardType={"email-address"} placeholder={t('signIn.Email Address')} icon={<Mail />} />
        <InputField secureTextEntry={true} placeholder={t('signIn.Password')} icon={<Password />} />
        <View style={styles.forgotView}>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.forgotText}>
              {t('signIn.Forgot password?')}
            </Text>
          </TouchableOpacity>
        </View>
        <BottomView
          btnText={t('onBoarding.signIn')}
          text={t('signIn.createNow')}
          continuWith={t('signIn.signInWith')}
          goToScreen={() => navigation.navigate('GrocerySignUp')}
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
}
