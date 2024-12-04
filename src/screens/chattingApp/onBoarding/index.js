import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import BackgroundView from '@otherComponent/chatting/backGroundView';
import TextContainer from '@otherComponent/chatting/textContainer';
import {t} from 'i18next';
import Button from '@commonComponents/button/button';
import chattingStyles from '../styles';
import {GlobalStyle} from '../../../style';
import styles from './styles';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function chatOnBoarding({navigation}) {
  const {isDark} = useValues();
  return (
    <View style={styles.mainView}>
      <BackgroundView
        content={
          <View style={styles.marginTop}>
            <TextContainer
              contentStyle={styles.contentStyle}
              titleStyle={styles.titleStyle}
              title={t('chatting.welcomeText')}
              content={t('chatting.welcomeContent')}
            />
            <View style={GlobalStyle.center}>
              <Button
                onPress={() => {
                  navigation.navigate('ChatSignup');
                }}
                text={t('chatting.joinNow')}
                style={[
                  chattingStyles.buttonStyle,
                  styles.btn,
                  {
                    backgroundColor: isDark
                      ? appColors.blackColor
                      : appColors.white,
                  },
                ]}
                btnTextStyle={[
                  chattingStyles.btn,
                  {color: isDark ? appColors.white : appColors.chatText},
                ]}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                navigation.navigate('ChatLogin');
              }}
              style={styles.mainContainer}>
              <Text style={styles.createText}>
                {t('chatting.aleradyMember')}
              </Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
}
