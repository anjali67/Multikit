import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {ecommerceOnBoarding} from '@utils/images/images';
import styles from './styles';
import Button from '@commonComponents/button/button';
import {t} from 'i18next';
import ecommerceStyles from '../style/index';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function EcommerceOnBoarding({navigation}) {
  const {isDark} = useValues();
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        blurRadius={0.42}
        source={ecommerceOnBoarding}
        style={styles.image}>
        <View style={ecommerceStyles.center}>
          <Button
            text={t('onBoarding.GetStarted')}
            style={[
              ecommerceStyles.buttonStyle,
              {
                backgroundColor: isDark
                  ? appColors.blackColor
                  : appColors.white,
              },
            ]}
            btnTextStyle={[
              ecommerceStyles.btn,
              {color: isDark ? appColors.white : appColors.ecommerceFont},
            ]}
            onPress={() => {
              navigation.navigate('EcommerceSignIn');
            }}
          />
          <Button
            text={t('ecommerceOnBoarding.login')}
            style={styles.loginStyle}
            btnTextStyle={styles.loginBtn}
            onPress={() => {
              navigation.navigate('EcommerceSignIn');
            }}
          />
          <View style={styles.content}>
            <Text style={styles.contentStyle}>
              {t('ecommerceOnBoarding.content')}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
