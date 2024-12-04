import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles';
import appColors from '@theme/appColors';
import {t} from 'i18next';

import {windowWidth} from '@theme/appConstant';
import {useValues} from '@App';

import Messages from './messages';

export default function messageList(props) {
  const {viewRTLStyle, isRTL, textRTLStyle, viewSelfRTLStyle} = useValues();
  return (
    <View>
      {props.item.messageType === 'msg' && (
        <View
          style={[
            styles.myMessageContainer,
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
              backgroundColor:
                props.item.sender === 'Sender'
                  ? appColors.chatContent
                  : appColors.chatInput,
              borderTopEndRadius:
                props.item.sender !== 'Sender'
                  ? windowWidth(30)
                  : props.index === 1
                  ? windowWidth(30)
                  : windowWidth(14),
              borderTopLeftRadius:
                props.item.sender !== 'Sender'
                  ? windowWidth(30)
                  : props.index === 1
                  ? windowWidth(30)
                  : windowWidth(14),

              borderBottomLeftRadius:
                props.item.sender !== 'Sender'
                  ? windowWidth(0)
                  : props.index === 1
                  ? windowWidth(30)
                  : windowWidth(14),
              borderBottomRightRadius:
                props.item.sender !== 'Sender' ? windowWidth(30) : 0,
            },
          ]}>
          <Text
            style={[
              styles.textStyle,
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
        </View>
      )}
      <Messages item={props.item} />
    </View>
  );
}
