import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {useValues} from '@App';

export default function textContainer(props) {
  const {isDark, textRTLStyle} = useValues();
  return (
    <View style={styles.mainView}>
      <Text
        style={[
          styles.title,

          {
            textAlign: textRTLStyle,
            color: isDark ? appColors.white : appColors.chatText,
          },
          props.titleStyle,
        ]}>
        {props.title}
      </Text>
      <Text
        style={[styles.content, props.contentStyle, {textAlign: textRTLStyle}]}>
        {props.content}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: appColors.chatText,
    fontSize: fontSizes.FONT26,
    fontFamily: appFonts.RubikMedium,
  },
  mainView: {
    marginVertical: windowHeight(20),
    marginHorizontal: windowWidth(20),
  },
  content: {
    color: appColors.chatContent,
    fontFamily: appFonts.RubikRegular,
    fontSize: fontSizes.FONT19,
    marginTop: windowHeight(2),
  },
});
