import React from 'react';
import {View, Text, Image} from 'react-native';
import Styles from './styles';
import {orderDetails} from '@utils/json/grocery';
import {t} from 'i18next';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default ItemsView = props => {
  const {viewRTLStyle, textRTLStyle, isRTL, isDark, currSymbol, currValue} =
    useValues();
  return (
    <View>
      <Text
        style={[
          Styles.item,
          {
            textAlign: textRTLStyle,
            color: isDark ? appColors.white : appColors.groceryBtn,
          },
        ]}>
        {t('orderDetailPage.items')}
      </Text>
      {orderDetails.map(item => (
        <View style={[Styles.listView, {flexDirection: viewRTLStyle}]}>
          <View
            style={[
              Styles.boxView,
              {
                backgroundColor: isDark
                  ? appColors.blackColor
                  : appColors.category,
              },
            ]}>
            <Image source={item.image} style={Styles.image} />
          </View>
          <View
            style={[
              Styles.nameView,
              {
                left: isRTL ? windowWidth(10) : 0,
                marginLeft: isRTL ? windowWidth(10) : windowWidth(20),
              },
            ]}>
            <Text
              style={[
                Styles.nameTxt,
                {color: isDark ? appColors.white : appColors.black},
              ]}>
              {t(item.title)}
            </Text>
            <Text style={[Styles.gramTxt, {textAlign: textRTLStyle}]}>
              {t(item.weight)}
            </Text>
          </View>
          <Text
            style={[
              Styles.cross,
              {color: isDark ? appColors.white : appColors.black},
            ]}>
            ×
          </Text>
          <Text
            style={[
              Styles.quantityTxt,
              {color: isDark ? appColors.white : appColors.black},
            ]}>
            {item.quantity}
          </Text>
          <Text
            style={[
              Styles.price,
              {color: isDark ? appColors.white : appColors.groceryBtn},
            ]}>
            {currSymbol}
            {(currValue * item.price).toFixed(2)}
          </Text>
        </View>
      ))}
    </View>
  );
};
