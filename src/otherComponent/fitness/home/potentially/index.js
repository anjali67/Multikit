import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import {crown} from '@utils/images/images';
import styles from '../styles/styles';
import {t} from 'i18next';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {potentialData} from '@utils/json/fitness';
import LinearGradient from 'react-native-linear-gradient';
import {Play} from '@assets/images/fitness_theme/svg/play';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function potentiallySection() {
  const {isDark, viewRTLStyle, isRTL, textRTLStyle} = useValues();
  return (
    <View style={[styles.margin, {marginTop: 10}]}>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        <Image source={crown} style={styles.crownImg} />
        <Text
          style={[
            styles.name,
            {
              marginTop: windowHeight(4),
              marginHorizontal: windowWidth(8),
              fontFamily: appFonts.NunitoSansSemiBold,
              fontSize: fontSizes.FONT22,
              color: isDark ? appColors.white : appColors.fontColor,
            },
          ]}>
          {t('fitness.unlockPotential')}
        </Text>
      </View>
      <FlatList
        data={potentialData}
        horizontal
        contentContainerStyle={styles.marginBottom}
        renderItem={({item, index}) => (
          <LinearGradient
            colors={['#1EA6EC', '#4466F2']}
            style={styles.gradient}
            start={{x: 0.3, y: 0.3}}
            end={{x: 1, y: 1}}>
            <View style={[styles.rowView, {flexDirection: viewRTLStyle}]}>
              <View
                style={[
                  styles.containerStyle,
                  {
                    marginLeft: isRTL ? 40 : windowWidth(20),
                    right: isRTL ? -8 : null,
                  },
                ]}>
                <Text style={[styles.nameStyle, {textAlign: textRTLStyle,  fontSize: fontSizes.FONT23,}]}>
                  {t(item.name)}
                </Text>
                <View
                  style={[
                    styles.row,
                    {
                      alignItems: 'center',
                      marginTop: 7,
                      flexDirection: viewRTLStyle,
                    },
                  ]}>
                  <Play />
                  <Text style={[styles.time, {color: appColors.white}]}>
                    {item.time} {t('fitness.min')}
                  </Text>
                </View>
              </View>
              <View>
                <Image source={item.image} style={styles.potentialImg} />
              </View>
            </View>
          </LinearGradient>
        )}
        ItemSeparatorComponent={() => <View style={{marginRight: 15}}></View>}
      />
    </View>
  );
}
