import React from 'react';
import {View, Image, ScrollView, Text, FlatList} from 'react-native';
import chattingStyle from '../styles';
import appColors from '@theme/appColors';
import ChatHeader from '@otherComponent/chatting/chatHeader';
import {chatBg} from '@utils/images/images';
import styles from './styles';
import {t} from 'i18next';
import {chatData} from '@utils/json/chatting';
import {useValues} from '@App';

export default function profile({navigation}) {
  const {isDark, viewRTLStyle} = useValues();
  return (
    <View
      style={[
        chattingStyle.mainContainer,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <ChatHeader
        navigation={navigation}
        showUserProfile={true}
        content={'9589566161'}
        textStyle={{color: isDark ? appColors.white : appColors.chatText}}
      />
      <ScrollView style={styles.container}>
        <View>
          <Image source={chatBg} style={styles.image} />
          <View style={styles.containerView}>
            <Text style={styles.title}>{t('chatting.multikit')}</Text>
          </View>
          <View style={[styles.mainView, {flexDirection: viewRTLStyle}]}>
            <FlatList
              data={chatData}
              renderItem={({index, item}) => {
                return (
                  <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
                    {item.icon}
                    <Text
                      style={[
                        styles.name,
                        {color: isDark ? appColors.white : appColors.chatText},
                      ]}>
                      {t(item.name)}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
