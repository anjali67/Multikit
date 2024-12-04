import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import {english} from '@utils/images/images';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default function CustomDrawer(props) {
  const {t} = useTranslation();
  const {viewRTLStyle, isDark} = useValues();
  return (
    <View
      style={[
        styles.container,
        {justifyContent: 'space-between'},
        props.containerStyle,
      ]}>
      <View style={{flex: 1}}>
        <View style={[styles.profileView, props.profileView]}>
          <Image
            source={props.userImg}
            style={[styles.image, props.imageStyle]}
          />
          <Text style={[styles.textStyle, props.textStyle]}>
            {t('userProfile.user')}
          </Text>
          <Text style={[styles.mail, props.mail]}>
            {t('userProfile.userEmail')}
          </Text>
        </View>
        {props.menuItems.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => item.route && props.navigation.navigate(item.route)}
            style={[
              styles.rowContainer,
              {flexDirection: viewRTLStyle},
              props.showDivider &&
                index != 0 && {
                  borderTopColor: appColors.divider,
                  borderTopWidth: 1,
                  padding: windowWidth(15),
                },
            ]}>
            {isDark ? item.darkIcon : item.icon}
            {props.showLangugeIcon && index == 4 && (
              <Image source={english} style={styles.imageStyle} />
            )}

            {index == 7 && (
              <Image source={props.logoImg} style={styles.imageStyle} />
            )}
            <Text style={[styles.title, props.title]}>{t(item.title)}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{flex: 8}}></View>
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={props.onLogOutPress}
          activeOpacity={0.7}
          style={[styles.bottomView, props.logoutView]}>
          <Text style={[styles.logOut, props.logOutText]}>
            {t('common.Logout')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
