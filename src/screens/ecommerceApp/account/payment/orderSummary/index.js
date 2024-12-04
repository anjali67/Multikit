import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import styles from './styles';
import {useValues} from '@App';
import {t} from 'i18next';
import {order} from '@utils/json/ecommerce';
import {windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default orderSummary = props => {
  const {viewRTLStyle, textRTLStyle, isRTL, currSymbol, currValue, isDark} =
    useValues();
  return (
    <View style={styles.mainView}>
      <Text
        style={[
          styles.title,
          {
            textAlign: textRTLStyle,
            left: isRTL ? -10 : windowWidth(10),
            color: isDark ? appColors.white : appColors.ecommerceFont,
          },
        ]}>
        {t('orderSummary.OrderSummary')}
      </Text>
      <FlatList
        data={order}
        style={styles.container}
        ItemSeparatorComponent={() => <View style={styles.orderSeperator} />}
        renderItem={({item, index}) => (
          <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
            <Image source={item.image} style={styles.imageStyle} />
            <View style={styles.textContainer}>
              <Text
                style={[
                  styles.name,
                  {color: isDark ? appColors.white : appColors.ecommerceFont},
                ]}>
                {t(item.name)}
              </Text>
              <View
                style={[
                  styles.row,
                  {
                    flexDirection: viewRTLStyle,
                    marginHorizontal: isRTL ? 10 : 0,
                  },
                ]}>
                <Text style={[styles.textStyle, {textAlign: textRTLStyle}]}>
                  {t('ecommerce.size')}
                </Text>
                <Text style={styles.textStyle}> : </Text>
                {isRTL ? (
                  <Text style={styles.textStyle}>, {t(item.size)}</Text>
                ) : (
                  <Text style={styles.textStyle}>{t(item.size)},</Text>
                )}
                <Text
                  style={[
                    styles.textStyle,
                    {textAlign: textRTLStyle, marginHorizontal: 6},
                  ]}>
                  {t('ecommerce.qauantity')}
                </Text>
                <Text style={styles.textStyle}>:</Text>
                <Text style={styles.textStyle}> 1 </Text>
              </View>
              <Text style={[styles.price, {textAlign: textRTLStyle}]}>
                {currSymbol}
                {(item.price * currValue).toFixed(2)}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};
