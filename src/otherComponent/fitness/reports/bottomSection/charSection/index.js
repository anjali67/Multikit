import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from '../styles';
import {reportingData} from '@utils/json/fitness';
import {fontSizes, windowHeight} from '@theme/appConstant';
import {linesGraph} from '@utils/images/images';
import {flash} from '@utils/images/images';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import {t} from 'i18next';
import {windowWidth} from '@theme/appConstant';

export default function chartSection() {
  const {isDark, isRTL, viewRTLStyle, textRTLStyle} = useValues();
  return (
    <View>
      <FlatList
        inverted={isRTL ? true : false}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={reportingData}
        renderItem={({item}) => (
          <View
            style={[
              styles.margin,
              styles.reportingSection,
              {
                backgroundColor: isDark
                  ? appColors.darkTheme
                  : appColors.lightBorder,
              },
            ]}>
            <View style={[styles.singleRow, {flexDirection: viewRTLStyle}]}>
              <View
                style={[
                  styles.imageView,
                  {
                    backgroundColor: isDark
                      ? appColors.fontColor
                      : appColors.white,
                    marginRight: isRTL ? null : windowWidth(18),
                  },
                ]}>
                <Image source={item.image} style={styles.imageStyle} />
              </View>
              <Text
                style={[
                  styles.name,
                  {
                    fontSize: fontSizes.FONT20,
                    color: isDark ? appColors.white : appColors.fontColor,
                    marginHorizontal: isRTL ? 10 : null,
                  },
                ]}>
                {t(item.name)}
              </Text>
            </View>
            <View>
              <Text
                style={[
                  styles.name,
                  {
                    color: '#ADADAD',
                    fontSize: fontSizes.FONT24,
                    marginTop: windowHeight(12),
                    textAlign: textRTLStyle,
                  },
                ]}>
                {t(item.content)}
              </Text>
            </View>
          </View>
        )}
      />
      <View
        style={[
          styles.margin,
          styles.singleRow,
          {marginHorizontal: 0, flexDirection: viewRTLStyle},
        ]}>
        <View
          style={[
            styles.background,
            {
              backgroundColor: isDark
                ? appColors.darkTheme
                : appColors.lightBorder,
              flexDirection: viewRTLStyle,
            },
          ]}>
          <View style={{flexDirection: viewRTLStyle}}>
            <View>
              <View
                style={[
                  styles.singleRow,
                  {flexDirection: viewRTLStyle, left: isRTL ? 9 : null},
                ]}>
                <View
                  style={[
                    styles.imageView,
                    {
                      backgroundColor: isDark
                        ? appColors.blackColor
                        : appColors.white,
                      marginRight: isRTL ? null : windowWidth(18),
                    },
                  ]}>
                  <Image source={flash} style={styles.imageStyle} />
                </View>
                <Text
                  style={[
                    styles.name,
                    {
                      fontSize: fontSizes.FONT20,
                      color: isDark ? appColors.white : appColors.fontColor,
                      left: isRTL ? windowHeight(6) : null,
                    },
                  ]}>
                  {t('fitness.calories')}
                </Text>
              </View>
              <Text
                style={[
                  styles.name,
                  {
                    color: '#ADADAD',
                    fontSize: fontSizes.FONT23,
                    marginTop: windowHeight(12),
                    textAlign: textRTLStyle,
                  },
                ]}>
                1500
              </Text>
            </View>
            <View style={{left: 40}}>
              <Image
                source={linesGraph}
                style={[
                  styles.graphImg,
                  {height: isRTL ? windowHeight(55) : windowHeight(80)},
                ]}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
