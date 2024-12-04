import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {apps} from '@utils/json/mainTheme';
import styles from './styles';
import BoxContainer from '@otherComponent/mainTheme/boxContainer/BoxContainer';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {useTranslation} from 'react-i18next';
import {fontSizes, windowWidth} from '@theme/appConstant';

export default function FullApp({navigation}) {
  const {viewRTLStyle, textRTLStyle, isDark, isRTL} = useValues();
  const {t} = useTranslation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDark ? appColors.blackColor : appColors.white,
      }}>
      <View style={styles.header}></View>
      <BoxContainer
        title={t('mainTheme.fullApps')}
        height={'12.6%'}
        content={
          <View style={styles.contentContainerStyle}>
            {apps.map(item => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    navigation.navigate(item.screen);
                  }}
                  style={[
                    styles.container,
                    {
                      flexDirection: viewRTLStyle,
                      backgroundColor: isDark
                        ? appColors.blackColor
                        : appColors.white,
                    },
                  ]}>
                  <View style={styles.left}>
                    <Text
                      style={[
                        styles.heading,
                        {
                          textAlign: textRTLStyle,
                          color: isDark ? appColors.white : appColors.fontColor,
                        },
                      ]}>
                      {t(item.title)}
                    </Text>
                    <Text
                      style={[
                        styles.subTitle,
                        {
                          textAlign: textRTLStyle,
                          width: windowWidth(230),
                          fontSize: fontSizes.FONT16HALF,
                          paddingBottom: 18,
                          right: isRTL ? 10 : null,
                        },
                      ]}>
                      {t(item.content)}
                    </Text>
                  </View>
                  <View>
                    <Image source={item.image} style={styles.imageStyle} />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        }
      />
    </View>
  );
}
