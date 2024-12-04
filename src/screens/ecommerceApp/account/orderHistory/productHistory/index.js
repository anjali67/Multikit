import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function ProductHistory(props) {
  const {viewRTLStyle, isRTL, isDark, currSymbol, currValue} = useValues();
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
                        {flexDirection: viewRTLStyle, left: isRTL && 12},
                      ]}>
                      {isRTL ? (
                        <>
                          <Text style={styles.sizeText}>
                            : {t('ecommerce.size')}
                          </Text>
                          <Text style={styles.sizeText}>, {t(item.size)} </Text>
                        </>
                      ) : (
                        <>
                          <Text style={styles.sizeText}>
                            {t('ecommerce.size')} :{' '}
                          </Text>
                          <Text style={styles.sizeText}>{t(item.size)}, </Text>
                        </>
                      )}
                      {isRTL ? (
                        <>
                          <Text style={styles.sizeText}>
                            : {t('ecommerce.qauantity')}
                          </Text>
                          <Text style={styles.sizeText}>{item.quantity}</Text>
                        </>
                      ) : (
                        <>
                          <Text style={styles.sizeText}>
                            {t('ecommerce.qauantity')} :
                          </Text>
                          <Text style={styles.sizeText}>{item.quantity}</Text>
                        </>
                      )}
                    </View>
                    <View
                      style={[
                        styles.row,
                        styles.top,
                        {flexDirection: viewRTLStyle},
                      ]}>
                      <Text style={[styles.price]}>
                        {currSymbol}
                        {(currValue * item.price).toFixed(2)}
                      </Text>
                      {props.showViewDetails && (
                        <Text style={styles.viewDetail}>
                          {t('ecommerce.viewDetails')}
                        </Text>
                      )}
                    </View>
                  </View>
                </View>
                {item.delivered && (
                  <View
                    style={[
                      styles.deliverView,
                      {
                        backgroundColor: isDark
                          ? appColors.darkTheme
                          : appColors.white,
                      },
                    ]}>
                    <Text
                      style={[
                        styles.text,
                        {
                          color: isDark
                            ? appColors.white
                            : appColors.ecommerceFont,
                        },
                      ]}>
                      {t(item.delivered)}
                    </Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
