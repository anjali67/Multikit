import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import {Increase} from '@assets/images/grocery_assets/svg/increase';
import Decrease from '@assets/images/grocery_assets/svg/decrease';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';

export default function OfferView(props) {
  const {t} = useTranslation();
  const [data, setData] = useState(props.data);
  const {viewRTLStyle, textRTLStyle, isDark, currSymbol, currValue} =
    useValues();

  const incrementValue = 1;
  const decrementValue = 1;

  const handleIncrement = itemId => {
    setData(prevData =>
      prevData.map(item =>
        item.id === itemId
          ? {...item, value: item.value + incrementValue}
          : item,
      ),
    );
  };

  const handleDecrement = itemId => {
    setData(prevData =>
      prevData.map(item =>
        item.id === itemId
          ? {...item, value: item.value > 0 ? item.value - decrementValue : 0}
          : item,
      ),
    );
  };

  return (
    <View style={styles.container}>
      {data.map((item, key) => (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={props.onPress}
          style={[
            styles.row,
            {
              flexDirection: viewRTLStyle,
              backgroundColor: isDark
                ? appColors.darkTheme
                : appColors.category,
            },
          ]}>
          <View style={{flexDirection: viewRTLStyle}}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text
                style={[
                  styles.title,
                  {
                    textAlign: textRTLStyle,
                    color: isDark ? appColors.white : appColors.black,
                  },
                ]}>
                {t(item.title)}
              </Text>
              <Text
                style={[
                  styles.name,
                  {
                    textAlign: textRTLStyle,
                    color: isDark ? appColors.white : appColors.groceryFont,
                  },
                ]}>
                {t(item.name)}
              </Text>
              <Text
                style={[
                  styles.price,
                  {
                    textAlign: textRTLStyle,
                    color: isDark ? appColors.white : appColors.black,
                  },
                ]}>
                {currSymbol}
                {(currValue * item.price).toFixed(2)}
                <Text
                  style={[
                    styles.kg,
                    {color: isDark ? appColors.white : appColors.groceryFont},
                  ]}>
                  {' '}
                  /{t('homePage.kg')}
                </Text>
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                handleDecrement(item.id);
              }}
              activeOpacity={0.7}
              style={[
                styles.priceView,
                {
                  backgroundColor: isDark
                    ? appColors.blackColor
                    : appColors.white,
                },
              ]}>
              <Decrease
                width={windowWidth(13)}
                color={isDark ? appColors.white : appColors.black}
              />
            </TouchableOpacity>
            <Text
              style={[
                styles.priceText,
                {color: isDark ? appColors.white : appColors.groceryBtn},
              ]}>
              {item.value}
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                handleIncrement(item.id);
              }}
              style={[
                styles.priceView,
                {
                  backgroundColor: isDark
                    ? appColors.blackColor
                    : appColors.white,
                },
              ]}>
              <Increase
                color={isDark ? appColors.white : appColors.black}
                height={10}
                width={10}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
