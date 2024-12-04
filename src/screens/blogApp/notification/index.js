import React from 'react';
import {View, FlatList, Text, Image} from 'react-native';
import styles from './styles';
import HomeHeader from '@commonComponents/homeHeader';
import {blogUser} from '@utils/images/images';
import {blogLogo} from '@utils/images/images';
import {t} from 'i18next';
import {notificationData} from '@utils/json/blog';
import {fontSizes, windowWidth} from '@theme/appConstant';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {blogdarkLogo} from '@utils/images/images';

export default function notification({navigation}) {
  const {viewRTLStyle, textRTLStyle, isDark} = useValues();
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
        user={blogUser}
        darkLogo={blogdarkLogo}
      />
      <View style={styles.margin}>
        <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
          <Text
            style={[
              styles.title,
              {color: isDark ? appColors.white : appColors.fontColor},
            ]}>
            {t('blog.allNotification')}
          </Text>
          <Text style={styles.markAs}>{t('blog.markAs')}</Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
          data={notificationData}
          renderItem={({item, index}) => {
            return (
              <View
                style={[
                  styles.rowContainer,
                  {
                    flexDirection: viewRTLStyle,
                    backgroundColor: isDark
                      ? appColors.darkTheme
                      : appColors.verticalLine,
                  },
                ]}>
                <Image style={styles.image} source={item.image} />
                <View style={styles.textContainer}>
                  <Text
                    style={[
                      styles.title,
                      {
                        color: isDark ? appColors.white : appColors.fontColor,
                        fontSize: fontSizes.FONT18,
                        width: windowWidth(300),
                        textAlign: textRTLStyle,
                      },
                    ]}>
                    {t(item.title)}
                  </Text>
                  <Text style={[styles.timeText, {textAlign: textRTLStyle}]}>
                    {t(item.dateTime)}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
      {/* <BlogTab /> */}
    </View>
  );
}
