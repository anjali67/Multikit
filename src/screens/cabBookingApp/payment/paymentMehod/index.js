import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import styles from '../styles';
import {paymentsMethods} from '@utils/json/cabBooking';
import {t} from 'i18next';
import LinearGradient from 'react-native-linear-gradient';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function paymentMethod() {
  const {currSymbol, currValue, viewRTLStyle, isDark, textRTLStyle} =
    useValues();

  const [selectedPayment, setSelectedPayment] = useState();

  const onSelectedPayment = value => {
    setSelectedPayment(value);
  };

  return (
    <View>
      <FlatList
        data={paymentsMethods}
        renderItem={({index, item}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => onSelectedPayment(index)}
              style={[styles.main, {flexDirection: viewRTLStyle}]}>
              <View activeOpacity={0.9} style={styles.circle}>
                {selectedPayment === index && (
                  <LinearGradient
                    colors={[
                      appColors.avtiveGradiant,
                      appColors.activeGradiant1,
                    ]}
                    start={{x: 1, y: 0.2}}
                    end={{x: 1, y: 1}}
                    style={styles.innerCircle}></LinearGradient>
                )}
              </View>
              <Image source={item.image} style={styles.image} />
              <Text
                style={[
                  styles.title,
                  {color: isDark ? appColors.white : appColors.cabText},
                ]}>
                {t(item.title)}
              </Text>
              {item.price && (
                <Text style={styles.price}>
                  {t(item.balance)}: {currSymbol}
                  {(currValue * item.price).toFixed(2)}{' '}
                </Text>
              )}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
