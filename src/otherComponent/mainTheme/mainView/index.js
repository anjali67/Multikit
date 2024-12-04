import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {t} from 'i18next';
import { useNavigation } from '@react-navigation/native';

export default function mainView({item, index}) {
  const {viewRTLStyle, isRTL, textRTLStyle, isDark} = useValues();
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
       navigation.navigate(item.gotoScreen);
      }}
      style={[
        styles.container,
        {
          flexDirection: viewRTLStyle,
          backgroundColor: isDark ? appColors.blackColor : appColors.white,
        },
      ]}>
      <View>
        <Text style={styles.letter}>{index + 1}</Text>
      </View>
      <View style={[styles.left, {left: isRTL ? 10 : null}]}>
        <Text
          style={[
            styles.heading,
            {
              textAlign: textRTLStyle,
              color: isDark ? appColors.white : appColors.fontColor,
            },
          ]}>
          {t(item.title)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.white,
    marginVertical: windowHeight(2),
    marginHorizontal: windowWidth(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(6),
    borderColor: appColors.lightGray,
    borderWidth: 1.5,
    padding: windowHeight(10),
    marginTop: windowHeight(12),
  },
  left: {
    width: '90%',
    paddingHorizontal: windowWidth(10),
  },
  letter: {
    color: appColors.lightGreen,
    fontSize: fontSizes.FONT28,
    fontFamily: appFonts.MontserratMedium,
  },
  heading: {
    color: appColors.fontColor,
    fontSize: fontSizes.FONT18HALF,
    fontFamily: appFonts.MontserratRegular,
  },
});
