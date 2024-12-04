import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {blogImage} from '@utils/images/images';
import styles from '../styles';
import {Back} from '@assets/images/chat_theme/svg/Back';
import {Share} from '@assets/images/blog_theme/svg/share';
import {BookMark} from '@assets/images/hotel_theme/svg/bookmark';
import {blogUser} from '@utils/images/images';
import LinearGradient from 'react-native-linear-gradient';
import {t} from 'i18next';
import appFonts from '@theme/appFonts';
import {useValues} from '@App';
import {RightArrow} from '@assets/images/common/svg/rightArrow';
import appColors from '@theme/appColors';

export default function header(props) {
  const {isDark, viewRTLStyle, textRTLStyle, isRTL} = useValues();
  return (
    <View>
      <ImageBackground
        resizeMode="cover"
        source={blogImage}
        style={styles.imageStyle}>
        <LinearGradient
          colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.4)']}
          style={{flex: 1}}>
          <View style={styles.innerContainer}>
            <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  props.navigation.navigate('BlogDrawer');
                }}
                style={[styles.circleView, {left: isRTL ? 10 : null}]}>
                {isRTL ? (
                  <RightArrow color={appColors.black} />
                ) : (
                  <Back
                    color={'#222222'}
                    strokeWidth={'2.6'}
                    height={'24'}
                    width={'24'}
                  />
                )}
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: viewRTLStyle,
                  left: isRTL ? 10 : null,
                }}>
                <View style={styles.circleView}>
                  <Share />
                </View>
                <View style={[styles.circleView, {marginHorizontal: 10}]}>
                  <BookMark
                    color={'#384849'}
                    strokeWidth={'2.1'}
                    width={'17'}
                    height={'17'}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
              <View
                style={[
                  styles.rowContainer,
                  {flexDirection: viewRTLStyle, left: isRTL ? 6 : null},
                ]}>
                <Image source={blogUser} style={styles.image} />
                <View style={styles.textView}>
                  <Text
                    style={[
                      styles.title,
                      {
                        fontFamily: appFonts.MontserratMedium,
                        textAlign: textRTLStyle,
                        color: isDark ? appColors.fontColor : appColors.white,
                      },
                    ]}>
                    {t('blog.markJecno')}
                  </Text>
                  <Text
                    style={[
                      styles.title,
                      {
                        textAlign: textRTLStyle,
                        color: isDark ? appColors.fontColor : appColors.white,
                      },
                    ]}>
                    {t('blog.mark')}
                  </Text>
                </View>
              </View>
              <View style={styles.follower}>
                <Text
                  style={[
                    styles.followText,
                    {color: isDark ? appColors.white : appColors.blackColor},
                  ]}>
                  {t('blog.follow')}
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
