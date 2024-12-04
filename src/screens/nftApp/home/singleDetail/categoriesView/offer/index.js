import React from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from '../../../styles';
import {t} from 'i18next';
import {offerData} from '@utils/json/nft';
import {useValues} from '@App';
import offerStyle from './styles';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default function offer(props) {
  const {viewRTLStyle, textRTLStyle, isDark, currSymbol, currValue, isRTL} =
    useValues();
  return (
    <View>
      <View style={[styles.offerView, {flexDirection: viewRTLStyle}]}>
        <FlatList
          inverted={isRTL ? true : false}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={offerData}
          renderItem={({item, index}) => (
            <View>
              <Text style={[styles.nameStyle, {color: appColors.cabContent}]}>
                {t(item.name)}
              </Text>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={{marginRight: 45}}></View>}
        />
      </View>
      {props.item.items.map(item => (
        <View
          style={[offerStyle.row, {flexDirection: viewRTLStyle, marginTop: 8}]}>
          <View>
            <View style={[offerStyle.row, {flexDirection: viewRTLStyle}]}>
              <Text
                style={[
                  offerStyle.weth,
                  {
                    color: isDark ? appColors.white : appColors.nftTitle,
                    textAlign: textRTLStyle,
                  },
                ]}>
                {item.weth} {t('nft.weth')}
              </Text>
              <Text
                style={[
                  offerStyle.floor,
                  {
                    color: isDark ? appColors.white : appColors.nftTitle,
                    textAlign: textRTLStyle,
                  },
                ]}>
                {item.floor} {t('nft.below')}
              </Text>
              <Text
                style={[
                  offerStyle.floor,
                  {
                    fontSize: fontSizes.FONT18,
                    color: isDark ? appColors.white : appColors.nftTitle,
                    textAlign: textRTLStyle,
                  },
                ]}>
                {item.Expiration} {t('nft.mins')}
              </Text>
              <Text
                style={[
                  offerStyle.floor,
                  {color: appColors.nftBg, textAlign: textRTLStyle},
                ]}>
                {t(item.from)}
              </Text>
            </View>
            <View style={{flexDirection: viewRTLStyle}}>
              <Text
                style={[
                  offerStyle.price,
                  {
                    color: isDark ? appColors.white : appColors.nftTitle,
                  },
                ]}>
                {currSymbol}
                {(currValue * item.price).toFixed(2)}
              </Text>
            </View>
            <View style={offerStyle.border}></View>
          </View>
        </View>
      ))}
    </View>
  );
}
