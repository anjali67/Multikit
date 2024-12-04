import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {BackArrow} from '@assets/images/common/svg/backArrow';
import {t} from 'i18next';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {useValues} from '@App';
import {SideArrow} from '@assets/images/common/svg/sideArrow';

export default function HeaderWithBack({navigation, title, textStyle}) {
  const {viewRTLStyle, isRTL, isDark} = useValues();
  return (
    <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        {isRTL ? <SideArrow height={30} /> : <BackArrow height={30} />}
      </TouchableOpacity>
      <Text
        style={[
          styles.title,
          textStyle,
          {color: isDark ? appColors.white : appColors.black},
        ]}>
        {t(title)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    margin: windowHeight(10),
  },
  title: {
    marginVertical: windowHeight(4),
    marginHorizontal: windowWidth(20),
    color: appColors.black,
    fontFamily: appFonts.PublicSansSemiBold,
    fontSize: fontSizes.FONT20,
  },
});
