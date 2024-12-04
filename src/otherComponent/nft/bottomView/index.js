import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import GridBtnWithIcon from '@commonComponents/button/gridBtnWithIcon';
import {useValues} from '@App';

export default function bottomView() {
  const {isDark, viewRTLStyle} = useValues();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark ? appColors.blackColor : appColors.white,
          borderTopWidth: isDark ? 1 : null,
        },
      ]}>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        <Text style={styles.priceText}>
          {t('nft.listingPrice')}: <Text style={styles.price}>1400</Text>
        </Text>
      </View>
      <View style={{flexDirection: viewRTLStyle}}>
        <GridBtnWithIcon
          text={t('nft.buyNow')}
          text1={t('nft.makeOffer')}
          btnBgColor={appColors.nftBtn}
          btn1BgColor={appColors.white}
          btnText1Style={styles.btnText}
          btnTextStyle={styles.btn1Text}
          onBtnPress={() => {}}
          onBtn1Press={() => {}}
          containerStyle={styles.containerStyle}
          btnViewStyle={styles.btnViewStyle}
        />
      </View>
    </View>
  );
}
