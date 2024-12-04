import React from 'react';
import {View, FlatList, Image, TouchableOpacity, Text} from 'react-native';
import HeadingContainer from './headingView';
import {recentChats} from '@utils/json/chatting';
import styles from './styles';
import {t} from 'i18next';
import {DoubleCheck} from '@assets/images/chat_theme/svg/doubleCheck';
import {Check} from '@assets/images/ecommerce_theme/svg/check';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function recentChat(props) {
  const {textRTLStyle, isDark, viewRTLStyle, viewSelfRTLStyle} = useValues();
  return (
    <View>
      <HeadingContainer title={'chatting.recentChats'} />
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={recentChats}
        renderItem={({index, item}) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Chat');
                }}
                activeOpacity={0.9}
                style={[styles.row, {flexDirection: viewRTLStyle}]}>
                <View
                  style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
                  <View>
                    <Image
                      source={item.image}
                      style={[styles.image, {borderWidth: item.status ? 3 : 0}]}
                    />
                    {index === 0 && (
                      <View style={styles.mainView}>
                        <View style={styles.innerContainer}></View>
                      </View>
                    )}
                  </View>
                  <View style={styles.textContainer}>
                    <Text
                      style={[
                        styles.name,
                        {
                          textAlign: textRTLStyle,
                          color: isDark ? appColors.white : appColors.chatText,
                        },
                      ]}>
                      {t(item.userName)}
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={[styles.content, {textAlign: textRTLStyle}]}>
                      {t(item.message)}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.time}>{t(item.time)}</Text>
                  {item.totalUpcomingMsg && (
                    <View
                      style={[
                        styles.container,
                        {alignItems: viewSelfRTLStyle},
                      ]}>
                      <Text style={styles.containerView}>
                        {item.totalUpcomingMsg}
                      </Text>
                    </View>
                  )}
                  {item.messageDelivered && (
                    <View
                      style={[
                        styles.container,
                        {alignItems: viewSelfRTLStyle},
                      ]}>
                      <DoubleCheck />
                    </View>
                  )}
                  {item.messageSent && (
                    <View
                      style={[
                        styles.container,
                        {alignItems: viewSelfRTLStyle},
                      ]}>
                      <Check
                        strokeWidth={'1'}
                        height={'20'}
                        color={appColors.chatContent}
                      />
                    </View>
                  )}
                </View>
              </TouchableOpacity>
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
