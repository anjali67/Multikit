import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {t} from 'i18next';
import {Increase} from '@assets/images/grocery_assets/svg/increase';
import StarRating from '@commonComponents/starRating';
import {Cart} from '@assets/images/ecommerce_theme/svg/cart';
import {Delete} from '@assets/images/grocery_assets/svg/delete';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';

export default function JustForYouSection(props) {
  const {isDark, textRTLStyle, viewRTLStyle, currSymbol, currValue, isRTL} =
    useValues();
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={props.data}
        style={styles.list}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              props.navigation.navigate('ProductDetails', {
                navigation: props.navigation,
              }),
                {navigation: props.navigation};
            }}
            style={styles.mainContainer}>
            <View>
              <Image source={item.image} style={styles.image} />
              {props.showCartIcon ? (
                <>
                  <View style={styles.cartView}>
                    <View
                      style={[
                        styles.circle,
                        styles.margin,
                        {
                          backgroundColor: isDark
                            ? appColors.blackColor
                            : '#5E5E5E',
                        },
                      ]}>
                      <Cart
                        color={appColors.white}
                        height={'15'}
                        width={'15'}
                      />
                    </View>
                    <View
                      style={[
                        styles.circle,
                        {
                          backgroundColor: isDark
                            ? appColors.blackColor
                            : '#5E5E5E',
                        },
                      ]}>
                      <Delete
                        height={'15'}
                        width={'15'}
                        color={appColors.white}
                      />
                    </View>
                  </View>
                </>
              ) : (
                <View style={styles.circleView}>
                  <View
                    style={[
                      styles.circle,
                      {
                        backgroundColor: isDark
                          ? appColors.blackColor
                          : '#5E5E5E',
                      },
                    ]}>
                    <Increase />
                  </View>
                </View>
              )}
            </View>
            <Text
              style={[
                styles.title,
                {
                  textAlign: textRTLStyle,
                  color: isDark ? appColors.white : appColors.ecommerceFont,
                },
              ]}>
              {t(item.title)}
            </Text>
            <View style={[styles.starView, {flexDirection: viewRTLStyle}]}>
              <StarRating />
            </View>
            <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
              <Text
                style={[
                  styles.price,
                  {color: isDark ? appColors.white : appColors.ecommerceFont},
                ]}>
                {currSymbol}
                {(currValue * 32).toFixed(2)}
              </Text>
              <Text style={[styles.priceText, {left: windowWidth(8)}]}>
                {currSymbol}
                {(currValue * 35).toFixed(2)}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
