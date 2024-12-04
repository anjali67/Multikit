import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from '../styles';
import {chatUser6} from '@utils/images/images';
import {t} from 'i18next';
import {CallBorderLine} from '@assets/images/chat_theme/svg/callBorderLine';
import {Video} from '@assets/images/chat_theme/svg/video';
import {MessageBorderLine} from '@assets/images/chat_theme/svg/messageBorderLine';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function userView(props) {
  const {viewRTLStyle, isDark} = useValues();
  return (
    <View style={styles.center}>
      <Image source={chatUser6} style={styles.image} />
      <Text
        style={[
          styles.title,
          {
            marginBottom: 3,
            marginTop: 10,
            color: isDark ? appColors.white : appColors.chatText,
          },
        ]}>
        {t('chatting.user7')}
      </Text>
      <Text style={styles.content}>+98656 46461</Text>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            props.navigation.navigate('AudioCalling');
          }}
          style={styles.boxView}>
          <CallBorderLine
            color={appColors.chatText}
            height={'18'}
            width={'18'}
            strokeWidth={'1.6'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            props.navigation.navigate('VideoCalling');
          }}
          style={styles.boxView}>
          <Video
            color={appColors.chatText}
            height={'20'}
            width={'20'}
            strokeWidth={'1.8'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            props.navigation.navigate('ChatTab');
          }}
          style={styles.boxView}>
          <MessageBorderLine
            color={appColors.chatText}
            height={'20'}
            width={'20'}
            strokeWidth={'1.4'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
