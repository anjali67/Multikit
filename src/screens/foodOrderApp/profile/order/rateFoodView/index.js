import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {t} from 'i18next';
import StarRating from '../../../../../commonComponents/starRating';
import {useValues} from '@App';
import {fontSizes} from '../../../../../theme/appConstant';
import appColors from '../../../../../theme/appColors';

export default function RateFoodView(props) {
  const {viewRTLStyle, isRTL, isDark, textRTLStyle} = useValues();
  return (
    <View>
      <View style={styles.itemView}>
        {props.item.map(item => {
          return (
            <View style={{alignItems: isRTL ? 'flex-end' : 'flex-start'}}>
              <Text
                style={[
                  styles.itemStyle,
                  {fontSize: isRTL ? fontSizes.FONT18 : fontSizes.FONT19},
                ]}>
                {t(item.name)}
              </Text>
            </View>
          );
        })}
      </View>
      <View style={[styles.ratingView, {flexDirection: viewRTLStyle}]}>
        <View style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
          <Text style={[styles.textStyle,{color:isDark ? appColors.white :  appColors.foodSecondary}]}>{t('foodOrder.rateFood')}</Text>
          <View style={styles.starView}>
            <StarRating size={19} />
          </View>
        </View>
        <View style={[styles.recorderView,{backgroundColor:isDark ? appColors.darkTheme : appColors.lightBorder}]}>
          <Text style={styles.recorder}>{t('orderDetailPage.reorder')}</Text>
        </View>
      </View>
    </View>
  );
}
