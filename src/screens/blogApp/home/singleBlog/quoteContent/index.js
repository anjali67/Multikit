import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';
import {Quotes} from '@assets/images/blog_theme/svg/quotes';
import {t} from 'i18next';
import {windowWidth} from '@theme/appConstant';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function quoteContent() {
  const {isDark, viewRTLStyle, textRTLStyle, isRTL} = useValues();
  return (
    <View>
      <View
        style={[
          styles.marginTop,
          styles.rowContainer,
          {flexDirection: viewRTLStyle},
        ]}>
        <View
          style={[
            styles.quotesView,
            {
              marginRight: isRTL ? null : windowWidth(16),
              marginHorizontal: isRTL ? 6 : null,
            },
          ]}>
          <Quotes />
        </View>
        <Text
          style={[
            styles.followText,
            {
              width: windowWidth(400),
              textAlign: textRTLStyle,
              color: isDark ? appColors.white : appColors.blackColor,
            },
          ]}>
          {t('blog.textContent')}
        </Text>
      </View>
      <View style={styles.blankView}></View>
      <Text style={[styles.parahraph, {textAlign: textRTLStyle}]}>
        {t('blog.paragraph')}
      </Text>
      <View style={styles.blankView}></View>
      <Text style={[styles.parahraph, {textAlign: textRTLStyle}]}>
        {t('blog.paragraph1')}
      </Text>
    </View>
  );
}
