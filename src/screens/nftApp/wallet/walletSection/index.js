import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {nftwallet1} from '@utils/images/images';
import styles from '../styles';
import {t} from 'i18next';
import {useValues} from '@App';
import {metaMask} from '@utils/images/images';
import {Copy} from '@assets/images/nft_theme/svg/copy';
import {paymentMethods} from '@utils/json/nft';
import {fontSizes} from '@theme/appConstant';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import appColors from '@theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';

const Tab = createMaterialTopTabNavigator();

export default function walletSection() {
  const {viewRTLStyle, textRTLStyle, isRTL, currSymbol, currValue, isDark} =
    useValues();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark ? appColors.darkTheme : appColors.grayLight,
          marginHorizontal: windowWidth(20),
          bottom: windowHeight(2),
        },
      ]}>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        <Image source={nftwallet1} style={styles.image} />
        <View style={styles.margin}>
          <Text
            style={[
              styles.title,
              {
                color: isDark ? appColors.white : appColors.nftTitle,
                textAlign: textRTLStyle,
              },
            ]}>
            {t('blog.markJecno')}
          </Text>
          <Text
            style={[
              styles.price,
              {
                color: isDark ? appColors.white : appColors.nftTitle,
                textAlign: textRTLStyle,
              },
            ]}>
            {currSymbol}
            {548485 * currValue}
          </Text>
          <View
            style={[styles.row, {marginTop: 3, flexDirection: viewRTLStyle}]}>
            <Image source={metaMask} style={styles.imageStyle} />
            <Text
              style={[
                styles.content,
                {color: isDark ? appColors.white : appColors.cabContent},
              ]}>
              {t('nft.walletContent1')}
            </Text>
            <View style={{marginTop: 6}}>
              <Copy color={isDark ? appColors.white : '#777777'} />
            </View>
          </View>
        </View>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        inverted={isRTL ? true : false}
        horizontal
        data={paymentMethods}
        renderItem={({item, index}) => (
          <View
            style={[
              styles.containerView,
              {
                backgroundColor: isDark
                  ? appColors.blackColor
                  : appColors.white,
              },
            ]}>
            {item.icon}
            <Text
              style={[
                styles.price,
                {
                  fontSize: fontSizes.FONT18,
                  color: isDark ? appColors.white : appColors.nftTitle,
                },
              ]}>
              {t(item.name)}
            </Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.right}></View>}
      />
    </View>
  );
}
