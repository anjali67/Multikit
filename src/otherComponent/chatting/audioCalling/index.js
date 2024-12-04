import React from 'react';
import {View, Text, Image} from 'react-native';
import CallBg from '../callBg';
import styles from './styles';
import {chatUser5} from '@utils/images/images';
import {t} from 'i18next';
import {chatBg} from '@utils/images/images';
import {Volume1} from '@assets/images/chat_theme/svg/volume1';
import {Video} from '@assets/images/chat_theme/svg/video';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function audioCalling({navigation}) {
  const {isDark} = useValues();
  return (
    <View>
      <CallBg
        navigation={navigation}
        bgImag={chatBg}
        icon={<Volume1 />}
        icon1={
          <Video
            color={appColors.chatText}
            strokeWidth={'1.6'}
            height={'38'}
            width={'29'}
          />
        }
        mainView={styles.mainView}
        mainContainer={styles.mainContainer}
        content={
          <View style={styles.main}>
            <Image source={chatUser5} style={styles.image} />
            <Text
              style={[
                styles.title,
                {color: isDark ? appColors.white : appColors.chatText},
              ]}>
              {t('chatting.user7')}
            </Text>
            <Text style={styles.time}>5.05</Text>
          </View>
        }
      />
    </View>
  );
}
