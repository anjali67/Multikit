import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {continueReadingData} from '@utils/json/learning';
import {t} from 'i18next';
import styles from '../styles';
import ProgressBar from '@commonComponents/ProgressBar';
import appFonts from '@theme/appFonts';
import {windowHeight} from '@theme/appConstant';
import {fontSizes, windowWidth} from '@theme/appConstant';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function courses(props) {
  const {viewRTLStyle, isDark, textRTLStyle} = useValues();
  return (
    <View style={{marginHorizontal: 2}}>
      <FlatList
        contentContainerStyle={{paddingBottom: windowHeight(5)}}
        horizontal={props.isHorizontal}
        showsHorizontalScrollIndicator={false}
        data={continueReadingData}
        renderItem={({item, index}) => (
          <View>
            <View
              style={[
                styles.categoryContainer,
                props.categoryContainer,
                {
                  backgroundColor: isDark
                    ? appColors.darkPrimary1
                    : appColors.learningSecondary,
                },
              ]}></View>
            <View
              style={[
                styles.outerContainer,
                props.outerContainerStyle,
                {
                  backgroundColor: isDark
                    ? appColors.blackColor
                    : appColors.white,
                  borderTopColor: isDark
                    ? appColors.blackColor
                    : appColors.learningSecondary,
                  borderLeftColor: isDark
                    ? appColors.blackColor
                    : appColors.learningSecondary,
                },
              ]}>
              <View
                style={{
                  paddingVertical: windowHeight(7),
                  paddingHorizontal: windowWidth(10),
                }}>
                <View style={{flexDirection: viewRTLStyle}}>
                  <Image
                    source={item.image}
                    style={[
                      styles.imageStyle,
                      {resizeMode: 'cover', borderRadius: windowHeight(4)},
                    ]}
                  />
                  <Text
                    style={[
                      styles.textStyle,
                      {
                        fontFamily: appFonts.InterMedium,
                        marginTop: 8,
                        fontSize: fontSizes.FONT19,
                        textAlign: textRTLStyle,
                        color: isDark ? appColors.white : appColors.learningBtn,
                      },
                    ]}>
                    {t(item.title)}
                  </Text>
                </View>
                <ProgressBar
                  containerStyle={[
                    styles.containerStyle,
                    {marginTop: 11, flexDirection: viewRTLStyle},
                  ]}
                  progress={item.courseCompleted}
                  progressStyle={{
                    backgroundColor: appColors.learningBtn,
                    borderRadius: 10,
                  }}
                />
                <Text
                  style={[
                    styles.content,
                    {
                      color: isDark ? appColors.white : appColors.learningBtn,
                      fontFamily: appFonts.InterMedium,
                      marginTop: -3,
                      textAlign: textRTLStyle,
                    },
                  ]}>
                  {item.courseCompleted} {t('learning.complete')}
                </Text>
              </View>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View
            style={
              props.isHorizontal ? styles.marginRight : styles.marginBottom
            }></View>
        )}
      />
    </View>
  );
}
