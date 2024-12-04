import {t} from 'i18next';
import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import styles from '../styles';
import {comments} from '@utils/json/blog';
import {windowWidth} from '@theme/appConstant';
import {fontSizes, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import CommentSection from './commentSection';
import {useValues} from '@App';

export default function comment() {
  const {isDark, viewRTLStyle, textRTLStyle} = useValues();
  return (
    <View>
      <View style={styles.blankView}></View>
      <Text
        style={[
          styles.textStyle,
          {
            marginTop: 9,
            textAlign: textRTLStyle,
            color: isDark ? appColors.white : appColors.fontColor,
          },
        ]}>
        {t('blog.Comments')}:
      </Text>
      <FlatList
        data={comments}
        renderItem={({index, item}) => {
          return (
            <View
              style={[
                styles.commentView,
                {
                  flexDirection: viewRTLStyle,
                  justifyContent: index % 2 != 0 ? 'center' : null,
                  marginLeft: index % 2 != 0 ? windowHeight(30) : null,
                },
              ]}>
              <Image source={item.user} style={styles.image} />
              <View style={styles.textView}>
                <Text
                  style={[
                    styles.followText,
                    {
                      fontSize: fontSizes.FONT18,
                      textAlign: textRTLStyle,
                      color: isDark ? appColors.white : appColors.blackColor,
                    },
                  ]}>
                  {t(item.name)}
                </Text>
                <Text
                  numberOfLines={index % 2 != 0 ? 2 : null}
                  style={[
                    styles.parahraph,
                    {
                      width:
                        index % 2 != 0 ? windowWidth(280) : windowWidth(360),
                      lineHeight: windowHeight(16),
                      marginTop: windowHeight(8),
                      textAlign: textRTLStyle,
                    },
                  ]}>
                  {t(item.comment)}
                </Text>
                <View style={[styles.dateTime, {flexDirection: viewRTLStyle}]}>
                  <Text
                    style={[
                      styles.followText,
                      {
                        color: appColors.blogContent,
                        fontFamily: appFonts.MontserratRegular,
                      },
                    ]}>
                    {t(item.time)}
                  </Text>
                  <View style={styles.circle}></View>
                  <Text
                    style={[
                      styles.followText,
                      {
                        color: appColors.blogContent,
                        fontFamily: appFonts.MontserratRegular,
                      },
                    ]}>
                    {t('blog.reply')}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
      <CommentSection />
    </View>
  );
}
