import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {amenitiesData} from '@utils/json/hotelBooking';
import styles from './styles';
import {t} from 'i18next';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function aminitiesSection() {
  const {isRTL, textRTLStyle, isDark} = useValues();
  return (
    <View style={styles.main}>
      <FlatList
        horizontal
        inverted={isRTL ? true : false}
        showsHorizontalScrollIndicator={false}
        data={amenitiesData}
        renderItem={({index, item}) => {
          return (
            <View style={styles.mainContainer}>
              {item.icon ? (
                <View
                  style={[
                    styles.iconView,
                    {
                      backgroundColor: isDark
                        ? appColors.darkTheme
                        : appColors.reviewsBg,
                    },
                  ]}>
                  {item.icon}
                </View>
              ) : (
                <View
                  style={[
                    styles.iconView,
                    {
                      paddingVertical: windowHeight(8),
                      right: windowWidth(5),
                      backgroundColor: isDark
                        ? appColors.darkTheme
                        : appColors.reviewsBg,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.name,
                      {
                        marginTop: 2,
                        fontSize: fontSizes.FONT23,
                        textAlign: textRTLStyle,
                        right: isRTL ? null : windowWidth(10),
                        color: isDark ? appColors.white : appColors.reviewText,
                      },
                    ]}>
                    +5
                  </Text>
                </View>
              )}
              <Text
                style={[
                  styles.name,
                  {
                    textAlign: textRTLStyle,
                    right: isRTL ? windowWidth(10) : null,
                    left: isRTL ? null : windowWidth(12),
                    color: isDark ? appColors.white : appColors.reviewText,
                  },
                ]}>
                {t(item.name)}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}
