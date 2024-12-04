import React from 'react';
import {View, FlatList, Text, Image} from 'react-native';
import chattingStyle from '../styles';
import appColors from '@theme/appColors';
import ChatHeader from '@otherComponent/chatting/chatHeader';
import HeadingContainer from '@otherComponent/chatting/recentChats/headingView';
import styles from './styles';
import {callsList} from '@utils/json/chatting';
import {t} from 'i18next';
import {Video} from '@assets/images/chat_theme/svg/video';
import {CallBorderLine} from '@assets/images/chat_theme/svg/callBorderLine';
import {ArrowDownLeft} from '@assets/images/chat_theme/svg/arrowDownLeft';
import {ArrowUpRight} from '@assets/images/chat_theme/svg/arrowUpRight';
import {useValues} from '@App';

export default function calls() {
  const {textRTLStyle, viewRTLStyle, isDark} = useValues();
  return (
    <View
      style={[
        chattingStyle.mainContainer,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <ChatHeader />
      <HeadingContainer title={'chatting.calls'} />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={callsList}
        renderItem={({index, item}) => {
          return (
            <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
              <View style={[styles.rowView, {flexDirection: viewRTLStyle}]}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.textContainer}>
                  <Text
                    style={[
                      styles.name,
                      {
                        textAlign: textRTLStyle,
                        color: isDark ? appColors.white : appColors.chatText,
                      },
                    ]}>
                    {t(item.name)}
                  </Text>
                  <View style={[styles.rowView, {flexDirection: viewRTLStyle}]}>
                    {item.type == 'miscall' && <ArrowDownLeft color={'red'} />}
                    {item.type == 'calls' && <ArrowDownLeft />}
                    {item.type == 'received' && <ArrowUpRight />}
                    <Text style={styles.dateTime}> ({item.numberCalls}) </Text>
                    <Text style={styles.dateTime}>{item.dateTime}</Text>
                  </View>
                </View>
              </View>
              <View>
                {item.callsType === 'video' ? (
                  <Video width={'28'} />
                ) : (
                  <CallBorderLine
                    height={'48'}
                    width={'24'}
                    strokeWidth={'1.3'}
                  />
                )}
              </View>
            </View>
          );
        }}
        ItemSeparatorComponent={() => (
          <View style={styles.horizontalLine}></View>
        )}
      />
    </View>
  );
}
