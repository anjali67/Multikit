import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {useValues} from '@App';
import {t} from 'i18next';
import GradiantbtnView from '@otherComponent/hotelBooking/button';
import {windowWidth} from '@theme/appConstant';
import {fontSizes, windowHeight} from '@theme/appConstant';

export default function bottomView(props) {
  const {currSymbol, currValue, viewRTLStyle, textRTLStyle, isRTL, isDark} =
    useValues();
  return (
    <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
      <View>
        <View
          style={[
            styles.rowContainer,
            props.rowStyle,
            {flexDirection: viewRTLStyle},
          ]}>
          <Text
            style={[
              styles.curruncyText,
              props.textStyle,
              {textAlign: textRTLStyle},
            ]}>
            {currSymbol}
            {currValue * 50}
          </Text>
          <Text
            style={[styles.text, props.textStyle, {textAlign: textRTLStyle}]}>
            {t(props.bottomText)}
          </Text>
        </View>
        <View
          style={[
            styles.rowContainer,
            {marginTop: windowHeight(4), flexDirection: viewRTLStyle},
          ]}>
          {props.price && (
            <Text style={[styles.curruncyText, styles.fontsize]}>
              +{currSymbol}
              {currValue * props.price}
            </Text>
          )}
          <Text
            style={[
              styles.curruncyText,
              {
                marginHorizontal: windowWidth(0),
                fontSize: fontSizes.FONT16HALF,
                bottom: windowHeight(1.5),
              },
            ]}>
            {t(props.content)}
          </Text>
        </View>
      </View>
      <View>
        <GradiantbtnView
          onBtnPress={props.onBtnPress}
          btnTitle={t(props.title)}
          btnStyle={[styles.btnView, props.btnView]}
          btnText={[styles.btnText, props.text]}
          gradiant={appColors.onBoardGradiant1}
        />
      </View>
    </View>
  );
}
