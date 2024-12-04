import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {RightArrow} from '@assets/images/common/svg/rightArrow';
import styles from './styles';
import appColors from '@theme/appColors';
import {DashView} from '@otherComponent/food/dashView';
import {useValues} from '@App';
import {BackArrow} from '@assets/images/common/svg/backArrow';

export default function PaymentMethod(props) {
  const {viewRTLStyle, isRTL, isDark, textRTLStyle} = useValues();
  return (
    <>
      {props.showDashView ? null : (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => props.navigation.navigate('OrderPlaced')}
          style={[styles.row, {flexDirection: viewRTLStyle}]}>
          <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
            <View
              style={[
                styles.imageView,
                props.imageView,
                {
                  backgroundColor: isDark
                    ? appColors.blackColor
                    : appColors.lightBorder,
                },
              ]}>
              <Image
                source={props.icon}
                style={[styles.image, props.imageStyle]}
                tintColor={props.tintColor}
              />
            </View>
            <View style={styles.textContainer}>
              <Text
                style={[
                  styles.text,
                  {
                    textAlign: textRTLStyle,
                    color: isDark ? appColors.white : appColors.foodSecondary,
                  },
                ]}>
                {props.title}
              </Text>
              <Text style={[styles.content, {textAlign: textRTLStyle}]}>
                {props.subTitle}
              </Text>
            </View>
          </View>
          {isRTL ? (
            <BackArrow
              color={isDark ? appColors.white : '#1B1B3E'}
              height={'52'}
              width={'8'}
            />
          ) : (
            <RightArrow
              color={isDark ? appColors.white : appColors.foodSecondary}
              height={'52'}
              width={'21'}
            />
          )}
        </TouchableOpacity>
      )}
      {props.showSeperator && <View style={styles.seperator}></View>}
      {props.showDashView && (
        <View>
          <DashView title={props.title} image={styles.imageStyle} />
        </View>
      )}
    </>
  );
}
