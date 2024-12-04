import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import cartStyle from '.././../cart/styles';
import {paymentArr} from '@utils/json/learning';
import {t} from 'i18next';
import {fontSizes} from '@theme/appConstant';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function paymentList() {
  const [selectedPayment, setSelectedPayment] = useState();
  const onSelectedPayment = value => {
    setSelectedPayment(value);
  };

  const {viewRTLStyle, isRTL, textRTLStyle, isDark} = useValues();
  return (
    <View style={[cartStyle.main, {marginVertical: 14}]}>
      <FlatList
        data={paymentArr}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => onSelectedPayment(index)}
            style={[
              cartStyle.rowView,
              {
                justifyContent: 'space-between',
                paddingBottom: 2,
                alignItems: 'center',
                flexDirection: viewRTLStyle,
              },
            ]}>
            <View
              style={[
                cartStyle.rowView,
                {alignItems: 'center', flexDirection: viewRTLStyle},
              ]}>
              <View
                style={[
                  cartStyle.imageView,
                  {
                    right: isRTL ? 10 : null,
                    backgroundColor: isDark
                      ? appColors.darkTheme
                      : appColors.white,
                  },
                ]}>
                <Image
                  tintColor={isDark ? appColors.white : appColors.learningBtn}
                  source={item.icon}
                  style={cartStyle.image}
                />
              </View>
              <Text
                style={[
                  cartStyle.btn,
                  {
                    fontSize: fontSizes.FONT19,
                    textAlign: textRTLStyle,
                    color: isDark ? appColors.white : appColors.learningBtn,
                  },
                ]}>
                {t(item.name)}
              </Text>
            </View>
            <View style={cartStyle.circle}>
              {selectedPayment == index && (
                <View style={cartStyle.innerCircle}></View>
              )}
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => (
          <View style={cartStyle.marginBottom}></View>
        )}
      />
    </View>
  );
}
