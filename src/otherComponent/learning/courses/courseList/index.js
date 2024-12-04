import React from 'react';
import {View, Text, FlatList} from 'react-native';
import style from '../styles';
import {courses} from '@utils/json/learning';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import {fontSizes, windowHeight} from '@theme/appConstant';
import LinearGradient from 'react-native-linear-gradient';
import {useValues} from '@App';

export default function courseListItem(props) {
  const {viewRTLStyle, isDark, textRTLStyle} = useValues();

  return (
    <View style={style.containerView}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={courses}
        renderItem={({item, index}) => (
          <View>
            <View
              style={[
                style.inputView,
                {backgroundColor: isDark ? appColors.darkPrimary1 : '#eff1f3'},
              ]}></View>
            <LinearGradient
              colors={[
                props.slectedCourse && index == 1
                  ? '#223352'
                  : isDark
                  ? appColors.darkPrimary2
                  : '#F5F7F7',
                props.slectedCourse && index == 1
                  ? '#223352'
                  : isDark
                  ? appColors.darkPrimary2
                  : '#F5F7F7',
              ]}
              style={[
                style.input,
                {
                  flexDirection: viewRTLStyle,
                },
              ]}
              start={{x: 1, y: 0.2}}
              end={{x: 1, y: 1}}>
              <View
                style={[style.courseContainer, {flexDirection: viewRTLStyle}]}>
                <Text
                  style={[
                    style.courserNumber,
                    {
                      color:
                        props.slectedCourse && index == 1
                          ? appColors.white
                          : isDark
                          ? appColors.white
                          : appColors.learningBtn,
                      textAlign: textRTLStyle,
                    },
                  ]}>
                  0{index + 1}
                </Text>
                <View style={style.listContainer}>
                  <Text
                    style={[
                      style.content,
                      {
                        color:
                          props.slectedCourse && index == 1
                            ? appColors.white
                            : isDark
                            ? appColors.white
                            : appColors.learningBtn,
                        fontSize: fontSizes.FONT19,
                        marginTop: 0,
                      },
                    ]}>
                    {t(item.title)}
                  </Text>
                  <Text
                    style={[
                      style.content,
                      {fontSize: fontSizes.FONT17, marginTop: 1},
                    ]}>
                    {t(item.content)}
                  </Text>
                </View>
              </View>
              <View
                style={[
                  style.iconContainer,
                  {
                    backgroundColor:
                      props.slectedCourse && index == 1
                        ? appColors.white
                        : appColors.learningBtn,
                  },
                ]}>
                {props.slectedCourse && index == 1
                  ? item.selectedIcon
                  : item.icon}
              </View>
            </LinearGradient>
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View style={{marginBottom: windowHeight(12)}}></View>
        )}
      />
    </View>
  );
}
