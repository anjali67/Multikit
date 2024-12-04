import {t} from 'i18next';
import React from 'react';
import {View, Image, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import appColors from '@theme/appColors';
import {Map} from '@assets/images/hotel_theme/svg/map';
import {star} from '@utils/images/images';
import LinearGradient from 'react-native-linear-gradient';
import {useValues} from '@App';
import {Cross} from '@assets/images/common/svg/cross';
import {windowWidth} from '@theme/appConstant';

export default function recommendedSection(props) {
  const {
    currSymbol,
    currValue,
    viewRTLStyle,
    textRTLStyle,
    isRTL,
    isDark,
    viewSelfRTLStyle,
  } = useValues();
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={props.isHorizontal ? props.isHorizontal : false}
        data={props.data}
        renderItem={({index, item}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                props.navigation.navigate('SingleDetailPage');
              }}
              style={[
                styles.rowContainer,
                props.rowStyle,
                {
                  backgroundColor: isDark
                    ? appColors.darkTheme
                    : appColors.reviewsBg,
                },
              ]}>
              <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
                <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
                  <Image
                    source={item.image}
                    style={[styles.imageStyle, props.imageStyle]}
                  />
                  <View style={[styles.textContainer, props.textContainer]}>
                    <View
                      style={[styles.textView, {flexDirection: viewRTLStyle}]}>
                      <Text
                        numberOfLines={1}
                        style={[
                          styles.name,
                          props.nameStyle,
                          {
                            textAlign: textRTLStyle,
                            color: isDark
                              ? appColors.white
                              : appColors.reviewText,
                          },
                        ]}>
                        {t(item.name)}
                      </Text>
                      {props.showCrossIcon && (
                        <TouchableOpacity
                          activeOpacity={0.9}
                          onPress={() => props.toggleModal()}
                          style={[
                            styles.circleView,
                            {
                              backgroundColor: isDark
                                ? appColors.blackColor
                                : appColors.white,
                            },
                          ]}>
                          <Cross
                            height={'18'}
                            width={'15'}
                            strokeWidth={'1.4'}
                          />
                        </TouchableOpacity>
                      )}
                    </View>
                    <View
                      style={[
                        styles.addressView,
                        {flexDirection: viewRTLStyle},
                      ]}>
                      <Map height={'24'} color={appColors.label} />
                      <Text
                        style={[
                          styles.address,
                          {top: 2},
                          props.nameStyle,
                          {textAlign: textRTLStyle},
                        ]}>
                        {t(item.address)}
                      </Text>
                    </View>
                    <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
                      <Image source={star} style={styles.starImg} />
                      <Text
                        style={[
                          styles.rate,
                          props.nameStyle,
                          {
                            color: isDark
                              ? appColors.white
                              : appColors.reviewText,
                          },
                        ]}>
                        {t(item.rating)}
                      </Text>
                      <Text
                        style={[styles.address, styles.top, props.nameStyle]}>
                        {t(item.ratings)}
                      </Text>
                    </View>
                    {item.price && (
                      <View
                        style={[
                          styles.main,
                          {justifyContent: viewSelfRTLStyle},
                        ]}>
                        <LinearGradient
                          colors={[
                            appColors.onBoardGradiant,
                            appColors.onBoardGradiant1,
                          ]}
                          style={[
                            styles.containerView,
                            props.containerView,
                            {
                              flexDirection: viewRTLStyle,
                              left: isRTL ? windowWidth(0) : windowWidth(6),
                            },
                          ]}
                          start={{x: 0, y: 0}}
                          end={{x: 1, y: 0}}>
                          <Text style={styles.price}>
                            {currSymbol}
                            {(currValue * item.price).toFixed(2)}
                          </Text>
                          {isRTL ? (
                            <Text style={styles.textStyle}>
                              {t(item.available)} /{' '}
                            </Text>
                          ) : (
                            <Text>
                              <Text style={styles.textStyle}>
                                {' '}
                                / {t(item.available)}
                              </Text>
                            </Text>
                          )}
                        </LinearGradient>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
