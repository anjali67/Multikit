import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {topCollections} from '@utils/json/nft';
import {t} from 'i18next';
import styles from '../styles';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {useValues} from '@App';
import {useNavigation} from '@react-navigation/native';

export default function topCollection(props) {
  const navigation = useNavigation();
  const {
    currSymbol,
    currValue,
    viewRTLStyle,
    isDark,
    textRTLStyle,
    viewSelfRTLStyle,
  } = useValues();
  return (
    <View style={styles.marginTop}>
      <FlatList
        data={props.data ? props.data : topCollections}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                navigation.navigate('NftSingleDetails', {
                  topcollections: item,
                });
              }}
              style={[
                styles.row,
                {
                  alignItems: props.showIcon ? 'center' : '',
                  flexDirection: viewRTLStyle,
                },
              ]}>
              <View style={{flexDirection: viewRTLStyle, alignItems: 'center'}}>
                <View
                  style={
                    index == 0
                      ? props.imageStyle
                        ? props.imageStyle
                        : styles.imageView
                      : null
                  }>
                  <Image
                    source={item.image}
                    style={[styles.collectionImg, props.imageStyle]}
                  />
                </View>
                <View style={styles.margin}>
                  {item.title && (
                    <Text
                      style={[
                        styles.text,
                        {
                          fontSize: fontSizes.FONT19HALF,
                          color: isDark ? appColors.white : appColors.nftBtn,
                          textAlign: textRTLStyle,
                        },
                      ]}>
                      {t(item.title)}
                    </Text>
                  )}
                  {item.token && (
                    <Text
                      style={[
                        styles.text,
                        {
                          fontSize: fontSizes.FONT20,
                          color: appColors.nftTitle,
                          color: isDark ? appColors.white : appColors.nftBtn,
                          textAlign: textRTLStyle,
                        },
                      ]}>
                      {t(item.token)} {t(item.unit)}
                    </Text>
                  )}

                  {item.price && (
                    <Text style={[styles.content, {textAlign: textRTLStyle}]}>
                      {currSymbol}
                      {currValue * item.price.toFixed(2)}{' '}
                    </Text>
                  )}
                  {item.content && (
                    <Text style={[styles.content, {textAlign: textRTLStyle}]}>
                      {t(item.content)}
                    </Text>
                  )}
                  {item.eth && (
                    <Text style={[styles.content, {textAlign: textRTLStyle}]}>
                      {t('nft.sale')} -{' '}
                      <Text
                        style={[
                          styles.content,
                          {
                            color: appColors.nftTitle,
                            fontFamily: appFonts.MontserratMedium,
                          },
                        ]}>
                        {t(item.eth)} {t('nft.eth')}
                      </Text>
                    </Text>
                  )}
                </View>
              </View>
              {props.showIcon ? (
                <View
                  style={[
                    styles.circleView,
                    {
                      backgroundColor: isDark
                        ? appColors.darkTheme
                        : appColors.bgColor,
                    },
                  ]}>
                  {props.icon}
                </View>
              ) : (
                <View>
                  <Text
                    style={[
                      styles.rate,
                      {
                        color: isDark ? appColors.white : appColors.nftTitle,
                      },
                    ]}>
                    {t(item.rate)} {t('nft.eth')}
                  </Text>
                  <Text
                    style={[
                      styles.text,
                      {
                        alignSelf: viewSelfRTLStyle,
                        marginTop: 2,
                        color: index === 0 ? '#FF2626' : '#038800',
                      },
                    ]}>
                    {t(item.rateInPercentage) + '%'}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          );
        }}
        ItemSeparatorComponent={() => (
          <View style={[styles.seperator, props.seperator]}></View>
        )}
      />
      {props.showLastLine && (
        <View style={[styles.seperator, {marginTop: 0}]}></View>
      )}
    </View>
  );
}
