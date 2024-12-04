import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {t} from 'i18next';
import {sizeSection} from '@utils/json/ecommerce';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default function SizeSection() {
  const {isDark, viewRTLStyle, isRTL} = useValues();
  return (
    <View style={[styles.mainView, {flexDirection: viewRTLStyle}]}>
      <Text
        style={[
          styles.textStyle,
          {color: isDark ? appColors.white : appColors.ecommerceFont},
        ]}>
        {t('ecommerce.size')}:
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        inverted={isRTL ? true : false}
        data={sizeSection}
        renderItem={({index, item}) => {
          return (
            <View
              activeOpacity={0.9}
              style={[
                styles.mainContainer,
                {
                  marginRight: isRTL ? windowWidth(10) : null,
                  backgroundColor: isDark
                    ? appColors.blackColor
                    : appColors.bgColor,
                },
              ]}>
              <Text
                style={[
                  styles.text,
                  {color: isDark ? appColors.white : appColors.ecommerceFont},
                ]}>
                {t(item.size)}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}
