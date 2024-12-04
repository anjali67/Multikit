import {t} from 'i18next';
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from '../styles';
import {starRating} from '@utils/json/hotelBooking';
import {useValues} from '@App';
import appColors from '../../../../../theme/appColors';

export default function StarRating(props) {
  const {textRTLStyle, isRTL, isDark} = useValues();
  return (
    <View style={styles.topView}>
      <Text
        style={[
          styles.title,
          {
            textAlign: textRTLStyle,
            color: isDark ? appColors.white : appColors.reviewText,
          },
        ]}>
        {t('hotelBooking.starRating')}
      </Text>
      <View style={styles.main}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          inverted={isRTL ? true : false}
          horizontal
          data={starRating}
          renderItem={({index, item}) => {
            return (
              <View
                style={[
                  styles.containerView,
                  {
                    backgroundColor: isDark
                      ? appColors.darkTheme
                      : appColors.reviewsBg,
                  },
                ]}>
                <Text
                  style={[
                    styles.name,
                    {color: isDark ? appColors.white : appColors.reviewText},
                  ]}>
                  {item.totalStar} {t('hotelBooking.star')}({item.rate})
                </Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
