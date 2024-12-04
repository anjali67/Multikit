import {View, Text, Image} from 'react-native';
import React from 'react';
import financiaslStyles from '../styles';
import HeaderView from './headerView';
import ChatView from './chatView';
import {useValues} from '@App';

export default function financePay({navigation}) {
  const {isDark} = useValues();
  return (
    <View style={[financiaslStyles.mainContainer,{backgroundColor:isDark ? appColors.financeDarkBg : appColors.gradient2}]}>
      <HeaderView navigation={navigation} showUserDetails={true} showHederText={false} />
      <ChatView />
    </View>
  );
}
