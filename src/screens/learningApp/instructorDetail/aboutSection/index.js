import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import {learningUser} from '@utils/images/images';
import style from '../style';
import {t} from 'i18next';
import {Facebook} from '@assets/images/grocery_assets/svg/facebook';
import {Twitter} from '@assets/images/common/svg/twitter';
import {Linkedin} from '@assets/images/common/svg/linkedin';
import appColors from '@theme/appColors';
import {windowHeight} from '@theme/appConstant';

import {useValues} from '@App';
import ContentView from './contentView';

export default function aboutSection() {
  const [showText, setText] = useState(false);
  const {textRTLStyle, isDark} = useValues();
  return (
    <View style={style.margin}>
      <View style={[style.row]}>
        <Image source={learningUser} style={style.imageStyle} />
        <View style={style.textView}>
          <Text
            style={[
              style.title,
              {color: isDark ? appColors.white : appColors.learningBtn},
            ]}>
            {t('foodProfile.user')}
          </Text>
          <View style={[style.row, {marginTop: 4}]}>
            <Text style={style.content}>
              {t('learning.students')}:{' '}
              <Text style={{color: isDark ? appColors.white : '#164150'}}>
                1,901,413{' '}
              </Text>
              <Text>
                {' '}
                {t('hotelBooking.review')}:{' '}
                <Text style={{color: isDark ? appColors.white : '#164150'}}>
                  12,089
                </Text>{' '}
              </Text>
            </Text>
          </View>
          <View
            style={[
              style.row,
              {
                width: '32%',
                justifyContent: 'space-between',
                marginTop: windowHeight(8),
              },
            ]}>
            <Facebook
              color={isDark ? appColors.white : appColors.learningBtn}
            />
            <Twitter color={isDark ? appColors.white : appColors.learningBtn} />
            <Linkedin
              color={isDark ? appColors.white : appColors.learningBtn}
            />
          </View>
        </View>
      </View>
      <ContentView
        title={'learning.aboutMe'}
        showText={showText}
        setText={setText}
      />
    </View>
  );
}
