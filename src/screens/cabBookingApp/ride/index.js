import React from 'react';
import {View, Text, FlatList, ImageBackground, Image} from 'react-native';
import HomeView from '@otherComponent/cabBooking/homeView';
import styles from './styles';
import {t} from 'i18next';
import {chooseRideData} from '@utils/json/cabBooking';
import {cabBg} from '@utils/images/images';
import {useValues} from '@App';
import BtnView from '@otherComponent/cabBooking/btnView';
import {windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default function chooseRide({navigation}) {
  const {currSymbol, currValue, viewRTLStyle, isDark, textRTLStyle, isRTL} =
    useValues();
  return (
    <HomeView
      contentContainerStyle={styles.contentContainerStyle}
      content={
        <View>
          <View style={styles.textView}>
            <Text
              style={[
                styles.title,
                {
                  textAlign: textRTLStyle,
                  color: isDark ? appColors.white : appColors.cabText,
                },
              ]}>
              {t('cabBooking.chooseRide')}
            </Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={chooseRideData}
              renderItem={({item, index}) => {
                return (
                  <View
                    style={[
                      styles.rowView,
                      {
                        elevation: index == 0 ? 2 : 0,
                        flexDirection: viewRTLStyle,
                        backgroundColor: isDark
                          ? appColors.darkTheme
                          : appColors.white,
                      },
                    ]}>
                    <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
                      <ImageBackground
                        resizeMode="contain"
                        source={cabBg}
                        style={styles.baground}>
                        <Image
                          source={item.image}
                          style={[
                            styles.image,
                            {right: isRTL ? windowWidth(20) : null},
                          ]}
                        />
                      </ImageBackground>
                      <View
                        style={[
                          styles.textContainer,
                          {
                            marginHorizontal: isRTL
                              ? windowWidth(6)
                              : windowWidth(-4),
                          },
                        ]}>
                        <Text
                          style={[
                            styles.text,
                            {
                              textAlign: textRTLStyle,
                              color: isDark
                                ? appColors.white
                                : appColors.cabText,
                            },
                          ]}>
                          {t(item.title)}
                        </Text>
                        <Text
                          style={[styles.content, {textAlign: textRTLStyle}]}>
                          {t(item.content)}
                        </Text>
                      </View>
                    </View>
                    <Text style={styles.price}>
                      {currSymbol}
                      {(currValue * item.price).toFixed(2)}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
          <BtnView
            onBtnPress={() => {
              navigation.navigate('RideDetails');
            }}
            btnTitle={t('cabBooking.chooseCab')}
          />
        </View>
      }
    />
  );
}
