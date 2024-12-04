import React from 'react';
import {View} from 'react-native';
import styles from '../../styles';
import chattingStyles from '../../styles';
import BackgroundView from '@otherComponent/chatting/backGroundView';
import TextContainer from '@otherComponent/chatting/textContainer';
import OTPTextView from 'react-native-otp-textinput';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import Button from '@commonComponents/button/button';
import {windowHeight} from '@theme/appConstant';
import {useValues} from '@App';

export default function chatOtp({navigation}) {
  const {isDark} = useValues();
  return (
    <View style={styles.mainContainer}>
      <BackgroundView
        content={
          <View>
            <TextContainer
              title={t('chatting.verifyMobile')}
              content={t('chatting.verifyContent')}
            />
            <OTPTextView
              inputCount={4}
              textInputStyle={styles.otpInput}
              tintColor={appColors.chatContent}
              offTintColor={appColors.chatContent}
              containerStyle={{marginHorizontal: windowHeight(15)}}
            />
            <View style={styles.center}>
              <Button
                onPress={() => {
                  navigation.navigate('ChatTab');
                }}
                text={t('chatting.verifyLogin')}
                style={[
                  chattingStyles.buttonStyle,
                  {
                    marginTop: 8,
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
          </View>
        }
      />
    </View>
  );
}
