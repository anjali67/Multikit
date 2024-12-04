import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {t} from 'i18next';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default function BottomView(props) {
  const {textRTLStyle, viewRTLStyle, isRTL, isDark} = useValues();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        props.navigation.navigate('ShopPage', {navigation: props.navigation});
      }}
      style={styles.mainView}>
      <View
        style={[
          styles.container,
          {backgroundColor: isDark ? appColors.blackColor : appColors.banner},
        ]}>
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.discount,
              {
                textAlign: textRTLStyle,
                color: isDark ? appColors.white : appColors.white,
              },
            ]}>
            {t('ecommerce.40discount')}
          </Text>
          <View
            style={[
              styles.mainContainer,
              {alignItems: isRTL ? 'flex-end' : 'flex-start'},
            ]}>
            <Text
              style={[
                styles.textStyle,
                {
                  textAlign: textRTLStyle,
                },
              ]}>
              {t('ecommerce.handBags')}
            </Text>

            <Text
              style={[
                styles.textStyle,
                styles.text,
                {
                  textAlign: textRTLStyle,
                  left: isRTL ? windowWidth(2) : 0,
                },
              ]}>
              {t('ecommerce.entireStock')}
            </Text>
          </View>
          <View
            style={[
              styles.row,
              {
                flexDirection: viewRTLStyle,
              },
            ]}>
            <Text
              style={[
                styles.content,
                {color: isDark ? appColors.white : appColors.white},
              ]}>
              {t('ecommerce.Slings')}
            </Text>
            <View style={styles.dot}></View>
            <Text
              style={[
                styles.content,
                {color: isDark ? appColors.white : appColors.white},
              ]}>
              {t('ecommerce.handBags')}
            </Text>
            <View style={styles.dot}></View>
            <Text
              style={[
                styles.content,
                {color: isDark ? appColors.white : appColors.white},
              ]}>
              {t('foodProfile.Wallets')}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
