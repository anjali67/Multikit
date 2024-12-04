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
import {SideArrow} from '@assets/images/common/svg/sideArrow';
import {DownArrow} from '@assets/images/common/svg/downArrow';
import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {useValues} from '@App';
import {BackArrow} from '../../assets/images/common/svg/backArrow';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function SelectCard() {
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
            <TouchableOpacity activeOpacity={0.9}
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
                {isRTL ? (
                  selectedPayment === index ? (
                    <DownArrow />
                  ) : (
                    <BackArrow />
                  )
                ) : selectedPayment === index ? (
                  <DownArrow />
                ) : (
                  <SideArrow />
                )}
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
                    {selectedMethod == key ? (
                      <View
                        style={[
                          styles.radioBtn,
                          {
                            backgroundColor: isDark
                              ? appColors.black
                              : appColors.white,
                            borderWidth: 0,
                            right: isRTL ? windowWidth(10) : 0,
                          },
                        ]}>
                        <View style={styles.radioButtonIcon} />
                      </View>
                    ) : (
                      <View
                        style={[
                          styles.radioBtn,
                          {
                            right: isRTL ? windowWidth(10) : 0,
                            borderColor: isDark
                              ? appColors.gray
                              : appColors.border,
                          },
                        ]}></View>
                    )}

                    <Image source={data.icons} style={styles.icon} />
                    <Text
                      style={[
                        styles.value,
                        {color: isDark ? appColors.white : appColors.black},
                      ]}>
                      {t(data.value)}
                    </Text>
                  </TouchableOpacity>
                ))}
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {}}
                  style={[
                    styles.newAddView,
                    {
                      flexDirection: viewRTLStyle,
                      backgroundColor: isDark ? '#222222' : appColors.category,
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
                          left: isRTL ? windowWidth(7) : 0,
                          color: isDark ? appColors.white : appColors.black,
                          marginRight: isRTL ? '' : windowWidth(10),
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
                  borderColor: appColors.groceryBtn,
                  borderWidth: 1,
                  backgroundColor: isDark
                    ? appColors.blackColor
                    : appColors.category,
                },
              ]}>
              <Text
                style={[
                  styles.addAdd,
                  {
                    color: appColors.groceryBtn,
                    fontFamily: appFonts.PublicSansBold,
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
  );
}
