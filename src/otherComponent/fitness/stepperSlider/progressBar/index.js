import React from 'react';
import {View, TouchableOpacity, SafeAreaView} from 'react-native';
import {Back} from '@assets/images//chat_theme/svg/Back';
import appColors from '@theme/appColors';
import styles from '../styles';
import GradiantBtn from '../../gradiantBtn';
import {useValues} from '@App';
import {RightArrow} from '@assets/images/hotel_theme/svg/rightArrow';

export default function progressBar(props) {
  const {viewRTLStyle, isRTL, setIsRTL, setIsDark, isDark} = useValues();
  return (
    <SafeAreaView style={[styles.container]}>
      <View
        style={[
          styles.progressContainer,
          {backgroundColor: isDark ? appColors.blackColor : appColors.white},
        ]}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={props.handlePrevStep}
          style={[
            styles.progressIndicatorContainer,
            {flexDirection: viewRTLStyle},
          ]}>
          <View style={{right: 3}}>
            {isRTL ? (
              <RightArrow
                color={isDark ? appColors.white : appColors.blackColor}
                height={'60'}
              />
            ) : (
              <Back
                width={'27'}
                color={isDark ? appColors.white : appColors.blackColor}
              />
            )}
          </View>
          {props.handleTitle()}
        </TouchableOpacity>
        <View
          style={[
            styles.progressIndicatorContainer,
            {
              marginHorizontal: isRTL ? null : 15,
              flexDirection: viewRTLStyle,
            },
          ]}>
          {props.renderProgressIndicator()}
        </View>
      </View>
      <View
        style={[
          styles.border,
          {backgroundColor: isDark ? appColors.darkTheme : appColors.reviewsBg},
        ]}></View>
      <View style={styles.stepContainer}>
        {props.renderScreen()}
        <View style={styles.buttonContainer}>
          <GradiantBtn
            title={'signIn.Next'}
            onBtnPress={props.handleNextStep}
          />
        </View>
      </View>
      <View></View>
    </SafeAreaView>
  );
}
