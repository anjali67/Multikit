import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {learningLogo, hand} from '@utils/images/images';
import {ShoppingBag} from '@assets/images/learning_theme/svg/shoppingBag';
import {Drawer} from '@assets/images/hotel_theme/svg/drawer';
import styles from '../styles';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import {t} from 'i18next';
import SearchTextInput from '../searchTextInput';
import {useNavigation} from '@react-navigation/native';
import {Back} from '@assets/images/main_theme_images/svg/back';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';
import {windowWidth} from '@theme/appConstant';
import {ArrowRight} from '@assets/images/common/svg/arrowright';

export default function header(props) {
  const {isRTL, textRTLStyle, viewRTLStyle, isDark} = useValues();
  const navigation = useNavigation();

  return (
    <View>
      <View
        style={[
          styles.row,
          {
            bottom: 5,
            flexDirection: viewRTLStyle,
            width: windowWidth(455),
          },
        ]}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: isRTL ? null : 12,
          }}>
          {props.showArrowIcon ? (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.goBack()}>
              {isRTL ? (
                <ArrowRight height={'65'} />
              ) : (
                <Back color={appColors.white} height={'65'} />
              )}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                navigation.openDrawer();
              }}>
              <Drawer
                strokeWidth={'1.2'}
                height={'70'}
                color={appColors.white}
              />
            </TouchableOpacity>
          )}
          {props.showLogo && (
            <Image source={learningLogo} style={styles.image} />
          )}
        </View>
        <View style={{marginHorizontal: isRTL ? 8 : -6}}>
          <ShoppingBag />
        </View>
      </View>
      {props.showUserInfo && (
        <>
          <View
            style={[
              styles.singleRow,
              {
                flexDirection: viewRTLStyle,
                marginHorizontal: isRTL ? 10 : 16,
              },
            ]}>
            <Text
              style={[
                styles.title,
                {
                  fontSize: fontSizes.FONT29,
                  textAlign: textRTLStyle,
                },
              ]}>
              {t('financial.headerTitle')}
            </Text>
            <Image source={hand} style={styles.handImg} />
          </View>
          <Text
            style={[
              styles.content,
              {textAlign: textRTLStyle, marginHorizontal: isRTL ? 10 : 16},
            ]}>
            {t('learning.heaerContent')}
          </Text>
        </>
      )}
      {props.showSearchBar ? (
        <SearchTextInput sectionStyle={props.sectionStyle} />
      ) : (
        <Text
          style={[
            styles.title,
            {
              fontFamily: appFonts.InterMedium,
              textAlign: textRTLStyle,
              marginHorizontal: 10,
            },
          ]}>
          {t(props.headerTitle)}
        </Text>
      )}
    </View>
  );
}
