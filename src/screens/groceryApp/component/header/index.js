import {View} from 'react-native';
import React from 'react';
import HomeHeader from '@commonComponents/homeHeader';
import {groceryLogo} from '@utils/images/images';
import {user} from '@utils/images/images';

export default function Header(props) {
  return (
    <View>
      <HomeHeader
        backIcon={props.backIcon}
        logoIcon={groceryLogo}
        locationText={props.locationText}
        user={user}
        userIcon={user}
      />
    </View>
  );
}
