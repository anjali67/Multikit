import React from 'react';
import {View, Text, Image} from 'react-native';
import {DoubleCheck} from '@assets/images/chat_theme/svg/doubleCheck';
import {Calling} from '@assets/images/chat_theme/svg/calling';
import {CallFill} from '@assets/images/chat_theme/svg/callFill';
import {Play} from '@assets/images/chat_theme/svg/play';
import {lines} from '@utils/images/images';
import {t} from 'i18next';
import {windowWidth} from '@theme/appConstant';
import {useValues} from '@App';
import styles from '../../../styles';

export default function messages(props) {
  const {viewRTLStyle, isRTL, textRTLStyle, viewSelfRTLStyle} = useValues();
  return (
    <View>
      {props.item.messageType === 'audioCall' && (
        <View
          style={[
            styles.myMessageContainer,
            styles.audioContainer,
            {
              alignSelf:
                props.item.sender === 'Sender'
                  ? isRTL
                    ? 'flex-start'
                    : 'flex-end'
                  : isRTL
                  ? 'flex-end'
                  : 'flex-start',
              backgroundColor:
                props.item.sender === 'Sender'
                  ? appColors.chatContent
                  : appColors.chatInput,
              borderTopEndRadius:
                props.item.sender !== 'Sender'
                  ? windowWidth(30)
                  : props.index === 1
                  ? windowWidth(30)
                  : windowWidth(15),

              borderTopLeftRadius:
                props.item.sender !== 'Sender'
                  ? windowWidth(30)
                  : props.index === 1
                  ? windowWidth(30)
                  : windowWidth(15),

              borderBottomLeftRadius:
                props.item.sender !== 'Sender'
                  ? windowWidth(0)
                  : props.index === 1
                  ? windowWidth(30)
                  : windowWidth(15),
              borderBottomRightRadius:
                props.item.sender !== 'Sender' ? windowWidth(30) : 0,
            },
          ]}>
          <View>
            <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
              <View style={styles.audioCircle}>
                {props.item.audioType === 'callStarted' ? (
                  <CallFill height={'13'} width={'13'} />
                ) : (
                  <Calling />
                )}
              </View>
              <View style={styles.textContainer}>
                <Text
                  style={[
                    styles.textStyle,
                    styles.fontsize,
                    {
                      color:
                        props.item.sender === 'Sender'
                          ? appColors.white
                          : appColors.chatText,
                      textAlign: textRTLStyle,
                    },
                  ]}>
                  {t(props.item.message)}
                </Text>
                <Text
                  style={[
                    styles.textStyle,
                    styles.audioText,
                    {
                      color:
                        props.item.sender === 'Sender'
                          ? appColors.white
                          : appColors.chatText,
                      textAlign: textRTLStyle,
                    },
                  ]}>
                  {t(props.item.audioTime)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}

      {props.item.messageType === 'image' && (
        <View style={{flexDirection: viewRTLStyle}}>
          <Image source={props.item.message} style={styles.imageStyle} />
        </View>
      )}

      {props.item.messageType === 'audio' && (
        <View style={{flexDirection: viewRTLStyle}}>
          <View style={[styles.audioView, {flexDirection: viewRTLStyle}]}>
            <View style={styles.playcircle}>
              <Play />
            </View>
            <Image source={lines} style={styles.imageAudio} />
            <Text style={styles.time}>5.20</Text>
          </View>
        </View>
      )}

      <View
        style={[
          styles.timeView,
          {
            alignSelf:
              props.item.sender === 'Sender'
                ? isRTL
                  ? 'flex-start'
                  : 'flex-end'
                : isRTL
                ? 'flex-end'
                : 'flex-start',
            flexDirection: viewRTLStyle,
            width: props.item.sender !== 'Sender' && windowWidth(270),
            justifyContent: viewSelfRTLStyle,
          },
        ]}>
        <Text style={[styles.msgTime, {textAlign: textRTLStyle}]}>
          {t(props.item.msgTime)}
        </Text>
        {props.item.readMsg && (
          <DoubleCheck height={'18'} width={'18'} strokeWidth={'1.4'} />
        )}
      </View>
    </View>
  );
}
