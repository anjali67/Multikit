import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {MoreLine} from '@assets/images/common/svg/moreline';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import {Search} from '@assets/images/chat_theme/svg/search';
import {chatUser} from '@utils/images/images';
import {Video} from '@assets/images/chat_theme/svg/video';
import {CallBorderLine} from '@assets/images/chat_theme/svg/callBorderLine';
import {Back} from '@assets/images/chat_theme/svg/Back';
import {useValues} from '@App';
import {RightArrow} from '@assets/images/hotel_theme/svg/rightArrow';
import {windowWidth} from '@theme/appConstant';

export default function chatHeader(props) {
  const {textRTLStyle, isDark, viewRTLStyle, isRTL} = useValues();
  return (
    <View
      style={[
        styles.rowContainer,
        props.containerView,
        {flexDirection: viewRTLStyle},
      ]}>
      {props.showUserProfile ? (
        <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
          {props.showBackArrow && (
            <TouchableOpacity activeOpacity={0.9}
              style={{right: isRTL ? null : windowWidth(8)}}
              onPress={() => {
                props.navigation.goBack();
              }}>
              {isRTL ? (
                <RightArrow height={'45'} width={'28'} />
              ) : (
                <Back color={props.color} />
              )}
            </TouchableOpacity>
          )}
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              props.navigation.navigate('ChatProfile');
            }}>
            <Image source={chatUser} style={styles.image} />
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text
              style={[
                styles.text,
                {
                  textAlign: textRTLStyle,
                },
                props.textStyle,
              ]}>
              {t('chatting.user1')}
            </Text>
            <Text
              style={[
                styles.content,
                props.contentStyle,
                {
                  textAlign: textRTLStyle,
                },
                props.textStyle,
              ]}>
              {props.content}
            </Text>
          </View>
        </View>
      ) : (
        <Text
          style={[
            styles.title,
            {
              color: props.color
                ? props.color
                : isDark
                ? appColors.white
                : appColors.chatText,
            },
          ]}>
          {t('chatting.multikit')}
        </Text>
      )}
      {props.chatScreen ? (
        <View style={[styles.row, {right: 7}]}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              props.navigation.navigate('AudioCalling');
            }}>
            <CallBorderLine
              color={props.color}
              height={'46'}
              width={'20'}
              strokeWidth={'1.5'}
            />
          </TouchableOpacity>
          <View style={styles.blankView}></View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('VideoCalling');
            }}
            activeOpacity={0.9}>
            <Video
              color={props.color}
              strokeWidth={'1.5'}
              height={'46'}
              width={'26'}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
          <Search
            color={
              props.color
                ? props.color
                : isDark
                ? appColors.white
                : appColors.darkTheme
            }
          />
          <MoreLine
            color={
              props.color ? props.color : isDark ? appColors.white : '#545454'
            }
          />
        </View>
      )}
    </View>
  );
}
