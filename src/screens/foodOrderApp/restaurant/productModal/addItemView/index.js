import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {t} from 'i18next';
import {ArrowRight} from '@assets/images/common/svg/arrowright';
import {useValues} from '@App';
import {Back} from '@assets/images/main_theme_images/svg/back';
import appColors from '@theme/appColors';

export default function AddItemView({
  onViewCart,
  totalQuantity,
  price,
  title,
  containerStyle,
  btnStyle,
  btnText,
}) {
  const {viewRTLStyle, isDark, isRTL, currSymbol, currValue} = useValues();

  return (
    <View style={[styles.row, containerStyle, {flexDirection: viewRTLStyle}]}>
      <View>
        {totalQuantity?.length > 0 ? (
          <View>
            <Text style={styles.text}>
              {totalQuantity.length + t('productModal.items')}
            </Text>
            <Text
              style={[
                styles.price,
                {color: isDark ? appColors.white : appColors.black},
              ]}>
              {currSymbol}
              {(currValue * price).toFixed(2)}
            </Text>
          </View>
        ) : (
          <View>
            <Text style={styles.text}>{1 + t('productModal.items')}</Text>
            <Text
              style={[
                styles.price,
                {color: isDark ? appColors.white : appColors.black},
              ]}>
              {currSymbol}
              {(currValue * 0).toFixed(2)}
            </Text>
          </View>
        )}
      </View>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onViewCart}
        style={[styles.rowContainer, btnStyle, {flexDirection: viewRTLStyle}]}>
        <View activeOpacity={0.7}>
          <Text style={[styles.cartText, btnText]}>{title}</Text>
        </View>
        {isRTL ? <Back /> : <ArrowRight />}
      </TouchableOpacity>
    </View>
  );
}
