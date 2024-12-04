import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {sendColor} from '@utils/images/images';
import {t} from 'i18next';
import {DownArrow} from '@assets/images/common/svg/downArrow';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {BellNotification} from '@assets/images/main_theme_images/svg/bellNotification';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function HomeHeader() {
  const {viewRTLStyle, isRTL, isDark} = useValues();
  return (
    <View style={[styles.mainContainer, {flexDirection: viewRTLStyle}]}>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        <Image source={sendColor} style={styles.image} />
        <View style={styles.textView}>
          <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
            <Text
              style={[styles.text, {marginLeft: isRTL ? windowWidth(8) : 0,color:isDark ? appColors.white : appColors.foodSecondary }]}>
              {t('bottomTab.home')}
            </Text>
            <DownArrow width={windowWidth(15)} height={windowHeight(20)} />
          </View>
          <Text style={styles.content}>{t('homeHeader.content')}</Text>
        </View>
      </View>
      <View style={styles.notificationView}>
        <BellNotification
          color={isDark ? appColors.white : appColors.black}
          strokeWidth={1.7}
          bellColor={'red'}
          height={windowHeight(28)}
          width={windowWidth(28)}
        />
      </View>
    </View>
  );
}
