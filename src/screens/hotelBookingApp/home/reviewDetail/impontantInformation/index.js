import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';
import LinearGradient from 'react-native-linear-gradient';
import appColors from '@theme/appColors';
import {windowHeight} from '@theme/appConstant';
import {t} from 'i18next';
import InformationRow from './informationRow';
import {useValues} from '@App';

export default function impontantInformation() {
  const {textRTLStyle, viewRTLStyle, isDark} = useValues();
  return (
    <View>
      <View style={styles.container}>
        <LinearGradient
          colors={[appColors.onBoardGradiant, appColors.onBoardGradiant1]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={[
            styles.linearGradient,
            {
              borderRadius: windowHeight(12),
            },
          ]}>
          <View
            activeOpacity={0.9}
            style={[
              styles.innerContainer,
              {
                backgroundColor: isDark
                  ? appColors.blackColor
                  : appColors.white,
              },
            ]}>
            <LinearGradient
              colors={[appColors.onBoardGradiant, appColors.onBoardGradiant1]}
              start={{x: 1, y: 0.4}}
              end={{x: 1, y: 1}}
              style={[styles.linearGradient, styles.backgroundView]}>
              <Text style={[styles.textStyle, {textAlign: textRTLStyle}]}>
                {t('hotelBooking.impontantInformation')}
              </Text>
            </LinearGradient>
            <View>
              <InformationRow title={t('hotelBooking.informationContent')} />
              <InformationRow title={t('hotelBooking.informationContent1')} />
              <InformationRow title={t('hotelBooking.informationContent2')} />
              <InformationRow title={t('hotelBooking.informationContent3')} />
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}
