import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {t} from 'i18next';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default function gradiantBtn(props) {
  return (
    <View style={styles.center}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={props.onBtnPress}
        style={styles.button}>
        <LinearGradient
          colors={['#1E80EC', '#4466F2']}
          style={styles.button}
          start={{x: 1, y: 0.5}}
          end={{x: 1, y: 1}}>
          <View activeOpacity={0.9}>
            <Text style={styles.buttonText}>{t(props.title)}</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth(485),
    height: windowHeight(40),
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 6,

    borderRadius: windowHeight(5),
    width: '98%',
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight(43),
  },
  buttonText: {
    color: appColors.white,
    fontFamily: appFonts.NunitoSansRegular,
    fontSize: fontSizes.FONT23,
  },
});
