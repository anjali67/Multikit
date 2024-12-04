import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import React, {useState} from 'react';
import {payments} from '@utils/json/grocery';
import styles from './styles';
import {t} from 'i18next';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {useValues} from '@App';
import {Increase} from '@assets/images/grocery_assets/svg/increase';
import appColors from '@theme/appColors';
import {Selected} from '@otherComponent/ecommerce/selected';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function CardOptions() {
  const [selectedPayment, setSelectedPayments] = useState();
  const [selectedMethod, setSelectedMethod] = useState();
  const {viewRTLStyle, isRTL, isDark} = useValues();

  const selectPayment = payment => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedMethod(0);
    setSelectedPayments(payment);
  };

  const selectMethod = method => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedMethod(method);
  };

  return (
    <View style={styles.mainView}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={payments}
        style={styles.list}
        renderItem={({item, index}) => (
          <View
            style={[
              styles.listView,
              {
                borderBottomWidth: selectedPayment === index ? 0 : 1,
                borderBottomColor:
                  selectedPayment === index ? '' : appColors.border,
              },
            ]}>
            <View>
              <TouchableOpacity
                onPress={() => selectPayment(index)}
                style={[styles.arrowView, {flexDirection: viewRTLStyle}]}>
                <Text
                  style={[
                    styles.type,
                    {color: isDark ? appColors.white : appColors.black},
                  ]}>
                  {t(item.type)}
                </Text>
                <View style={styles.arrow}>
                  {selectedPayment === index ? (
                    <Text
                      style={[
                        styles.minus,
                        {
                          color: isDark
                            ? appColors.white
                            : appColors.ecommerceFont,
                        },
                      ]}>
                      －
                    </Text>
                  ) : (
                    <Increase
                      height={'12.5'}
                      width={'12.5'}
                      color={isDark ? appColors.white : appColors.ecommerceFont}
                    />
                  )}

                  {/* } */}
                </View>
              </TouchableOpacity>
            </View>
            {selectedPayment === index ? (
              item.isCard ? (
                <View>
                  {item.values.map((data, key) => (
                    <TouchableOpacity
                      onPress={() => selectMethod(key)}
                      activeOpacity={0.7}
                      style={[
                        styles.select,
                        {
                          borderWidth: selectedMethod === key ? 1 : 0,
                          flexDirection: viewRTLStyle,
                          backgroundColor: isDark
                            ? appColors.blackColor
                            : appColors.category,
                        },
                      ]}>
                      <View style={styles.row}>
                        <Image source={data.icons} style={styles.icon} />
                        <Text
                          style={[
                            styles.value,
                            styles.top,
                            {color: isDark ? appColors.white : appColors.black},
                          ]}>
                          {t(data.value)}
                        </Text>
                      </View>
                      {selectedMethod == key && <Selected />}
                    </TouchableOpacity>
                  ))}
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {}}
                    style={[
                      styles.newAddView,
                      {
                        flexDirection: viewRTLStyle,
                        backgroundColor: isDark
                          ? '#222222'
                          : appColors.category,
                      },
                    ]}>
                    <Text
                      style={[
                        styles.addAdd,
                        {color: isDark ? appColors.white : appColors.black},
                      ]}>
                      +
                    </Text>
                    <Text
                      style={[
                        styles.addAdd,
                        {color: isDark ? appColors.white : appColors.black},
                      ]}>
                      {t('paymentsArr.addNewCard')}
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <FlatList
                  data={item.values}
                  numColumns={2}
                  columnWrapperStyle={{justifyContent: 'space-between'}}
                  renderItem={({item, index}) => (
                    <View
                      style={[styles.valueList, {flexDirection: viewRTLStyle}]}>
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => selectMethod(index)}>
                        {selectedMethod == index ? (
                          <View
                            style={[
                              styles.radioBtn,
                              {
                                borderColor: isDark
                                  ? appColors.gray
                                  : appColors.black,
                                height: windowHeight(12),
                                width: windowWidth(19),
                              },
                            ]}>
                            <View
                              style={[
                                styles.radioButtonIcon,
                                {
                                  backgroundColor: isDark
                                    ? appColors.gray
                                    : appColors.black,
                                },
                              ]}
                            />
                          </View>
                        ) : (
                          <View
                            style={[
                              styles.radioBtn,
                              {
                                borderColor: isDark
                                  ? appColors.white
                                  : appColors.black,
                                height: windowHeight(12),
                                width: windowWidth(19),
                              },
                            ]}></View>
                        )}
                      </TouchableOpacity>
                      <Text
                        style={[
                          styles.valueTxt,
                          styles.valueLeft,

                          {
                            left: isRTL ? windowWidth(-4) : 0,
                            color: isDark ? appColors.white : appColors.black,
                            marginRight: isRTL ? 10 : windowWidth(10),
                            textAlign: isRTL ? 'right' : 'left',
                          },
                        ]}>
                        {t(item.value)}
                      </Text>
                    </View>
                  )}
                />
              )
            ) : null}

            {selectedPayment === index && item.isDelivery == true && (
              <View
                style={[
                  styles.newAddView,
                  {
                    borderColor: appColors.forgotFont,
                    borderWidth: 1,
                    backgroundColor: isDark
                      ? appColors.blackColor
                      : appColors.selectedAddress,
                  },
                ]}>
                <Text
                  style={[
                    styles.addAdd,
                    {
                      color: isDark ? appColors.white : appColors.ecommerceFont,
                      fontFamily: appFonts.MontserratSemiBold,
                      fontSize: fontSizes.FONT21,
                    },
                  ]}>
                  {t('paymentsArr.cashOnDelivery')}
                </Text>
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
}
