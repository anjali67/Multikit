import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {EmojiIcon} from '@assets/images/blog_theme/svg/emoji';
import {CameraIcon} from '@assets/images/blog_theme/svg/camera';
import {MicIcon} from '@assets/images/blog_theme/svg/mic';
import styles from '../styles';
import {t} from 'i18next';
import {useValues} from '@App';

export default function bottomView(props) {
  const {isDark, viewRTLStyle, textRTLStyle} = useValues();

  return (
    <View style={[styles.bottomRow, {flexDirection: viewRTLStyle}]}>
      <View style={[styles.bottomContainer, {flexDirection: viewRTLStyle}]}>
        <EmojiIcon />
        <CameraIcon />
        <MicIcon />
      </View>
      <TouchableOpacity
        onPress={props.onPress}
        activeOpacity={0.9}
        style={styles.btnView}>
        <Text style={styles.btnText}>{t('blog.done')}</Text>
      </TouchableOpacity>
    </View>
  );
}
