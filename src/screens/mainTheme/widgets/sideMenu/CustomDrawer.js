import {View} from 'react-native';
import React from 'react';
import {useValues} from '../../../../../App';
import CustomDrawer from '@commonComponents/CustomDrawer';
import {menuItems} from '@utils/json/grocery';
import {megaThemeLogo} from '@utils/images/images';
import {user} from '@utils/images/images';
import {ecommerceMenuItems} from '@utils/json/ecommerce';
import {useNavigation} from '@react-navigation/native';
import {profileUser} from '@utils/images/images';
import appColors from '@theme/appColors';
import {ecommerceLogo} from '@utils/images/images';
import EcommerceDrawer from '../../../../drawer/hotelBooking/customDrawer';
import LearningDrawer from '../../../learningApp/account';
import {drawerItems} from '@utils/json/blog';
import {blogUser} from '@utils/images/images';
import {nftDrawerItems} from '@utils/json/nft';
import {nftProfile} from '@utils/images/images';

export default function MainCustomDrawer() {
  const {drawerValue, isRTL, isDark} = useValues();
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      {drawerValue == 0 && (
        <CustomDrawer
          showLangugeIcon={true}
          menuItems={menuItems}
          userImg={user}
          navigation={navigation}
          logoImg={megaThemeLogo}
        />
      )}
      {drawerValue == 1 && (
        <CustomDrawer
          showLangugeIcon={true}
          menuItems={ecommerceMenuItems}
          userImg={profileUser}
          containerStyle={[
            styles.container,
            {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
          ]}
          textStyle={[
            styles.textStyle,
            {color: isDark ? appColors.white : appColors.ecommerceFont},
          ]}
          mail={[
            styles.mail,
            {color: isDark ? appColors.white : appColors.ecommerceFont},
          ]}
          title={[
            styles.textStyle,
            {color: isDark ? appColors.white : appColors.ecommerceFont},
          ]}
          logoImg={ecommerceLogo}
          logoutView={[
            styles.logoutView,
            {backgroundColor: isDark && appColors.blackColor},
          ]}
          logOutText={[
            styles.textStyle,
            {color: isDark ? appColors.white : appColors.ecommerceFont},
          ]}
          showDivider
          profileView={styles.profileView}
        />
      )}
      {drawerValue == 2 && <EcommerceDrawer />}
      {drawerValue == 3 && <LearningDrawer NotShowIcon NotShowHeader  />}
      {drawerValue == 4 && (
        <CustomDrawer
          menuItems={drawerItems}
          userImg={blogUser}
          containerStyle={[
            styles.container,
            {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
          ]}
          textStyle={[
            styles.textStyle,
            {color: isDark ? appColors.white : appColors.ecommerceFont},
          ]}
          mail={[
            styles.mail,
            {color: isDark ? appColors.white : appColors.ecommerceFont},
          ]}
          title={[
            styles.textStyle,
            {color: isDark ? appColors.white : appColors.ecommerceFont},
          ]}
          logoImg={ecommerceLogo}
          logoutView={[
            styles.logoutView,
            {backgroundColor: isDark && appColors.blackColor},
          ]}
          logOutText={[
            styles.textStyle,
            {color: isDark ? appColors.white : appColors.ecommerceFont},
          ]}
          profileView={styles.profileView}
        />
      )}
      {drawerValue == 5 && (
        <CustomDrawer
          showDivider
          menuItems={nftDrawerItems}
          userImg={nftProfile}
          containerStyle={[
            styles.container,
            {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
          ]}
          textStyle={[
            styles.textStyle,
            {color: isDark ? appColors.white : appColors.ecommerceFont},
          ]}
          mail={[
            styles.mail,
            {color: isDark ? appColors.white : appColors.ecommerceFont},
          ]}
          title={[
            styles.textStyle,
            {color: isDark ? appColors.white : appColors.ecommerceFont},
          ]}
          logoutView={[
            styles.logoutView,
            {backgroundColor: isDark && appColors.blackColor},
          ]}
          logOutText={[
            styles.textStyle,
            {color: isDark ? appColors.white : appColors.ecommerceFont},
          ]}
          profileView={styles.profileView}
          imageStyle={styles.imageStyle}
        />
      )}
    </View>
  );
}

