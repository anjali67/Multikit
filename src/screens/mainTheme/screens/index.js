import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import BoxContainer from '@otherComponent/mainTheme/boxContainer/BoxContainer';
import {screens} from '@utils/json/mainTheme';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {useTranslation} from 'react-i18next';

export default function Screen({navigation}) {
  const {viewRTLStyle, isDark, textRTLStyle} = useValues();
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
        title={t('mainTheme.Screens')}
        height={'21%'}
        navigation={navigation}
        content={
          <View>
            {screens.map((item, index) => {
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
                  </View>
                  <View>
                    <Text style={styles.letter}>{item.numofScreens}</Text>
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
