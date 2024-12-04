import React from 'react';
import {View} from 'react-native';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import {CallBorderLine} from '@assets/images/chat_theme/svg/callBorderLine';
import {UserBorderLine} from '@assets/images/chat_theme/svg/userBorderLine';
import {MessageFill} from '@assets/images/chat_theme/svg/messageFill';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatTabBar from '../../../../bottomTab/chatTab/chatTabBar';
import styles from '../../../../bottomTab/chatTab/style'
import {CallFill} from '@assets/images/chat_theme/svg/callFill';
import {MessageBorderLine} from '@assets/images/chat_theme/svg/messageBorderLine';
import {UserFill} from '@assets/images/chat_theme/svg/userFill';
import CommonView from './commonView';
const Tab = createMaterialTopTabNavigator();

export default function chatBottomTabBar() {
  const {isDark} = useValues();
  return (
    <View
      style={[
        styles.mainTabContainer,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <Tab.Navigator
        initialRouteName="Messages"
        tabBarPosition="bottom"
        tabBar={props => <ChatTabBar {...props} />}
        screenOptions={{
          swipeEnabled: false,
        }}>
        <Tab.Screen
          name="Calls"
          component={CommonView}
          options={{
            tabBarIcon: () => (
              <CallBorderLine
                color={isDark ? appColors.white : appColors.chatText}
              />
            ),
            activeTabBarIcon: () => (
              <CallFill color={isDark ? appColors.white : appColors.chatText} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Messages"
          component={CommonView}
          options={{
            tabBarLabel: t('chatting.messages'),
            tabBarIcon: () => (
              <MessageBorderLine
                color={isDark ? appColors.white : appColors.chatText}
              />
            ),
            activeTabBarIcon: () => (
              <MessageFill
                color={isDark ? appColors.white : appColors.chatText}
              />
            ),

            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={CommonView}
          options={{
            tabBarLabel: t('bottomTab.Profile'),
            tabBarIcon: () => (
              <UserBorderLine
                color={isDark ? appColors.white : appColors.chatText}
              />
            ),
            activeTabBarIcon: () => (
              <UserFill color={isDark ? appColors.white : appColors.chatText} />
            ),

            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
