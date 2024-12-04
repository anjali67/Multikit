import React from 'react';
import {ScrollView, Image} from 'react-native';
import styles from '../style/styles';
import TextContainer from '@otherComponent/chatting/textContainer';
import {t} from 'i18next';
import SignUpView from './signupView';
import {chatBg} from '@utils/images/images';
import appColors from '@theme/appColors';

export default function chatSignup({navigation}) {
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}
      style={[styles.mainContainer, {backgroundColor: appColors.chattingBg}]}>
      <Image source={chatBg} style={styles.bgImg} />
      <TextContainer
        title={t('signUp.signUp')}
        content={t('chatting.registerContent')}
      />
      <SignUpView navigation={navigation} />
    </ScrollView>
  );
}
