import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import HomeHeader from '@commonComponents/homeHeader';
import {blogUser, blogLogo} from '@utils/images/images';
import {user} from '@utils/images/images';
import {t} from 'i18next';
import TextDivision from './textDivision';
import ProfileData from './profileData';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {blogdarkLogo} from '@utils/images/images';

export default function profile({navigation}) {
  const {isDark, viewRTLStyle, textRTLStyle} = useValues();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <HomeHeader
        logoIcon={blogLogo}
        userIcon={blogUser}
        navigation={navigation}
        user={blogLogo}
        darkLogo={blogdarkLogo}
      />
      <View style={[styles.margin, {flexDirection: viewRTLStyle}]}>
        <Image source={user} style={styles.image} />
        <View style={styles.textView}>
          <Text
            style={[
              styles.title,
              {
                textAlign: textRTLStyle,
                color: isDark ? appColors.white : appColors.fontColor,
              },
            ]}>
            {t('userProfile.user')}
          </Text>
          <Text style={[styles.content, {textAlign: textRTLStyle}]}>
            {t('userProfile.userEmail')}
          </Text>
        </View>
      </View>
      <TextDivision />
      <ProfileData navigation={navigation} />
      {/* <BlogTab /> */}
    </View>
  );
}
