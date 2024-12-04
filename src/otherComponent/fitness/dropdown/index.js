import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import {ArrowDown} from '@assets/images/hotel_theme/svg/arrowDown';
import {t} from 'i18next';
import appFonts from '@theme/appFonts';
import {useValues} from '@App';

export default function dropDown(props) {
  const {isDark, viewRTLStyle} = useValues();
  return (
    <View
      style={[
        style.container,
        {
          backgroundColor: isDark
            ? appColors.darkTheme
            : appColors.verticalLine,
          flexDirection: viewRTLStyle,
        },
      ]}>
      <Text style={style.title}>{t(props.title)}</Text>
      <ArrowDown strokeWidth={1.5} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: appColors.verticalLine,
    height: windowHeight(40),
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: windowHeight(6),
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth(28),
    borderRadius: windowHeight(4),
  },
  title: {
    color: appColors.cabContent,
    fontFamily: appFonts.NunitoSansSemiBold,
    fontSize: fontSizes.FONT19HALF,
  },
});
