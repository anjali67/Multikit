import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useValues} from '@App';
import styles from '../../styles';
import appColors from '@theme/appColors';
import {t} from 'i18next';
import {dividerImg} from '@utils/images/images';
import SocialView from './socialView';
import {googleLogo, fbImg, appleLogo} from '@utils/images/images';

export default function authBottom(props) {
  const {isDark, viewRTLStyle} = useValues();
  return (
    <View>
      <TouchableOpacity activeOpacity={0.9} onPress={props.onBtnClick}>
        <Text
          style={[
            styles.text,
            {
              color: isDark ? appColors.white : appColors.learningPlaceholder,
            },
          ]}>
          {t(props.createNowText)}
        </Text>
      </TouchableOpacity>
      <View style={styles.signInView}>
        <Image source={dividerImg} style={styles.img} />
        <Text
          style={[
            styles.signIn,
            {backgroundColor: isDark ? appColors.darkPrimary : appColors.white},
          ]}>
          {t(props.signTxt)}
        </Text>
      </View>
      <View style={[styles.socialView, {flexDirection: viewRTLStyle}]}>
        <SocialView image={googleLogo} title={t('signIn.Google')} />
        <SocialView image={appleLogo} title={t('learning.apple')} />
        <SocialView image={fbImg} title={t('signIn.Facebook')} />
      </View>
    </View>
  );
}
