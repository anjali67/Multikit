import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import styles from './styles';
import {ecommerceBanner} from '@utils/images/images';
import {windowWidth} from '@theme/appConstant';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {windowHeight} from '@theme/appConstant';

export default function HomeBanner() {
  const {isRTL, textRTLStyle, isDark} = useValues();
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        resizeMode="cover"
        borderRadius={windowWidth(7)}
        source={ecommerceBanner}
        style={styles.imageStyle}>
        <View style={styles.textContainer}>
          <View style={{width: windowWidth(140)}}>
            <Text
              style={[
                styles.textStyle,
                {
                  alignSelf: isRTL ? 'flex-end' : 'flex-start',
                  textAlign: textRTLStyle,
                  backgroundColor: isDark
                    ? appColors.white
                    : appColors.ecommorcePrimary,
                  color: isDark ? appColors.ecommerceFont : appColors.white,
                  borderRadius: isRTL ? 0 : windowHeight(4),
                  borderTopLeftRadius: isRTL ? windowWidth(4) : 0,
                  borderTopRightRadius: isRTL ? windowWidth(4) : 0,
                },
              ]}>
              {t('ecommerce.limited')}
            </Text>
            <Text
              style={[
                styles.textStyle,
                styles.text,
                {
                  alignSelf: isRTL ? 'flex-end' : 'flex-start',
                  textAlign: textRTLStyle,
                  backgroundColor: isDark
                    ? appColors.white
                    : appColors.ecommorcePrimary,
                  color: isDark ? appColors.ecommerceFont : appColors.white,
                  borderTopLeftRadius: isRTL ? windowWidth(4) : 0,
                },
              ]}>
              {t('ecommerce.Collection')}
            </Text>
          </View>
          <Text
            style={[
              styles.discount,
              {color: isDark ? appColors.ecommerceFont : appColors.white},
            ]}>
            {t('ecommerce.discount')}
          </Text>
          <Text style={[styles.shop, {left: isRTL ? windowWidth(20) : null}]}>
            {t('common.ShopNow')}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
