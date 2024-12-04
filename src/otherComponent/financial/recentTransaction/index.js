import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function recentTransaction(props) {
  const {viewRTLStyle, textRTLStyle, isDark, currSymbol, currValue} =
    useValues();
  return (
    <View style={[styles.mainContainer, props.mainContainer]}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={props.data}
        renderItem={({item}) => {
          return (
            <View
              style={[
                styles.container,
                props.container,
                {
                  backgroundColor: isDark
                    ? appColors.gray
                    : appColors.financeFont,
                },
              ]}>
              <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
                <View style={[styles.mainView, {flexDirection: viewRTLStyle}]}>
                  {item.image ? (
                    <Image
                      source={item.image}
                      style={[styles.image, props.imageStyle]}
                    />
                  ) : (
                    <View style={styles.letterView}>
                      <Text style={styles.letter}>{item.letter}</Text>
                    </View>
                  )}
                  <View style={styles.textContainer}>
                    <Text
                      style={[
                        styles.name,
                        props.nameStyle,
                        {
                          textAlign: textRTLStyle,
                          color: isDark ? appColors.darkTheme : appColors.gray,
                        },
                      ]}>
                      {t(item.name)}
                    </Text>
                    {item.date && (
                      <Text
                        style={[styles.textStyle, {textAlign: textRTLStyle}]}>
                        {t(item.date)}
                      </Text>
                    )}
                    {item.mobileNumber && (
                      <Text
                        style={[
                          styles.textStyle,
                          props.textStyle,
                          {textAlign: textRTLStyle},
                        ]}>
                        {item.mobileNumber}
                      </Text>
                    )}
                  </View>
                </View>
                {item.price && (
                  <View>
                    <Text
                      style={[
                        styles.price,
                        {color: isDark ? appColors.darkTheme : appColors.gray},
                      ]}>
                      {item.symbol}
                      {currSymbol}
                      {(currValue * item.price).toFixed(2)}
                    </Text>
                  </View>
                )}
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
