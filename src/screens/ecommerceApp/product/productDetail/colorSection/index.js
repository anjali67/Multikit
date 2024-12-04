import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colorSection} from '@utils/json/ecommerce';
import {t} from 'i18next';
import styles from './styles';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function ColorSection(props) {
  const {isDark, viewRTLStyle, isRTL} = useValues();
  return (
    <View style={[styles.mainView, {flexDirection: viewRTLStyle}]}>
      <Text
        style={[
          styles.textStyle,
          {color: isDark ? appColors.white : appColors.ecommerceFont},
        ]}>
        {t('ecommerce.color')}:
      </Text>
      <FlatList
        horizontal
        inverted={isRTL ? true : false}
        data={colorSection}
        renderItem={({index, item}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => props.setColor(item.id)}>
              <Image
                source={item.image}
                style={[
                  styles.image,
                  {
                    opacity: index === props.selectedColor ? 1 : 0.5,
                    borderWidth: index === props.selectedColor ? 1.2 : 0,
                  },
                ]}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
