import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '@commonComponents/CustomDrawer';
import styles from './styles';
import {ecommerceLogo} from '@utils/images/images';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import BlogTab from '../../bottomTab/blogTab';
import {blogUser} from '@utils/images/images';
import {drawerItems} from '@utils/json/blog';
import BlogListing from '../../screens/blogApp/home/blogListing';
import Profile from '../../screens/blogApp/profile';
import Notification from '../../screens/blogApp/notification';

export default function blogDrawer({navigation}) {
  const {isRTL, isDark} = useValues();
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: isRTL ? 'right' : 'left',
        swipeEnabled: true,
      }}
      drawerContent={props => (
        <CustomDrawer
          menuItems={drawerItems}
          userImg={blogUser}
          {...props}
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
          onLogOutPress={() => navigation.navigate('BlogSignIn')}
        />
      )}
      initialRouteName="BlogTab">
      <Drawer.Screen
        options={{headerShown: false}}
        name="BlogTab"
        component={BlogTab}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="BlogListing"
        component={BlogListing}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="Profile"
        component={Profile}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="Notification"
        component={Notification}
      />
    </Drawer.Navigator>
  );
}
