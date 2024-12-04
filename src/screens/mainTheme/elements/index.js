import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {elementsPages} from '@utils/json/mainTheme';
import styles from './styles';
import BoxContainer from '@otherComponent/mainTheme/boxContainer/BoxContainer';
import {useTranslation} from 'react-i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function Element({navigation}) {
  const {viewRTLStyle, textRTLStyle, isDark} = useValues();
  const {t} = useTranslation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDark ? appColors.blackColor : appColors.white,
      }}>
      <View style={styles.header}></View>
      <BoxContainer
        contentContainerStyle={styles.contentContainerStyle}
        title={t('mainTheme.elementsPages')}
        height={'12.7%'}
        content={
          <View>
            {elementsPages.map(item => {
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
                  <Text style={[styles.letter, {textAlign: textRTLStyle}]}>
                    {item.number}
                  </Text>
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
                    <Text style={[styles.subTitle, {textAlign: textRTLStyle}]}>
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
