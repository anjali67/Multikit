import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import styles from '../styles';
import {Send} from '@assets/images/chat_theme/svg/send';
import {t} from 'i18next';
import EmojiPicker from 'rn-emoji-keyboard';
import Attachment from 'react-native-vector-icons/Entypo';

import {useValues} from '@App';
import {smileImg} from '@utils/images/images';
import appColors from '@theme/appColors';

export default function chatInput(props) {
  const [showEmojipicker, setShowEmojiPicker] = useState(false);
  const {textRTLStyle, viewRTLStyle, isDark} = useValues();

  return (
    <ScrollView>
      <View>
        <View
          style={[
            styles.inputBg,
            {
              flexDirection: viewRTLStyle,
              backgroundColor: isDark
                ? appColors.darkTheme
                : appColors.chatInput,
            },
          ]}>
          <TouchableOpacity onPress={() => setShowEmojiPicker(true)}>
            <Image source={smileImg} style={styles.emojiImg} />
          </TouchableOpacity>
          <TextInput
            value={props.value}
            placeholderTextColor={appColors.chatContent}
            style={[
              styles.inputView,
              {
                textAlign: textRTLStyle,
                color: isDark ? appColors.white : appColors.chatText,
              },
            ]}
            placeholder={t('chatting.typeSomething')}
            onChangeText={props.onChangeText}
          />
          <TouchableOpacity
            onPress={() => {
              props.setShowModal(true);
            }}>
            <Attachment
              color={isDark ? appColors.white : appColors.blackColor}
              name="attachment"
              size={18}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.handleSendMessage();
            }}
            activeOpacity={0.9}
            style={styles.circleView}>
            <Send />
          </TouchableOpacity>
        </View>
        <EmojiPicker
          onEmojiSelected={props.handleEmojiSelect}
          open={showEmojipicker}
          onClose={() => setShowEmojiPicker(false)}
        />
      </View>
    </ScrollView>
  );
}
