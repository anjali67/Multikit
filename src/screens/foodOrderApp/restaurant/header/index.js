import {View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {restaurantAppBar} from '@utils/images/images';
import styles from './styles';
import {Back} from '@assets/images/main_theme_images/svg/back';
import {useNavigation} from '@react-navigation/native';
import {t} from 'i18next';
import {HeartIcon} from '@assets/images/common/svg/heart';
import {ShareIcon} from '@assets/images/common/svg/shareIcon';
import {Search} from '@assets/images/grocery_assets/svg/search';
import appColors from '@theme/appColors';
import {shopLogo} from '@utils/images/images';
import {clock} from '@utils/images/images';
import {useValues} from '@App';
import {ArrowRight} from '@assets/images/common/svg/arrowright';
import {fontSizes, windowWidth} from '@theme/appConstant';

export default function Header(props) {
  const navigation = useNavigation();
  const {viewRTLStyle, isRTL, isDark, textRTLStyle} = useValues();
  return (
    <View>
      <Image
        resizeMode="stretch"
        source={restaurantAppBar}
        style={styles.imageStyle}
      />
      <View style={styles.mainContainer}>
        <View style={[styles.topView, {flexDirection: viewRTLStyle}]}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{left: isRTL ? 0 : 10}}>
            {isRTL ? (
              <ArrowRight color={isDark ? appColors.darkTheme : 'white'} />
            ) : (
              <Back color={isDark ? appColors.darkTheme : 'white'} />
            )}
          </TouchableOpacity>
          <View style={[styles.socialView, {right: isRTL ? 8 : 0}]}>
            <View style={styles.headerView}>
              <Search
                width={70}
                color={isDark ? appColors.darkTheme : appColors.white}
              />
              <HeartIcon
                color={isDark ? appColors.darkTheme : appColors.white}
              />
              <ShareIcon
                strokeWidth={'1.6'}
                color={isDark ? appColors.darkTheme : appColors.white}
              />
            </View>
          </View>
        </View>
        <View style={[styles.textView, {left: isRTL ? 7 : 0}]}>
          <View style={[styles.rowView, {flexDirection: viewRTLStyle}]}>
            <View
              style={[
                styles.shopLogo,
                {
                  left: isRTL ? windowWidth(122) : 0,
                  backgroundColor: isDark
                    ? appColors.darkTheme
                    : appColors.white,
                },
              ]}>
              <Image source={shopLogo} style={styles.image} />
            </View>
            <View
              style={
                (styles.marginHorizontal,
                {
                  left: isRTL ? windowWidth(140) : windowWidth(20),
                })
              }>
              <Text
                style={[
                  styles.titleStyle,
                  {
                    color: isDark ? appColors.darkTheme : appColors.white,
                    textAlign: textRTLStyle,
                  },
                ]}>
                {t(props.data?.title)}
              </Text>
              <Text
                style={[
                  styles.contentStyle,
                  {
                    width: isRTL ? windowWidth(390) : windowWidth(320),
                    fontSize: isRTL ? fontSizes.FONT18HALF : fontSizes.FONT19,
                    color: isDark ? appColors.darkTheme : appColors.white,
                    textAlign: textRTLStyle,
                  },
                ]}>
                {t('foodOrder.address')}
              </Text>
              <View
                style={[
                  styles.rowView,
                  styles.marginTop,
                  {
                    flexDirection: viewRTLStyle,
                    justifyContent: isRTL ? 'flex-end' : 'flex-start',
                    right: isRTL ? windowWidth(7) : 0,
                    left: isRTL ? windowWidth(75) : 0,
                  },
                ]}>
                <View style={[styles.rowView, {flexDirection: viewRTLStyle}]}>
                  <Image
                    tintColor={isDark ? appColors.darkTheme : 'white'}
                    source={clock}
                    style={styles.clock}
                  />
                  <Text
                    style={[
                      styles.time,
                      {color: isDark ? appColors.darkTheme : appColors.white},
                    ]}>
                    {t('NearbyArr.factorytime')}
                  </Text>
                </View>
                <View style={[styles.rowView, {flexDirection: viewRTLStyle}]}>
                  <View
                    style={[
                      styles.dotStyle,
                      {
                        backgroundColor: isDark
                          ? appColors.darkTheme
                          : appColors.white,
                      },
                    ]}></View>
                  <Text
                    style={[
                      styles.time,
                      {color: isDark ? appColors.darkTheme : appColors.white},
                    ]}>
                    {t('foodOrder.distance')}
                  </Text>
                </View>
                <View style={[styles.rowView, {flexDirection: viewRTLStyle}]}>
                  <View
                    style={[
                      styles.dotStyle,
                      {
                        backgroundColor: isDark
                          ? appColors.darkTheme
                          : appColors.white,
                      },
                    ]}></View>
                  <Text
                    style={[
                      styles.time,
                      {color: isDark ? appColors.darkTheme : appColors.white},
                    ]}>
                    4.7 {t('foodOrder.Ratings')}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
