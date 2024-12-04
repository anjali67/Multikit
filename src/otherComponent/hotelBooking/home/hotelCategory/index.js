import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '../../../../theme/appColors';

export default function hotelCategory(props) {
  const {isRTL, currValue, isDark} = useValues();
  return (
    <View>
      <FlatList
        inverted={isRTL ? true : false}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.data}
        renderItem={({index, item}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={props.onPress}
              style={styles.container}>
              <View
                style={[
                  styles.circle,
                  {backgroundColor: isDark ? appColors.darkTheme : '#EBEBEB'},
                ]}></View>
              <View>
                <Image
                  tintColor={isDark && appColors.white}
                  style={styles.imageStyle}
                  source={item.image}
                />
              </View>
              <Text
                style={[
                  styles.name,
                  {color: isDark ? appColors.white : appColors.reviewText},
                ]}>
                {t(item.name)}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
