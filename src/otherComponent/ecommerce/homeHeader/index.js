import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {HeartIcon} from '@assets/images/common/svg/heart';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {Cart} from '@assets/images/ecommerce_theme/svg/cart';
import {Notification} from '@assets/images/ecommerce_theme/svg/notification';
import {headerLogo, ecommerceDarkLogo} from '@utils/images/images';
import {t} from 'i18next';
import {Back} from '@assets/images/main_theme_images/svg/back';
import {Menu} from '@assets/images/ecommerce_theme/svg/menu';
import {windowWidth} from '@theme/appConstant';
import {ArrowRight} from '@assets/images/common/svg/arrowright';

export default function HomeHeader(props) {
  const navigation = useNavigation();
  const {viewRTLStyle, isDark, isRTL} = useValues();
  return (
    <View>
      <View
        style={[
          styles.textView,
          props.textView,
          {flexDirection: viewRTLStyle},
        ]}>
        <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
          {props.showBack ? (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                props.navigation.goBack();
              }}>
              {isRTL ? (
                <ArrowRight
                  color={isDark ? appColors.white : appColors.ecommorcePrimary}
                />
              ) : (
                <Back
                  color={isDark ? appColors.white : appColors.ecommorcePrimary}
                />
              )}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity activeOpacity={0.9}
              onPress={() => {
                props.navigation.openDrawer();
              }}>
              <Menu
                color={isDark ? appColors.white : '#373737'}
                height={'26'}
              />
            </TouchableOpacity>
          )}
          {props.showLogo && (
            <Image
              tintColor={isDark && appColors.ecommorceFont}
              source={isDark ? ecommerceDarkLogo : headerLogo}
              style={[
                styles.logoImg,
                {marginRight: isRTL ? windowWidth(10) : 0},
              ]}
            />
          )}
          <Text style={[styles.title, props.titleStyle]}>{t(props.title)}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Notification color={isDark ? appColors.white : appColors.black} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate('ecommerceWishlist');
          }}>
          <HeartIcon
            color={isDark ? appColors.white : appColors.black}
            strokeWidth={'1.4'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate('EcommerceCart');
          }}>
          <Cart color={isDark ? appColors.white : appColors.black} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
