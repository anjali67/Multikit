import React from 'react';
import {View} from 'react-native';
import HeaderView from '@otherComponent/hotelBooking/headerView';
import styles from './styles';
import ProfileHeader from './profileHeader';
import {hotelStyle} from '../styles';
import {profileData} from '@utils/json/hotelBooking';
import Profile from '@otherComponent/hotelBooking/profile';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function hotelBookingProfile({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        hotelStyle.mainContainer,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <HeaderView
        showDrawer={true}
        title={'bottomTab.Profile'}
        containerView={styles.containerView}
        textView={styles.textView}
        grandiantColor={appColors.onBoardGradiant1}
        navigation={navigation}
        content={
          <View>
            <ProfileHeader navigation={navigation} />
          </View>
        }
      />
      <View style={styles.blankView}></View>
      <Profile profileData={profileData} />
    </View>
  );
}
