import React from 'react';
import {View, Image, Text} from 'react-native';
import {nftHomeBg} from '@utils/images/images';
import homeStyle from '../styles';
import {t} from 'i18next';

export default function banner() {
  return (
    <View>
      <View>
        <Image source={nftHomeBg} style={homeStyle.image} />
        <View style={homeStyle.textView}>
          <Text style={homeStyle.textStyle}>{t('nft.bannerContent')}</Text>
          <View style={homeStyle.containerView}>
            <Text style={homeStyle.text}>{t('nft.exploreNow')}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
