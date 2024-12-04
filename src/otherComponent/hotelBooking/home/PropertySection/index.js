import {t} from 'i18next';
import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import styles from './styles';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default function PropertySection(props) {
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
        {t('hotelBooking.propertyType')}
      </Text>
      <FlatList
        inverted={isRTL ? true : false}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={props.data}
        renderItem={({index, item}) => {
          return (
            <View
              style={[
                styles.row,
                {
                  marginRight: isRTL ? 0 : windowWidth(20),
                  marginLeft: isRTL ? windowWidth(20) : 0,
                  backgroundColor: isDark
                    ? appColors.darkTheme
                    : appColors.reviewsBg,
                },
              ]}>
              <Image
                tintColor={isDark && appColors.white}
                source={item.image}
                style={styles.image}
              />
              <Text
                style={[
                  styles.title,
                  styles.top,
                  {color: isDark ? appColors.white : appColors.reviewText},
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
