import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {t} from 'i18next';
import {english} from '@utils/images/images';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {useNavigation} from '@react-navigation/native';

export default function Account(props) {
  const {viewRTLStyle, isDark} = useValues();
  const navigation = useNavigation();
  return (
    <View>
      {props.showUserProfile && (
        <View style={styles.center}>
          <Image source={props.user} style={styles.userProfile} />
          <Text
            style={[
              styles.name,
              {color: isDark ? appColors.white : appColors.black},
              props.nameStyle,
            ]}>
            {t('userProfile.user')}
          </Text>
          <Text style={[styles.email, props.emailStyle]}>
            {t('userProfile.userEmail')}
          </Text>
        </View>
      )}
      <FlatList
        data={props.profileData}
        renderItem={({index, item}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                item.route && navigation.navigate(item.route);
              }}
              style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
              {isDark ? item.darkIcon : item.icon}
              {index == 4 && (
                <Image source={english} style={styles.imageStyle} />
              )}
              <Text
                style={[
                  styles.title,
                  {color: isDark ? appColors.white : appColors.black},
                  props.titleStyle,
                ]}>
                {t(item.title)}
              </Text>
            </TouchableOpacity>
          );
        }}
        ItemSeparatorComponent={() =>
          props.showSeperator && (
            <View style={[styles.seperator, props.divider]} />
          )
        }
      />
      {props.showLogout && (
        <View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.bottomView, props.bottomView]}>
            <Text style={[styles.logOut, props.logoutStyle]}>
              {t('common.Logout')}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
