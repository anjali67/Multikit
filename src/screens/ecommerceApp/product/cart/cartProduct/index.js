import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles';
import {Delete} from '@assets/images/grocery_assets/svg/delete';
import {t} from 'i18next';
import {Edit} from '@assets/images/ecommerce_theme/svg/edit';

import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function CartProduct(props) {
  const {viewRTLStyle, textRTLStyle, isRTL, isDark, currSymbol, currValue} =
    useValues();
  return (
    <View style={styles.main}>
      <FlatList
        data={props.data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => props.navigation.navigate('ecommerceOrderDetails')}
              style={[
                styles.background,
                props.backgroundStyle,
                {
                  backgroundColor: isDark
                    ? appColors.blackColor
                    : appColors.bgColor,
                },
              ]}>
              <View
                style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
                <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
                  <Image source={item.image} style={styles.image} />
                  <View style={styles.textContainers}>
                    <Text
                      style={[
                        styles.name,
                        {
                          textAlign: textRTLStyle,
                          color: isDark
                            ? appColors.white
                            : appColors.ecommerceFont,
                        },
                      ]}>
                      {t(item.name)}
                    </Text>
                    <View
                      style={[
                        styles.row,
                        styles.sizeContainer,
                        {
                          flexDirection: viewRTLStyle,
                          width: isRTL ? '100%' : '90%',
                        },
                      ]}>
                      {isRTL ? (
                        <>
                          <Text style={styles.sizeText}>{t(item.size)} </Text>
                          <Text style={styles.sizeText}>
                            {t('ecommerce.size')} :{' '}
                          </Text>
                        </>
                      ) : (
                        <>
                          <Text style={styles.sizeText}>
                            {t('ecommerce.size')} :{' '}
                          </Text>
                          <Text style={styles.sizeText}>{t(item.size)} </Text>
                        </>
                      )}
                    </View>
                    <View style={styles.priceView}>
                      <View style={styles.priceContainer}>
                        <Text style={styles.price}>
                          {currSymbol}
                          {(currValue * item.price).toFixed(2)}
                        </Text>
                      </View>
                      <View style={{flexDirection: viewRTLStyle}}>
                        {isRTL ? (
                          <>
                            <Text
                              style={[
                                styles.sizeText,
                                {textAlign: textRTLStyle},
                              ]}>
                              {item.quantity}
                            </Text>
                            <Text
                              style={[
                                styles.sizeText,
                                {textAlign: textRTLStyle},
                              ]}>
                              {t('ecommerce.qauantity')} :{' '}
                            </Text>
                          </>
                        ) : (
                          <>
                            <Text
                              style={[
                                styles.sizeText,
                                {textAlign: textRTLStyle},
                              ]}>
                              {t('ecommerce.qauantity')} :{' '}
                            </Text>
                            <Text
                              style={[
                                styles.sizeText,
                                {textAlign: textRTLStyle},
                              ]}>
                              {item.quantity}
                            </Text>
                          </>
                        )}
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.icon, {right: isRTL ? 11 : 7}]}>
                  <Edit />
                </View>
                <View style={styles.icon}>
                  <Delete color={'#545454'} />
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
