import React from 'react';
import {View} from 'react-native';
import styles from '../styles';
import {onBoardData} from '@utils/json/hotelBooking';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {ExpandingDot} from 'react-native-animated-pagination-dots';

export default function paginationContainer({scrollX}) {
  const {isDark} = useValues();
  return (
    <View style={styles.pagination}>
      <View>
        <ExpandingDot
          data={onBoardData}
          expandingDotWidth={35}
          scrollX={scrollX}
          inActiveDotColor={isDark ? appColors.darkTheme : appColors.reviewText}
          activeDotColor={isDark ? appColors.darkTheme : appColors.reviewText}
          inActiveDotOpacity={0.5}
          dotStyle={styles.dotStyles}
        />
      </View>
    </View>
  );
}
