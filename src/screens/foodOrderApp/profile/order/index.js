import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import HeaderBar from '@otherComponent/food/headerBar';
import styles from './styles';
import {OrdersData} from '@utils/json/food';
import {t} from 'i18next';
import {sucess} from '@utils/images/images';
import foodOrderStyle from '../../style/styles';
import RateFoodView from './rateFoodView';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import {fontSizes, windowWidth} from '@theme/appConstant';

export default function FoodOrder({navigation}) {
  const {viewRTLStyle, isRTL, isDark, textRTLStyle, currSymbol, currValue} =
    useValues();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollView}
      style={[
        foodOrderStyle.mainContainer,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.foodPrimary},
      ]}>
      <View>
        <HeaderBar
          color={appColors.white}
          title={t('drawer.Orders')}
          navigation={navigation}
        />
        <View style={styles.mainContainer}>
          {OrdersData.map((item, index) => {
            return (
              <View
                style={[
                  styles.mainView,
                  {
                    backgroundColor: isDark
                      ? appColors.blackColor
                      : appColors.white,
                  },
                ]}>
                <View
                  style={[
                    styles.row,
                    styles.seperator,
                    {flexDirection: viewRTLStyle},
                  ]}>
                  <View
                    style={[
                      styles.row,
                      {
                        flexDirection: viewRTLStyle,
                        marginLeft: isRTL ? windowWidth(50) : null,
                      },
                    ]}>
                    <Image
                      source={item.image}
                      style={[
                        styles.image,
                        {
                          marginLeft: isRTL
                            ? windowWidth(-10)
                            : windowWidth(40),
                        },
                      ]}
                    />
                    <View
                      style={[
                        styles.textContainer,
                        {
                          marginRight: isRTL ? windowWidth(59) : null,
                          left: isRTL ? 0 : windowWidth(13),
                        },
                      ]}>
                      <Text
                        style={[
                          styles.title,
                          {
                            textAlign: textRTLStyle,
                            fontSize: fontSizes.FONT18,
                            color: isDark
                              ? appColors.white
                              : appColors.foodSecondary,
                          },
                        ]}>
                        {t(item.title)}
                      </Text>
                      <Text
                        style={[
                          styles.content,
                          {
                            textAlign: textRTLStyle,
                            fontSize: isRTL
                              ? fontSizes.FONT15HALF
                              : fontSizes.FONT16,
                          },
                        ]}>
                        {t(item.content)}
                      </Text>
                      <View
                        style={[
                          styles.row,
                          styles.marginTop,
                          {flexDirection: viewRTLStyle},
                        ]}>
                        <View style={[styles.row, styles.leftView]}>
                          <View
                            style={{
                              flexDirection: viewRTLStyle,
                              marginLeft: isRTL ? windowWidth(142) : 0,
                            }}>
                            {isRTL ? (
                              <Text
                                style={[
                                  styles.textStyle,
                                  {
                                    fontSize: isRTL
                                      ? fontSizes.FONT17
                                      : fontSizes.FONT18,
                                    color: isDark
                                      ? appColors.white
                                      : appColors.foodSecondary,
                                  },
                                ]}>
                                :{t('foodOrder.paid')}
                              </Text>
                            ) : (
                              <Text
                                style={[
                                  styles.textStyle,
                                  {
                                    fontSize: isRTL
                                      ? fontSizes.FONT17
                                      : fontSizes.FONT18,
                                    color: isDark
                                      ? appColors.white
                                      : appColors.foodSecondary,
                                  },
                                ]}>
                                {t('foodOrder.paid')}:
                              </Text>
                            )}
                            <Text
                              style={[
                                [
                                  styles.textStyle,
                                  {
                                    fontSize: isRTL
                                      ? fontSizes.FONT17
                                      : fontSizes.FONT18,
                                    color: isDark
                                      ? appColors.white
                                      : appColors.foodSecondary,
                                  },
                                ],
                                styles.fontsize,
                              ]}>
                              {' '}
                              {currSymbol}
                              {(currValue * item.paid).toFixed(2)}{' '}
                            </Text>
                          </View>
                          <Text> </Text>
                          <View
                            style={{
                              flexDirection: viewRTLStyle,
                              right: isRTL ? windowWidth(7) : windowWidth(4),
                            }}>
                            {isRTL ? (
                              <Text
                                style={[
                                  styles.textStyle,
                                  {
                                    fontSize: isRTL
                                      ? fontSizes.FONT17
                                      : fontSizes.FONT18,
                                    color: isDark
                                      ? appColors.white
                                      : appColors.foodSecondary,
                                  },
                                ]}>
                                :{t('foodOrder.date')}
                              </Text>
                            ) : (
                              <Text
                                style={[
                                  styles.textStyle,
                                  {
                                    fontSize: isRTL
                                      ? fontSizes.FONT17
                                      : fontSizes.FONT18,
                                    color: isDark
                                      ? appColors.white
                                      : appColors.foodSecondary,
                                  },
                                ]}>
                                {t('foodOrder.date')}:
                              </Text>
                            )}
                            <View style={{flexDirection: viewRTLStyle}}>
                              {isRTL ? (
                                <Text
                                  style={[
                                    styles.textStyle,
                                    {
                                      fontSize: isRTL
                                        ? fontSizes.FONT17
                                        : fontSizes.FONT18,
                                      color: isDark
                                        ? appColors.white
                                        : appColors.foodSecondary,
                                    },
                                  ]}>
                                  {' '}
                                  , {t(item.date)}
                                </Text>
                              ) : (
                                <Text
                                  style={[
                                    styles.textStyle,
                                    {
                                      fontSize: isRTL
                                        ? fontSizes.FONT17
                                        : fontSizes.FONT18,
                                      color: isDark
                                        ? appColors.white
                                        : appColors.foodSecondary,
                                    },
                                  ]}>
                                  {' '}
                                  {t(item.date)},{' '}
                                </Text>
                              )}
                              <Text
                                style={[
                                  styles.textStyle,
                                  {
                                    fontSize: isRTL
                                      ? fontSizes.FONT17
                                      : fontSizes.FONT18,
                                    color: isDark
                                      ? appColors.white
                                      : appColors.foodSecondary,
                                  },
                                ]}>
                                {t(item.time)}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.deliveredView,
                      {
                        flexDirection: viewRTLStyle,
                        backgroundColor: isDark
                          ? appColors.darkTheme
                          : appColors.lightBorder,
                      },
                    ]}>
                    <Image style={styles.sucess} source={sucess} />
                    <Text
                      style={[
                        styles.deliverdText,
                        {
                          color: isDark
                            ? appColors.white
                            : appColors.foodSecondary,
                        },
                      ]}>
                      {t('foodOrder.delivered')}
                    </Text>
                  </View>
                </View>
                <RateFoodView item={item.items} />
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
