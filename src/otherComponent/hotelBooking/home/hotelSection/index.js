import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {hotels} from '@utils/json/hotelBooking';
import {t} from 'i18next';
import styles from './styles';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function hotelSection(props) {
  const {viewRTLStyle, textRTLStyle, isDark, currSymbol, isRTL, currValue} =
    useValues();
  return (
    <View>
      <FlatList
        data={hotels}
        inverted={isRTL ? true : false}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({index, item}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                props.navigation.navigate('SingleDetailPage');
              }}
              style={styles.container}>
              <Image source={item.image} style={styles.imageStyle} />
              <Text
                style={[
                  styles.name,
                  {
                    textAlign: textRTLStyle,
                    color: isDark ? appColors.white : appColors.reviewText,
                  },
                ]}>
                {t(item.name)}
              </Text>
              <Text style={[styles.content, {textAlign: textRTLStyle}]}>
                {item.property} {t('hotelBooking.properties')}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
