import {View, Text, FlatList, ImageBackground} from 'react-native';
import React from 'react';
import styles from './styles';
import {paymentData} from '@utils/json/financial';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function PaymentSection() {
  const {isRTL, isDark} = useValues();
  return (
    <View>
      <FlatList
        style={styles.flatlist}
        horizontal
        inverted={isRTL ? true : false}
        showsHorizontalScrollIndicator={false}
        data={paymentData}
        renderItem={({item}) => {
          return (
            <View style={styles.container}>
              <View
                style={[
                  isDark && styles.mainContainer,
                  {
                    borderBottomColor: item.gradiantColor,
                    borderRightColor: item.gradiantColor,
                  },
                ]}>
                <ImageBackground
                  tintColor={isDark ? appColors.white : null}
                  resizeMode="contain"
                  source={item.image}
                  style={[styles.image]}>
                  {isDark ? item.darkIcon : item.icon}
                  <Text
                    style={[
                      styles.name,
                      {color: isDark ? appColors.darkTheme : appColors.white},
                    ]}>
                    {t(item.name)}
                  </Text>
                </ImageBackground>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
