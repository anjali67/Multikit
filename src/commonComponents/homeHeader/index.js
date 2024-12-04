import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {Mappin} from '@assets/images/grocery_assets/svg/mappin';
import {Drawer} from '@assets/images/grocery_assets/svg/drawer';
import {useTranslation} from 'react-i18next';
import {BackArrow} from '@assets/images/common/svg/backArrow';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';
import {SideArrow} from '@assets/images/common/svg/sideArrow';
import {darkLogo} from '@utils/images/images';
import {useNavigation} from '@react-navigation/native';

export default function HomeHeader(props) {
  const {t} = useTranslation();
  const {viewRTLStyle, isRTL, isDark} = useValues();
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.mainView,
        {
          flexDirection: viewRTLStyle,
          paddingHorizontal: isRTL ? windowWidth(10) : windowWidth(20),
        },
        props.mainContainer,
      ]}>
      <View style={[styles.view, {flexDirection: viewRTLStyle}]}>
        {props.backIcon ? (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.goBack();
            }}>
            {isRTL ? <SideArrow /> : <BackArrow height={'15'} width={'15'} />}
          </TouchableOpacity>
        ) : props.notShowingDrawer ? null : (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.margin}
            onPress={() => {
              navigation.openDrawer();
            }}>
            {props.drawer ? props.drawer : <Drawer />}
          </TouchableOpacity>
        )}
        <Image
          source={
            isDark
              ? props.darkLogo
                ? props.darkLogo
                : darkLogo
              : props.logoIcon
          }
          style={[styles.logoImg, props.logoImgeStyle]}
        />
      </View>

      <View style={[styles.view, {flexDirection: viewRTLStyle}]}>
        {props.locationText && (
          <>
            <Mappin />
            <Text style={styles.locationText}>{t('homeHeader.title')}</Text>
          </>
        )}
        {props.user && (
          <Image
            source={props.userIcon}
            style={styles.profile}
            resizeMode="contain"
          />
        )}
        {props.notificationIcon && props.notificationIcon}
      </View>
    </View>
  );
}
