import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {t} from 'i18next';
import StarRating from '@commonComponents/starRating';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function NameView() {
  const {viewRTLStyle, textRTLStyle, isDark,currSymbol,currValue} = useValues();
  return (
    <View>
      <Text
        style={[
          styles.txt,
          {
            textAlign: textRTLStyle,
            color: isDark ? appColors.white : appColors.black,
          },
        ]}>
        {t('productDetailsPage.productName')}
      </Text>
      <View style={[styles.ratingView, {flexDirection: viewRTLStyle}]}>
        <StarRating />
        <Text style={styles.rating}>
          {t('productDetailsPage.productRatings')}
        </Text>
      </View>
      <View style={[styles.view, {flexDirection: viewRTLStyle}]}>
        <Text
          style={[
            styles.price,
            {color: isDark ? appColors.white : appColors.groceryBtn},
          ]}>
          {currSymbol}{(currValue * 25).toFixed(2)}
        </Text>
        <Text style={styles.originalPrice}> {currSymbol}{(currValue * 45).toFixed(2)}</Text>
      </View>
    </View>
  );
}
