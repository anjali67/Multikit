import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import foodOrderStyle from '../style/styles';
import UserProfile from './account/userProfile';
import AccountSettings from './account/accountSetting';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {t} from 'i18next';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {Back} from '@assets/images/main_theme_images/svg/back';
import {useValues} from '@App';
import {ArrowRight} from '@assets/images/common/svg/arrowright';

export default function FoodProfile({navigation}) {
  const {viewRTLStyle, isRTL, isDark} = useValues();
  return (
    <ScrollView
      style={[foodOrderStyle.mainContainer,{backgroundColor:isDark ? appColors.darkTheme : appColors.foodPrimary}]}
      contentContainerStyle={{paddingBottom: windowHeight(30)}}
      showsVerticalScrollIndicator={false}>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            navigation.goBack();
          }}>
          {isRTL ? (
            <ArrowRight color={isDark ? appColors.white : appColors.foodSecondary} />
          ) : (
            <Back color={isDark ? appColors.white : appColors.black} />
          )}
        </TouchableOpacity>
        <Text style={[styles.title,{color:isDark ? appColors.white : appColors.foodSecondary}]}>{t('foodProfile.account')}</Text>
      </View>
      <UserProfile />
      <AccountSettings navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: windowHeight(14),
  },
  title: {
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.LatoMedium,
    color: appColors.foodSecondary,
    marginHorizontal: windowWidth(20),
    bottom: windowHeight(1),
  },
});
