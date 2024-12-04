import {View, ScrollView} from 'react-native';
import React from 'react';
import Account from '@commonComponents/account';
import {profileUser} from '@utils/images/images';
import HomeHeader from '@otherComponent/ecommerce/homeHeader';
import styles from './styles';
import ecommerceStyles from '../style';
import {ecommerceMenuItems} from '@utils/json/ecommerce';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function EcommerceAccount({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={{backgroundColor: isDark ? appColors.darkTheme : appColors.white}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <HomeHeader
          style={ecommerceStyles.mainView}
          title={'foodProfile.account'}
          titleStyle={[
            styles.title,
            {color: isDark ? appColors.white : appColors.ecommorcePrimary},
          ]}
          navigation={navigation}
        />
        <View style={styles.blankView}></View>
        <Account
          showUserProfile={true}
          showSeperator={true}
          nameStyle={styles.nameStyle}
          emailStyle={[
            styles.emailStyle,
            {color: isDark ? appColors.white : appColors.ecommerceFont},
          ]}
          user={profileUser}
          titleStyle={styles.name}
          divider={styles.divider}
          bottomView={[
            styles.bottomView,
            {backgroundColor: isDark && appColors.blackColor},
          ]}
          logoutStyle={[
            styles.logoutStyle,
            {color: isDark ? appColors.white : appColors.ecommerceFont},
          ]}
          profileData={ecommerceMenuItems}
        />
      </ScrollView>
    </View>
  );
}
