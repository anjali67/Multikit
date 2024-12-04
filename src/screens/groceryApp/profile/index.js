import {View, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../component/header';
import Account from '@commonComponents/account';
import {user} from '@utils/images/images';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {profileData} from '@utils/json/grocery';

export default function GroceryProfile({navigation}) {
  const {isDark} = useValues();
  return (
    <ScrollView
      style={[
        styles.mainView,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[styles.paddingBottom]}>
      <View
        style={[
          styles.mainView,
          {backgroundColor: isDark ? appColors.blackColor : appColors.white},
        ]}>
        <Header navigation={navigation} />
        <Account
          showUserProfile={true}
          showSeperator={true}
          user={user}
          profileData={profileData}
        />
      </View>
    </ScrollView>
  );
}
