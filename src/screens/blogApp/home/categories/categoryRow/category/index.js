import React from 'react';
import {View, Text} from 'react-native';
import {BlogProfile} from '@assets/images/blog_theme/svg/user';
import {ClockOutline} from '@assets/images/common/svg/clockoutline';
import {t} from 'i18next';
import styles from '../../../styles';
import {useValues} from '@App';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default function category(props) {
  const {isDark, viewRTLStyle, textRTLStyle, isRTL} = useValues();
  return (
    <View style={styles.categoryView}>
      {props.item.showAd && (
        <View style={[styles.adView, {flexDirection: viewRTLStyle}]}>
          <Text style={styles.adText}>{t('blog.advertise')}.</Text>
        </View>
      )}
      <Text
        style={[
          styles.category,
          props.titleStyle,
          {
            textAlign: textRTLStyle,
            fontSize: fontSizes.FONT16HALF,
            left: isRTL ? (props.item.showAd ? -30 : null) : null,
          },
        ]}>
        {t(props.item.title)}
      </Text>
      <Text
        style={[
          styles.content,
          props.contentStyle,
          {
            textAlign: textRTLStyle,
            color: isDark ? appColors.white : appColors.fontColor,
          },
        ]}>
        {t(props.item.content)}
      </Text>
      <View style={[styles.blogRow, {flexDirection: viewRTLStyle}]}>
        <BlogProfile
          color={appColors.subTitle}
          width={props.iconWidth ? props.iconWidth : '14'}
          height={props.iconHeight ? props.iconHeight : '21'}
          strokeWidth={'1'}
        />
        <Text
          style={[
            styles.category,
            styles.marginRight,
            props.titleStyle,
            {fontSize: fontSizes.FONT16HALF},
          ]}>
          {t(props.item.user)}
        </Text>
        <View style={styles.marginRight}>
          <ClockOutline strokeWidth={'1.2'} height={'22'} width={'15'} />
        </View>
        <Text
          style={[
            styles.category,
            styles.marginRight,
            props.titleStyle,
            {fontSize: fontSizes.FONT16HALF},
          ]}>
          {t(props.item.dateTime)}
        </Text>
      </View>
    </View>
  );
}
