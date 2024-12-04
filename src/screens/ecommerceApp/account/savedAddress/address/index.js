import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {savedAddressData} from '@utils/json/ecommerce';
import {t} from 'i18next';
import {MoreLine} from '@assets/images/common/svg/moreline';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function Address() {
  const [selectedAddress, setSelectedAddress] = useState(0);
  const {isDark, textRTLStyle, viewRTLStyle, isRTL} = useValues();

  const onAddressClick = address => {
    setSelectedAddress(address);
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={savedAddressData}
        renderItem={({index, item}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                onAddressClick(index);
              }}
              style={[
                styles.container,
                {
                  borderWidth: selectedAddress == index ? 1 : 0,
                  backgroundColor:
                    selectedAddress == index
                      ? isDark
                        ? appColors.blackColor
                        : appColors.selectedAddress
                      : isDark
                      ? appColors.blackColor
                      : appColors.bgColor,
                },
              ]}>
              <View
                style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
                <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
                  <View style={styles.bgColor}>{item.icon}</View>
                  <View style={styles.textContainer}>
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
                  </View>
                </View>
                <View>
                  <MoreLine />
                </View>
              </View>
              <View style={styles.textView}>
                <Text style={[styles.title, {textAlign: textRTLStyle}]}>
                  {t(item.title)}
                </Text>
                <Text
                  style={[
                    styles.address,
                    {textAlign: textRTLStyle, width: isRTL ? '100%' : '90%'},
                  ]}>
                  {t(item.address)}
                </Text>
                <View
                  style={[
                    styles.top,
                    styles.row,
                    {flexDirection: viewRTLStyle},
                  ]}>
                  {isRTL ? (
                    <Text style={styles.phoneText}>
                      {''} : {t('ecommerce.phoneNumber')}
                    </Text>
                  ) : (
                    <Text style={styles.phoneText}>
                      {t('ecommerce.phoneNumber')}:{' '}
                    </Text>
                  )}
                  <Text style={styles.phoneText}>{item.phoneNo}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
