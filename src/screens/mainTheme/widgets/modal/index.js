import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import appColors from '@theme/appColors';
import WidgetsBg from '@otherComponent/mainTheme/widgets/background';
import {t} from 'i18next';
import {fontSizes, windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {useValues} from '@App';

export default function modal({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <WidgetsBg
        navigation={navigation}
        title={t('mainTheme.modal')}
        subContent={t('mainTheme.modalContent')}
        content={
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('FilterModal');
              }}
              activeOpacity={0.9}
              style={[
                styles.btnView,
                {
                  backgroundColor: isDark
                    ? appColors.darkTheme
                    : appColors.verticalLine,
                },
              ]}>
              <Text
                style={[
                  styles.title,
                  {color: isDark ? appColors.white : appColors.fontColor},
                ]}>
                {t('mainTheme.openModal')}
              </Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  btnView: {
    margin: windowHeight(20),
    backgroundColor: appColors.verticalLine,
    paddingVertical: windowHeight(12),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(4),
  },
  title: {
    color: appColors.fontColor,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT20,
  },
});
