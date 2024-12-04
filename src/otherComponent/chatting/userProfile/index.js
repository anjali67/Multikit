import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import styles from './styles';
import ChatHeader from '../chatHeader';
import UserView from './userView';
import MediaView from './mediaView';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import {settingData} from '@utils/json/chatting';
import {windowHeight} from '@theme/appConstant';
import {useValues} from '@App';

export default function chatProfile({navigation}) {
  const {textRTLStyle, isDark, viewRTLStyle} = useValues();
  return (
    <ScrollView
      style={[
        styles.main,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <View style={{backgroundColor: appColors.chattingBg, flex: 1}}>
        <View style={styles.headerView}>
          <ChatHeader
            navigation={navigation}
            color={appColors.darkTheme}
            containerView={styles.containerView}
          />
        </View>
        <View
          style={[
            styles.profileView,
            {backgroundColor: isDark ? appColors.blackColor : appColors.white},
          ]}>
          <UserView navigation={navigation} />
          <View>
            <MediaView />
          </View>
          <View style={styles.containerView}>
            <Text
              style={[
                styles.title,
                styles.titleStyle,
                {
                  marginBottom: windowHeight(10),
                  marginTop: windowHeight(10),
                  textAlign: textRTLStyle,
                  color: isDark ? appColors.white : appColors.chatText,
                },
              ]}>
              {t('drawer.Settings')}
            </Text>
            <FlatList
              data={settingData}
              renderItem={({index, item}) => {
                return (
                  <View
                    style={[
                      styles.row,
                      {
                        marginBottom: windowHeight(8),
                        flexDirection: viewRTLStyle,
                      },
                    ]}>
                    {isDark ? item.darkIcon : item.icon}
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
      </View>
    </ScrollView>
  );
}
