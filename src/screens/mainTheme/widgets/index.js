import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import BoxContainer from '@otherComponent/mainTheme/boxContainer/BoxContainer';
import {widgets} from '@utils/json/mainTheme';
import styles from '../screens/style/externalStyles';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {useTranslation} from 'react-i18next';

export default function Widget({navigation}) {
  const {viewRTLStyle, isDark, textRTLStyle, isRTL} = useValues();
  const {t} = useTranslation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDark ? appColors.blackColor : appColors.white,
      }}>
      <View style={[styles.header, {height: '31%'}]}></View>
      <BoxContainer
        title={t('mainTheme.widgetsScreens')}
        height={'12.6%'}
        navigation={navigation}
        content={
          <View style={{paddingBottom: 15}}>
            {widgets.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    navigation.navigate(item.screens);
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
                  <View>
                    <Text style={styles.letter}>{index + 1}</Text>
                  </View>
                  <View style={[styles.left, {left: isRTL ? 10 : null}]}>
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
                </TouchableOpacity>
              );
            })}
          </View>
        }
      />
    </View>
  );
}
