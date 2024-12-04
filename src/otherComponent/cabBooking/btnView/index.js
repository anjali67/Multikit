import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default function btnView(props) {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={props.onBtnPress}>
      <LinearGradient
        colors={[
          props.onBoardGradiant2
            ? props.onBoardGradiant2
            : appColors.onBoardGradiant2,
          props.onBoardGradiant3
            ? props.onBoardGradiant3
            : appColors.onBoardGradiant3,
        ]}
        style={[styles.containerView, props.containerView]}
        start={{x: 1, y: 0.2}}
        end={{x: 1, y: 1}}>
        <View>
          <Text style={[styles.title, props.title]}>{props.btnTitle}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerView: {
    marginHorizontal: windowWidth(20),
    marginTop: windowWidth(15),
    padding: windowWidth(15),
    borderRadius: windowWidth(23),
    paddingVertical: windowHeight(12),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight(10),
  },
  title: {
    color: appColors.white,
    fontFamily: appFonts.InterMedium,
    fontSize: fontSizes.FONT22,
  },
});
