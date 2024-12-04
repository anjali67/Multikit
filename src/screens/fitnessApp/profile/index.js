import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {blogUser} from '@utils/images/images';
import {profilesData} from '@utils/json/fitness';
import fitnessStyle from '../style';
import {RightArrow} from '@assets/images/common/svg/rightArrow';
import GradiantBtn from '@otherComponent/fitness/gradiantBtn';
import {Back} from '@assets/images/chat_theme/svg/Back';

export default function profile() {
  const {viewRTLStyle, isDark, isRTL} = useValues();
  return (
    <View
      style={[
        fitnessStyle.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <View style={styles.center}>
        <Image source={blogUser} style={styles.userProfile} />
        <Text
          style={[
            styles.name,
            {color: isDark ? appColors.white : appColors.black},
          ]}>
          {t('userProfile.user')}
        </Text>
        <Text style={styles.email}>{t('userProfile.userEmail')}</Text>
      </View>
      <View>
        <TouchableOpacity activeOpacity={0.7} style={styles.bottomView}>
          <Text style={styles.logOut}>{t('cabBooking.editProfile')}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={profilesData}
        renderItem={({index, item}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {}}
              style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
              <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
                <View
                  style={[
                    styles.iconView,
                    {
                      backgroundColor: isDark
                        ? appColors.darkTheme
                        : appColors.lightBorder,
                    },
                  ]}>
                  {isDark ? item.darkIcon : item.icon}
                </View>
                <Text
                  style={[
                    styles.title,
                    {color: isDark ? appColors.white : appColors.fontColor},
                  ]}>
                  {t(item.name)}
                </Text>
              </View>
              {isRTL ? (
                <Back height={'24'} />
              ) : (
                <RightArrow
                  height={'24'}
                  width={'30'}
                  strokeWidth={'1'}
                  color={appColors.fontColor}
                />
              )}
            </TouchableOpacity>
          );
        }}
      />
      <View style={styles.btnView}>
        <GradiantBtn title={'fitness.logOut'} onBtnPress={() => {}} />
      </View>
    </View>
  );
}
