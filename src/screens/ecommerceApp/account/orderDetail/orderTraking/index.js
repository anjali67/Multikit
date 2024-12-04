import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {seperator} from '@utils/images/images';
import {t} from 'i18next';
import {orderTrackData} from '@utils/json/ecommerce';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function OrderTraking(props) {
  const {isDark, textRTLStyle, viewRTLStyle, isRTL} = useValues();
  return (
    <FlatList
      data={orderTrackData}
      renderItem={({item, index}) => {
        return (
          <View style={styles.mainContainer}>
            <View style={[styles.location, {flexDirection: viewRTLStyle}]}>
              <View>
                {index != orderTrackData.length - 1 && (
                  <Image source={seperator} style={styles.sepratorImg} />
                )}
                <View style={styles.homeView}>
                  <View style={styles.option}>{item.icon}</View>
                </View>
              </View>
              <View style={styles.storeLocation}>
                <View style={styles.margin}>
                  <Text
                    style={[
                      styles.locationTxt,
                      {
                        textAlign: textRTLStyle,
                        color: isDark
                          ? appColors.white
                          : appColors.ecommerceFont,
                      },
                    ]}>
                    {t(item.title)}
                  </Text>
                  <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
                    {isRTL ? (
                      <>
                        <Text style={styles.date}>
                          {t(item.time)}
                          {item.date && <Text style={styles.date}> </Text>}
                        </Text>
                        {item.date && (
                          <Text style={styles.date}>{item.date} | </Text>
                        )}
                      </>
                    ) : (
                      <>
                        <Text style={styles.date}>
                          {t(item.time)}
                          {item.date && <Text style={styles.date}> | </Text>}
                        </Text>
                        {item.date && (
                          <Text style={styles.date}>{item.date}</Text>
                        )}
                      </>
                    )}
                  </View>
                </View>
              </View>
            </View>
          </View>
        );
      }}
      ItemSeparatorComponent={() => <View />}
    />
  );
}
