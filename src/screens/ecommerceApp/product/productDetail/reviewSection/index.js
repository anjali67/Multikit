import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {reviews} from '@utils/json/ecommerce';
import {t} from 'i18next';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default function ReviewSection() {
  const {isDark, viewRTLStyle, textRTLStyle, isRTL} = useValues();
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={reviews}
        renderItem={({index, item}) => {
          return (
            <View
              style={[
                styles.mainContainer,
                {
                  backgroundColor: isDark
                    ? appColors.blackColor
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
                  <Text
                    style={[
                      styles.content,
                      {
                        textAlign: textRTLStyle,
                        right: isRTL ? windowWidth(90) : null,
                      },
                    ]}>
                    {t(item.content)}
                  </Text>
                </View>
                <View style={styles.ratingContainer}>
                  <Text style={styles.ratingText}>{item.rate}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
      <View style={styles.seeAllReviews}>
        <Text
          style={[
            styles.textStyle,
            {color: isDark ? appColors.white : appColors.ecommerceFont},
          ]}>
          {t('ecommerce.seeallReviews')} (15)
        </Text>
      </View>
    </View>
  );
}
