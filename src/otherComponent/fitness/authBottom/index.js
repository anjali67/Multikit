import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {t} from 'i18next';

export default function authBottom(props) {
  const {isDark} = useValues();
  return (
    <TouchableOpacity
      style={styles.row}
      activeOpacity={0.9}
      onPress={props.onBtnPress}>
      <Text
        style={[
          styles.text,
          {color: isDark ? appColors.cabContent : appColors.white},
        ]}>
        {t(props.createNowText)}
      </Text>

      <Text style={styles.subText}> {t(props.subText)}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.FONT21,
    fontFamily: appFonts.NunitoSansSemiBold,
    color: appColors.white,
    opacity: 0.6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight(25),
  },
  subText: {
    marginHorizontal: windowWidth(1),
    color: appColors.white,
    fontFamily: appFonts.NunitoSansSemiBold,
    fontSize: fontSizes.FONT22,
  },
});
