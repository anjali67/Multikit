import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {frame, design1} from '@utils/images/images';
import styles from '../../styles';
import {useValues} from '@App';

export default function AuthBg(props) {
  const {textRTLStyle, isRTL} = useValues();
  return (
    <View>
      <Image source={frame} style={[styles.imageStyle, props.imageStyle]} />
      <View style={styles.container}>
        <ImageBackground
          resizeMode="contain"
          source={design1}
          style={styles.image}>
          <View style={[styles.textView, props.textView]}>
            <Text
              style={[
                styles.title,
                {textAlign: textRTLStyle, right: isRTL ? 20 : null},
              ]}>
              {props.title}
            </Text>
            <Text
              style={[
                styles.content,
                {textAlign: textRTLStyle, right: isRTL ? 13 : null},
              ]}>
              {props.subTitle}
            </Text>
          </View>
        </ImageBackground>
      </View>
      {props.content}
    </View>
  );
}
