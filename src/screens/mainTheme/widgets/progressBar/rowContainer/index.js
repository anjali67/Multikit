import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {t} from 'i18next';
import appFonts from '@theme/appFonts';
import {useValues} from '@App';

export default function rowContainer(props) {
  const {isDark, viewRTLStyle, isRTL} = useValues();
  return (
    <View>
      <View
        style={[
          styles.container,
          props.containerStyle,
          {flexDirection: viewRTLStyle},
        ]}>
        <View style={[styles.verticalLine, {left: isRTL ? 20 : null}]}></View>
        <Text
          style={[
            styles.label,
            {color: isDark ? appColors.white : appColors.fontColor},
          ]}>
          {t(props.title)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: windowHeight(10),
    alignItems: 'center',
  },
  verticalLine: {
    height: windowHeight(18),
    borderColor: appColors.green,
    borderWidth: 2,
    marginLeft: windowWidth(20),
  },
  label: {
    marginHorizontal: windowWidth(14),
    color: appColors.fontColor,
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT21,
  },
});
