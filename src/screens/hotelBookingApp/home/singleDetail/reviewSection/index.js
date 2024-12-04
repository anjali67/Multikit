import React from 'react';
import {View, Text, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import appColors from '@theme/appColors';
import styles from './styles';
import {t} from 'i18next';
import appFonts from '@theme/appFonts';
import {progressData} from '@utils/json/hotelBooking';
import {windowWidth} from '@theme/appConstant';
import ReviewsList from './reviewsList';
import {useValues} from '@App';

export default function reviewSection() {
  const {textRTLStyle, viewRTLStyle, isRTL, isDark} = useValues();
  return (
    <View>
      <View style={[styles.main, {flexDirection: viewRTLStyle}]}>
        <LinearGradient
          colors={[appColors.onBoardGradiant, '#7232d9']}
          style={styles.gradiantView}
          start={{x: 1, y: 0.2}}
          end={{x: 1, y: 1}}>
          <Text style={styles.reviewText}>4.5</Text>
        </LinearGradient>
        <View>
          <Text style={[styles.textStyle, {textAlign: textRTLStyle}]}>
            {t('hotelBooking.good')}
          </Text>
          <Text
            style={[
              styles.textStyle,
              {fontFamily: appFonts.MontserratRegular},
            ]}>
            510 {t('hotelBooking.reviews')}
          </Text>
        </View>
      </View>
      <View style={styles.margin}>
        <FlatList
          data={progressData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <View style={styles.mainContainer}>
                <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
                  <Text style={styles.name}>{t(item.name)}</Text>
                  <Text
                    style={[
                      styles.name,
                      {right: isRTL ? windowWidth(0) : windowWidth(17)},
                    ]}>
                    {item.rating}
                  </Text>
                </View>
                <View style={styles.rowContainer}>
                  <View style={styles.progressContainer}>
                    <View
                      style={[styles.progressBar, {width: item.progress}]}
                    />
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
      <Text
        style={[
          styles.headingTitle,
          {
            textAlign: textRTLStyle,
            color: isDark ? appColors.white : appColors.reviewText,
          },
        ]}>
        {t('hotelBooking.topReviews')}
      </Text>
      <ReviewsList />
    </View>
  );
}
