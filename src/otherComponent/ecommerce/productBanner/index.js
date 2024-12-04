import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {productBanner} from '@utils/images/images';
import {windowWidth} from '@theme/appConstant';
import {t} from 'i18next';
import styles from './styles';
import {useValues} from '@App';

export default function procutBanner() {
  const {isDark, viewRTLStyle, isRTL} = useValues();
  return (
    <View style={styles.container}>
      <ImageBackground
        borderRadius={windowWidth(10)}
        source={productBanner}
        style={styles.imageStyle}>
        <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
          <Text style={[styles.offer, {right: isRTL ? 8 : null}]}>
            {t('ecommerce.offer')}
          </Text>
          <View style={styles.shopView}>
            <Text style={styles.shopText}>{t('common.ShopNow')}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
