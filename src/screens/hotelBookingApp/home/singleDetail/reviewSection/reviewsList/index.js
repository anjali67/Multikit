import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {reviews} from '@utils/json/hotelBooking';
import {t} from 'i18next';
import LinearGradient from 'react-native-linear-gradient';
import {windowWidth} from '@theme/appConstant';

export default function reviewsList() {
  const {isDark, viewRTLStyle, textRTLStyle, isRTL} = useValues();
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={reviews}
        renderItem={({item}) => {
          return (
            <View
              style={[
                styles.mainContainer,
                {
                  flexDirection: viewRTLStyle,
                  backgroundColor: isDark
                    ? appColors.darkTheme
                    : appColors.reviewsBg,
                },
              ]}>
              <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
                <View style={styles.textContainer}>
                  <Text
                    style={[
                      styles.text,
                      {
                        textAlign: textRTLStyle,
                        color: isDark ? appColors.white : appColors.reviewText,
                      },
                    ]}>
                    {t(item.title)}
                  </Text>
                  <Text style={[styles.date, {textAlign: textRTLStyle}]}>
                    {t(item.date)}
                  </Text>
                  <Text style={[styles.content, {textAlign: textRTLStyle}]}>
                    {t(item.content)}
                  </Text>
                </View>
                <View>
                  <LinearGradient
                    colors={[
                      appColors.onBoardGradiant,
                      appColors.onBoardGradiant1,
                    ]}
                    style={[
                      styles.gradiantView,
                      {right: isRTL ? null : windowWidth(20)},
                    ]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}>
                    <Text style={styles.ratingText}>{item.rate}</Text>
                  </LinearGradient>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
