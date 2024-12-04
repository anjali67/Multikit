import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {cabUser} from '@utils/images/images';
import {menuItems} from '@utils/json/cabBooking';
import drawerStyle from '../styles';
import {t} from 'i18next';
import {windowWidth} from '@theme/appConstant';
import {ArrowRight} from '@assets/images/common/svg/arrowright';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import {Back} from '@assets/images/main_theme_images/svg/back';

export default function customDrawer(props) {
  const {isRTL, viewRTLStyle, isDark, textRTLStyle} = useValues();
  return (
    <View
      style={[
        drawerStyle.mainContainer,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <View style={[drawerStyle.mainView, {marginHorizontal: windowWidth(20)}]}>
        <View
          style={[
            drawerStyle.row,
            drawerStyle.blankView,
            {flexDirection: viewRTLStyle},
          ]}>
          <Image source={cabUser} style={drawerStyle.image} />
          <View style={drawerStyle.textContainer}>
            <Text
              style={[
                drawerStyle.title,
                {
                  textAlign: textRTLStyle,
                  color: isDark ? appColors.white : appColors.cabText,
                },
              ]}>
              {t('cabBooking.userName')}
            </Text>
            <Text style={[drawerStyle.content, {textAlign: textRTLStyle}]}>
              {t('cabBooking.editProfile')}
            </Text>
          </View>
        </View>
        <FlatList
          data={menuItems}
          renderItem={({index, item}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  item.route && props.navigation.navigate(item.route);
                }}
                style={[
                  drawerStyle.rowContainer,
                  {flexDirection: viewRTLStyle},
                ]}>
                <View style={[drawerStyle.row, {flexDirection: viewRTLStyle}]}>
                  {isDark ? item.darkIcon : item.icon}
                  <Text
                    style={[
                      drawerStyle.name,
                      {color: isDark ? appColors.white : appColors.cabText},
                    ]}>
                    {t(item.name)}
                  </Text>
                </View>
                {isRTL ? (
                  <Back color={isDark ? appColors.white : appColors.cabText} />
                ) : (
                  <ArrowRight
                    color={isDark ? appColors.white : appColors.cabText}
                  />
                )}
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}
