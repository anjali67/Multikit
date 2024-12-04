import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Button from '@commonComponents/button/button';
import AuthBottom from '@otherComponent/grocery/authBottom';
import GridBtnWithIcon from '@commonComponents/button/gridBtnWithIcon';
import {Facebook} from '@assets/images/grocery_assets/svg/facebook';
import {Google} from '@assets/images/grocery_assets/svg/google';
import {windowHeight, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {useTranslation} from 'react-i18next';
import appFonts from '@theme/appFonts';
import {useValues} from '@App';

export default function BottomView(props) {
  const {t} = useTranslation();
  const {isDark} = useValues();
  return (
    <View>
      <Button
        text={props.btnText}
        style={[
          styles.btnStyle,
          {backgroundColor: isDark ? appColors.white : appColors.groceryBtn},
        ]}
        btnTextStyle={[
          styles.btn,
          {
            color: isDark ? appColors.black : appColors.white,
          },
        ]}
        onPress={() => {
          props.navigation.navigate('GroceryDrawer');
        }}
      />
      <AuthBottom
        txt={props.text}
        signTxt={props.continuWith}
        onPress={props.goToScreen}
      />
      <GridBtnWithIcon
        text={t('signIn.Google')}
        text1={t('signIn.Facebook')}
        btnBgColor={appColors.redColor}
        btn1BgColor={appColors.blue}
        btnText1Style={{color: appColors.white}}
        onBtnPress={() => {}}
        onBtn1Press={() => {}}
        btn1Icon={<Facebook />}
        btnIcon={<Google />}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => props.navigation.navigate('GroceryDrawer')}>
        <Text style={styles.bottomText}>{t('signIn.Continue as guest')}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomText: {
    textAlign: 'center',
    marginTop: windowHeight(45),
    color: appColors.groceryFont,
    textDecorationLine: 'underline',
    fontSize: fontSizes.FONT19,
  },
  btnStyle: {
    width: '100%',
    backgroundColor: appColors.groceryBtn,
    marginTop: windowHeight(15),
  },
  btn: {
    color: appColors.white,
    fontSize: fontSizes.FONT23,
    fontFamily: appFonts.PublicSansMedium,
  },
});
