import React, {useState, useRef} from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from './styles';
import {Increase} from '@assets/images/grocery_assets/svg/increase';
import {t} from 'i18next';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default function HorizontalView(props) {
  const [data] = useState(props.data);
  const {viewRTLStyle, textRTLStyle, isRTL, isDark,currSymbol,currValue} = useValues();
  const scrollViewRef = useRef();
  return (
    <View activeOpacity={0.7} style={styles.mainView}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{flexDirection: viewRTLStyle}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {data.map((item, key) => (
          <TouchableOpacity
            key={key}
            style={[
              styles.lowestPriceView,
              {
                backgroundColor: isDark
                  ? appColors.darkTheme
                  : appColors.category,
              },
            ]}
            activeOpacity={0.8}
            onPress={props.onPress}>
            <Image
              resizeMode="contain"
              source={item.image}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text
                style={[
                  styles.name,
                  {
                    textAlign: textRTLStyle,
                    paddingRight: isRTL ? windowWidth(38) : null,
                    color: isDark ? appColors.white : appColors.black,
                    width: isRTL ? '130%' : '100%',
                  },
                ]}
                numberOfLines={2}>
                {t(item.title)}
              </Text>
              <Text
                style={[
                  styles.gram,
                  {
                    textAlign: textRTLStyle,
                    color: isDark ? appColors.white : appColors.groceryFont,
                  },
                ]}>
                {t(item.weight)}
              </Text>
              <View style={[styles.priceView, {flexDirection: viewRTLStyle}]}>
                <Text
                  style={[
                    styles.price,
                    {color: isDark ? appColors.white : appColors.black},
                  ]}>
                  {currSymbol}{(currValue * item.price).toFixed(2)}
                </Text>
                <View style={styles.increase}>
                  <Increase />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
