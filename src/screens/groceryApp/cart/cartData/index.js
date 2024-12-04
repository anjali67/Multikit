import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {t} from 'i18next';
import styles from './styles';
import {Delete} from '@assets/images/grocery_assets/svg/delete';
import {windowHeight} from '@theme/appConstant';
import {useValues} from '@App';
import appColors from '../../../../theme/appColors';

export default function CartView({data, imageStyle}) {
  const {viewRTLStyle, textRTLStyle,isDark,currSymbol,currValue} = useValues();
  return (
    <View style={styles.mainView}>
      {data.map((item, key) => (
        <View style={[styles.container, {flexDirection: viewRTLStyle}]}>
          <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
            <View style={[styles.boxView,{backgroundColor:isDark ? appColors.darkTheme : appColors.category}]}>
              <Image
                source={item.image}
                style={imageStyle ? imageStyle : styles.image}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.title, {textAlign: textRTLStyle,color:isDark ? appColors.white :  appColors.black }]}>
                {t(item.title)}
              </Text>
              <Text style={[styles.weight, {textAlign: textRTLStyle,color:isDark ? appColors.white :  appColors.groceryFont}]}>
                {item.weight}
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.row,
              {margin: windowHeight(12), flexDirection: viewRTLStyle},
            ]}>
            <Text style={[styles.price,{color:isDark ? appColors.white : appColors.groceryBtn}]}>{currSymbol}{(currValue * item.price).toFixed(2)}</Text>
            <TouchableOpacity activeOpacity={0.7} style={styles.delete}>
              <Delete />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}
