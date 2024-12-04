import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {onBoardingData} from '@utils/json/financial';
import styles from './styles';
import appColors from '@theme/appColors';
import {ExpandingDot} from 'react-native-animated-pagination-dots';
import {useValues} from '@App';

const PaginationContainer = ({scrollX}) => {
  const {isDark} = useValues()
  return (
    <View style={styles.text}>
      <View style={styles.dotContainer}>
        <ExpandingDot
          data={onBoardingData}
          expandingDotWidth={35}
          scrollX={scrollX}
          inActiveDotColor={isDark ? appColors.darkTheme : appColors.financeContent}
          activeDotColor={isDark ? appColors.darkTheme : appColors.financeContent}
          inActiveDotOpacity={0.5}
          dotStyle={styles.dotStyles}
          containerStyle={styles.constainerStyles}
          itemContainer={styles.itemContainer}
        />
      </View>
    </View>
  );
};

export default PaginationContainer;
