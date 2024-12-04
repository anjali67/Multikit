import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {cards} from '@utils/json/financial';
import {t} from 'i18next';
import {useValues} from '@App';
import {windowWidth} from '../../theme/appConstant';

export default function Cards() {
  const {viewRTLStyle, textRTLStyle, isDark, currSymbol, isRTL, currValue} =
    useValues();
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cards}
        renderItem={({item}) => {
          return (
            <View style={styles.center}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.mainContainer}>
                <View style={[styles.rowView, {flexDirection: viewRTLStyle}]}>
                  <View>
                    <Text style={[styles.text,{textAlign:textRTLStyle}]}>{t(item.name)}</Text>
                    <Text style={[styles.text, styles.top]}>
                      {t(item.cardNumber)}
                    </Text>
                  </View>
                  <View>
                    <Image source={item.visa} style={styles.visaImg} />
                  </View>
                </View>
                <View style={{marginTop: 40}}>
                  <Text
                    style={[
                      styles.cardName,
                      {
                        textAlign: textRTLStyle,
                        right: isRTL && windowWidth(70),
                      },
                    ]}>
                    {t(item.bankName)}
                  </Text>
                  <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
                    <View style={styles.balance}>
                      <Text style={styles.textStyle}>
                        <Text style={styles.textStyle}>
                          {t('financial.totalDue')}:{' '}
                        </Text>
                        {currSymbol}{' '}
                        {(currValue * item.totalDue)
                          .toFixed(2)
                          .toString()
                          .replace(/\B(?=(\d{3})+\b)/g, ',')}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={styles.addView}
                      activeOpacity={0.9}>
                      <Text style={styles.add}>{t('ecommerce.payNoW')}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
