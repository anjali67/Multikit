import React from 'react';
import {View} from 'react-native';
import {hotelStyle} from '@screens/hotelBookingApp/styles';
import HeaderView from '@otherComponent/hotelBooking/headerView';
import Profile from '@otherComponent/hotelBooking/profile';
import {profileData} from '@utils/json/hotelBooking';
import {windowHeight} from '@theme/appConstant';
import ProfileHeader from '@screens/hotelBookingApp/profile/profileHeader';
import styles from './styles';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function customDrawer({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        hotelStyle.mainContainer,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <HeaderView
        containerView={styles.containerView}
        textView={styles.textView}
        grandiantColor={appColors.onBoardGradiant1}
        showBackArrow={false}
        content={
          <View>
            <ProfileHeader
              showHeaderLogo
              navigation={navigation}
              margin={styles.margin}
            />
          </View>
        }
      />
      <View style={{height: windowHeight(15)}}></View>
      <Profile profileData={profileData} />
    </View>
  );
}
