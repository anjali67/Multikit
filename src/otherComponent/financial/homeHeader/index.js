import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {t} from 'i18next';
import {financeProfile, hand} from '@utils/images/images';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';
import appColors from '../../../theme/appColors';

export default function homeHeader(props) {
  const {isRTL, setIsRTL, textRTLStyle, viewRTLStyle, isDark, setIsDark} =
    useValues();
  return (
    <View style={[styles.mainContainer, props.mainContainer]}>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        <View>
          <View style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
            <Text style={[styles.title,{  color: isDark ? appColors.darkTheme : appColors.white,}]}>{t('financial.headerTitle')}</Text>
            <Image source={hand} style={styles.handImg} />
          </View>
          <Text style={[styles.content,{ color: isDark ? appColors.fontColor : appColors.gray,}]}>{t('financial.headerContent')}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={financeProfile}
            style={[styles.user, {right: isRTL ? windowWidth(10) : 0}]}
          />
        </View>
      </View>
    </View>
  );
}
