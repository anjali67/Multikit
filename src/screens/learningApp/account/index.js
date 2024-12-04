import React from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Background from '@otherComponent/learning/home/background';
import learningStyle from '../style';
import HeaderView from '@otherComponent/learning/home/header/headerView';
import {boy} from '@utils/images/images';
import {t} from 'i18next';
import styles from './styles';
import {profileData} from '@utils/json/learning';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import {windowHeight} from '@theme/appConstant';
import {RightArrow} from '@assets/images/hotel_theme/svg/rightArrow';
import {useValues} from '@App';
import {Back} from '@assets/images/chat_theme/svg/Back';

export default function account(props) {
  const {viewRTLStyle, isRTL, isDark, textRTLStyle} = useValues();
  return (
    <View
      style={[
        learningStyle.container,
        {backgroundColor: isDark ? appColors.darkPrimary : appColors.white},
      ]}>
      <Background
        image={{height: '43%'}}
        content={
          <>
            {props.NotShowHeader ? null : <HeaderView  navigation={props.navigation}/>}
            <ScrollView
              contentContainerStyle={learningStyle.contentContainerStyle}
              showsVerticalScrollIndicator={false}>
              <View
                style={[
                  styles.row,
                  styles.marginHorizontal,
                  {
                    marginTop: props.NotShowHeader ? windowHeight(50) : null,
                    flexDirection: viewRTLStyle,
                  },
                ]}>
                <Image source={boy} style={styles.image} />
                <View style={[styles.margin, {marginHorizontal: 13}]}>
                  <Text style={[styles.title, {textAlign: textRTLStyle}]}>
                    {t('foodProfile.user')}
                  </Text>
                  <Text style={styles.email}>{t('foodProfile.email')}</Text>
                </View>
              </View>

              <View style={[styles.margin, {marginTop: 2}]}>
                <Text
                  style={[
                    styles.titleStyle,
                    {
                      marginBottom: 15,
                      textAlign: textRTLStyle,
                      color: isDark ? appColors.white : appColors.learningBtn,
                    },
                  ]}>
                  {t('learning.generalSetting')}
                </Text>
              </View>
              <FlatList
                contentContainerStyle={styles.contentContainerStyle}
                data={profileData}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                      item.route && props.navigation.navigate(item.route);
                    }}>
                    <View
                      style={[
                        styles.rowContainer,
                        styles.marginHorizontal,
                        {flexDirection: viewRTLStyle},
                      ]}>
                      <View
                        style={[
                          styles.row,
                          {alignItems: 'center', flexDirection: viewRTLStyle},
                        ]}>
                        <View
                          style={[
                            styles.iconView,
                            {
                              marginRight: isRTL ? null : windowHeight(18),
                              backgroundColor: isDark
                                ? appColors.darkTheme
                                : appColors.white,
                            },
                          ]}>
                          {isDark ? item.darkIcon : item.icon}
                        </View>
                        <Text
                          style={[
                            styles.title,
                            {
                              color: isDark
                                ? appColors.white
                                : appColors.learningBtn,
                              fontSize: fontSizes.FONT20,
                              marginHorizontal: isRTL ? 18 : null,
                            },
                          ]}>
                          {t(item.name)}
                        </Text>
                      </View>
                      {props.NotShowIcon ? null : isRTL ? (
                        <Back height={'24'} />
                      ) : (
                        <RightArrow color={appColors.learningBtn} />
                      )}
                    </View>
                    {item.showDivider == true ? (
                      <View>
                        <View
                          style={[
                            styles.divider,
                            {
                              backgroundColor: isDark
                                ? appColors.darkTheme
                                : appColors.learningInput,
                            },
                          ]}></View>
                        <Text
                          style={[
                            styles.titleStyle,
                            {
                              marginBottom: 0,
                              textAlign: textRTLStyle,
                              color: isDark
                                ? appColors.white
                                : appColors.learningBtn,
                            },
                          ]}>
                          {t('learning.aboutMultikit')}
                        </Text>
                      </View>
                    ) : (
                      <View></View>
                    )}
                  </TouchableOpacity>
                )}
                ItemSeparatorComponent={() => (
                  <View style={styles.marginBottom}></View>
                )}
              />
            </ScrollView>
          </>
        }
      />
    </View>
  );
}
