import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {groceryOnBoarding, groceryLogo} from '@utils/images/images';
import styles from './styles';
import GridButton from '@commonComponents/button/gridButton';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function GroceryOnBoarding({navigation}) {
  const {t} = useTranslation();
  const {isRTL,isDark} = useValues();
  return (
    <ImageBackground
      resizeMode="cover"
      source={groceryOnBoarding}
      style={styles.image}>
      <View style={styles.blankView}></View>
      <Image source={groceryLogo} style={styles.logo} />
      <Text style={styles.heading}>{t('onBoarding.content')}</Text>
      <View style={styles.blank}></View>
      <GridButton
        text={t('onBoarding.signIn')}
        text1={t('onBoarding.Sign up')}
        btnBgColor={isDark ? appColors.blackColor : appColors.white}
        btn1BgColor={isDark ? appColors.white :appColors.groceryBtn}
        btnTextStyle={{color:isDark ? appColors.white : appColors.groceryBtn}}
        btnText1Style={{color:isDark ? appColors.blackColor : appColors.white}}
        onBtnPress={() => {
          navigation.navigate('GrocerySignIn');
        }}
        onBtn1Press={() => {
          navigation.navigate('GrocerySignUp');
        }}
         btnStyle={isRTL && styles.btnStyle}
        btn1Style={isRTL && styles.btn1Style}
      />
    </ImageBackground>
  );
}
