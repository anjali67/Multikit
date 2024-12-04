import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {t} from 'i18next';
import {RightArrow} from '@assets/images/common/svg/rightArrow';
import {useValues} from '@App';
import {BackArrow} from '@assets/images/common/svg/backArrow';
import appColors from '@theme/appColors';
import {windowWidth} from '@theme/appConstant';

export default function BottomContainer(props) {
  console.log('PRODUCT NAVIGATION', props);

  const [counter, setCounter] = useState(1);
  const handleINcrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    counter > 0 && setCounter(counter - 1);
  };

  const {viewRTLStyle, isRTL, isDark} = useValues();
  return (
    <View
      style={[
        styles.row,
        {
          flexDirection: viewRTLStyle,
        },
      ]}>
      <View
        style={[
          styles.rowView,
          {
            flexDirection: viewRTLStyle,
            backgroundColor: isDark ? appColors.blackColor : appColors.white,
            left: isRTL ? windowWidth(8) : 0,
          },
        ]}>
        <TouchableOpacity activeOpacity={0.7} onPress={handleDecrement}>
          <Text
            style={[
              styles.icon,
              {color: isDark ? appColors.white : appColors.black},
            ]}>
            −
          </Text>
        </TouchableOpacity>
        <Text style={styles.count}>{counter}</Text>
        <TouchableOpacity activeOpacity={0.7} onPress={handleINcrement}>
          <Text
            style={[
              styles.icon,
              {color: isDark ? appColors.white : appColors.black},
            ]}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.rowContainer,
          {
            flexDirection: viewRTLStyle,
            left: isRTL ? windowWidth(12) : windowWidth(4),
          },
        ]}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('GroceryCart', {
              navigation: props.navigation,
            });
          }}
          activeOpacity={0.7}>
          <Text style={styles.cartText}>{t('common.View Cart')}</Text>
        </TouchableOpacity>
        {isRTL ? <BackArrow height={'21'} color={'white'} /> : <RightArrow />}
      </View>
    </View>
  );
}
