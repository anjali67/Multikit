import React from 'react';
import {View, ScrollView} from 'react-native';
import chattingStyle from '../styles';
import appColors from '@theme/appColors';
import ChatHeader from '@otherComponent/chatting/chatHeader';
import ProfileStatusHeader from './profileStatus';
import RecentChat from '@otherComponent/chatting/recentChats';
import {useValues} from '@App';

export default function messages({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        chattingStyle.mainContainer,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <View>
        <ChatHeader />
      </View>
      <ScrollView
        contentContainerStyle={chattingStyle.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <ProfileStatusHeader />
        <RecentChat navigation={navigation} />
      </ScrollView>
    </View>
  );
}
