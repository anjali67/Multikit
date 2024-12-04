import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {courseBg} from '@utils/images/images';
import styles from '../styles';
import HeaderViewContainer from '../../home/header/headerView';
import {Play} from '@assets/images/chat_theme/svg/play';
import appColors from '@theme/appColors';
import {t} from 'i18next';
import {useValues} from '@App';
import ContentView from '@screens/learningApp/instructorDetail/aboutSection/contentView';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default function headerView(props) {
  const {textRTLStyle, isDark, currSymbol, currValue, viewRTLStyle} =
    useValues();
  const [showText, setText] = useState(false);
  const coursePrice = 15;
  return (
    <View>
      <View>
        <Image source={courseBg} style={styles.image} />
        <View style={styles.innerContainer}>
          <HeaderViewContainer showArrowIcon />
          <View style={styles.containerStyle}>
            <View style={styles.iconView}>
              <Play width={'14'} height={'14'} color={appColors.learningBtn} />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.margin, {marginVertical: 14}]}>
        <Text style={[styles.user, {textAlign: textRTLStyle}]}>
          {t('learning.user')}
        </Text>
        <View style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
          <View>
            <Text
              style={[
                styles.title,
                {
                  textAlign: textRTLStyle,
                  color: isDark ? appColors.white : appColors.learningBtn,
                },
              ]}>
              {t('learning.courseTitle')}
            </Text>
            <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
              <Text style={styles.content}>{t('learning.courseTime')} </Text>
              <View style={[styles.margin, {marginHorizontal: 2}]}>
                <View style={styles.dotView}></View>
              </View>
              <Text style={[styles.content, {marginHorizontal: 10}]}>
                10 {t('learning.Courses')}
              </Text>
            </View>
          </View>
          {props.showcoursePrice && (
            <View
              style={[
                styles.priceView,
                {
                  backgroundColor: isDark
                    ? appColors.darkTheme
                    : appColors.divider,
                },
              ]}>
              <Text
                style={[
                  styles.price,
                  {
                    textDecorationLine: 'line-through',
                    color: isDark
                      ? appColors.white
                      : appColors.learningPlaceholder,
                  },
                ]}>
                {currSymbol}
                {(currValue * coursePrice).toFixed(2)}
              </Text>
              <Text
                style={[
                  styles.price,
                  {color: isDark ? appColors.white : appColors.learningBtn},
                ]}>
                {currSymbol}
                {(currValue * coursePrice).toFixed(2)}
              </Text>
            </View>
          )}
        </View>
        <ContentView
          titleStyle={{
            fontFamily: appFonts.InterSemiBold,
            fontSize: fontSizes.FONT19,
          }}
          title={'learning.aboutCourse'}
          showText={showText}
          setText={setText}
        />
      </View>
    </View>
  );
}
