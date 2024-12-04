import React from 'react';
import {View, Text, Image} from 'react-native';
import {onboardDesign, design} from '@utils/images/images';
import fitnessStyle from '../style';
import {t} from 'i18next';
import styles from './styles';
import Button from '@commonComponents/button/button';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import {windowHeight} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default function onBoarding({navigation}) {
  const {textRTLStyle} = useValues();
  return (
    <View style={fitnessStyle.container}>
      <View>
        <Image source={onboardDesign} style={styles.imageStyle} />
        <View style={styles.containerView}>
          <View style={styles.topContainer}>
            <Text style={styles.title}>{t('learning.availableCourses')}</Text>
            <Text style={styles.content}>{t('learning.onBoardingTitle')}</Text>
          </View>
          <View style={styles.container}>
            <Image source={design} style={styles.image} />
          </View>
          <View style={[styles.container, {marginHorizontal: 10}]}>
            <Button
              text={t('learning.createAccount')}
              style={[
                styles.buttonStyle,
                {
                  borderRadius: windowHeight(7),
                  backgroundColor: appColors.white,
                },
              ]}
              btnTextStyle={[styles.btn, {color: appColors.learningBtn}]}
              onPress={() => {
                navigation.navigate('LearningSignUp');
              }}
            />
            <Button
              text={t('onBoarding.signIn')}
              style={[
                styles.buttonStyle,
                {
                  borderRadius: windowHeight(5),
                  borderColor: appColors.white,
                },
              ]}
              btnTextStyle={[
                styles.btn,
                {
                  color: appColors.white,
                  fontSize: fontSizes.FONT23,
                  fontFamily: appFonts.InterRegular,
                },
              ]}
              onPress={() => {
                navigation.navigate('LearningSignIn');
              }}
            />
            <View>
              <Text style={[styles.policy, {textAlign: textRTLStyle}]}>
                {t('learning.policyContent')}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
