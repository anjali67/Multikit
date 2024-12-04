import React from 'react';
import {View} from 'react-native';
import BackgroundView from '@otherComponent/chatting/backGroundView';
import TextContainer from '@otherComponent/chatting/textContainer';
import {t} from 'i18next';
import TextInput from '@otherComponent/chatting/textInput';
import chattingStyles from '../../styles';
import Button from '@commonComponents/button/button';
import styles from '../style/styles';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function chatLogin({navigation}) {
  const {isDark} = useValues();
  return (
    <View style={styles.mainContainer}>
      <BackgroundView
        content={
          <View>
            <TextContainer
              title={t('chatting.enterNumber')}
              content={t('chatting.numberContent')}
            />
            <View style={styles.inputContainer}>
              <TextInput
                keyboardType={'numeric'}
                main={styles.main}
                inputRow={styles.inputRow}
                showDropDownIcon
                label={'chatting.countrtCode'}
                placeholder={'chatting.country'}
              />
              <TextInput
                keyboardType={'numeric'}
                main={styles.mainStyle}
                inputRow={styles.inputView}
                label={'financial.mobileNumber'}
                placeholder={'989-999-5612'}
              />
            </View>
            <View style={styles.center}>
              <Button
                onPress={() => {
                  navigation.navigate('ChatOtp');
                }}
                text={t('otp.Continue')}
                style={[
                  chattingStyles.buttonStyle,
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
          </View>
        }
      />
    </View>
  );
}
