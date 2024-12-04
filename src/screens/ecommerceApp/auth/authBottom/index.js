import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '@commonComponents/button/button';
import ecommerceStyle from '../../style';
import {authDivider} from '@utils/images/images';
import ButtonWithIcon from '@commonComponents/button/buttonWithIcon';
import {Facebook} from '@assets/images/grocery_assets/svg/facebook';
import {googleLogo} from '@utils/images/images';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function AuthBottom(props) {
  const {textRTLStyle, isDark} = useValues();
  return (
    <View style={ecommerceStyle.center}>
      <Button
        text={props.btnTitle}
        style={[
          styles.btnStyle,
          props.btnStyle,
          {backgroundColor: isDark ? appColors.blackColor : appColors.white},
        ]}
        btnTextStyle={[
          styles.btn,
          {color: isDark ? appColors.white : appColors.ecommerceFont},
        ]}
        onPress={props.goToHomePage}
      />
      <View style={styles.signInView}>
        <Image
          tintColor={isDark && appColors.lightGray}
          source={authDivider}
          style={styles.img}
        />
        <Text
          style={[
            styles.orText,
            {
              backgroundColor: isDark
                ? appColors.white
                : appColors.ecommorcePrimary,
            },
          ]}>
          {t('ecommerceAuth.orText')}
        </Text>
      </View>
      <ButtonWithIcon
        icon={<Facebook width={'20'} height={'20'} color={'#3B5999'} />}
        title={t('ecommerceAuth.continueFacebook')}
      />
      <ButtonWithIcon
        image={googleLogo}
        title={t('ecommerceAuth.continueGoogle')}
      />
      <View style={[styles.blank, props.blankStyle]}></View>
      <TouchableOpacity activeOpacity={0.9} onPress={props.goToScreen}>
        <Text style={styles.textStyle}>{props.accountText}</Text>
      </TouchableOpacity>
    </View>
  );
}
