import React from 'react'
import { View, StyleSheet } from 'react-native'
import fitnessStyle from '../style'
import {useValues} from '@App';
import appColors from '@theme/appColors';
import { windowHeight,windowWidth } from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import { fontSizes } from '@theme/appConstant';
import FocusSection from '@otherComponent/fitness/home/focusSection';
import TextContentView from '@otherComponent/fitness/stepperSlider/textContent';

export default function fitnessListing({navigation}) {
  const {isDark} = useValues();
  return (
    <View   style={[
      fitnessStyle.container,
      {backgroundColor: isDark ? appColors.blackColor : appColors.white},
    ]}>
        <TextContentView
          containerStyle={style.containerStyle}
          title={'fitness.bodyFocus'}
          titleStyle={style.titleStyle}
        />
        <FocusSection navigation={navigation} />
    </View>
  )
}

const style = StyleSheet.create({
  containerStyle: {
    margin: 0,
    marginBottom: windowHeight(10),
    marginHorizontal: windowWidth(22),
    marginTop: windowHeight(26),
  },
  titleStyle: {
    fontFamily: appFonts.NunitoSansSemiBold,
    fontSize: fontSizes.FONT22,
  },
});