import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import EcommerceTab from '../../bottomTab/ecommerceTab';
import {profileUser} from '@utils/images/images';
import CustomDrawer from '@commonComponents/CustomDrawer';
import {ecommerceMenuItems} from '@utils/json/ecommerce';
import styles from './styles';
import {ecommerceLogo} from '@utils/images/images';
import {Dimensions} from 'react-native';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import ShopPage from '@screens/ecommerceApp/shop/shop';
import ProductDetails from '@screens/ecommerceApp/product/productDetail';
import EcommerceCart from '@screens/ecommerceApp/product/cart';
import EcommerceShop from '@screens/ecommerceApp/shop';

export default function EcommerceDrawer({navigation}) {
  const {isRTL, isDark} = useValues();
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: Dimensions.get('window').width / 1.22,
          backgroundColor: isDark ? appColors.darkTheme : appColors.white,
        },
        drawerPosition: isRTL ? 'right' : 'left',
        swipeEnabled: true,
      }}
      drawerContent={props => (
        <CustomDrawer
          showLangugeIcon={true}
          menuItems={ecommerceMenuItems}
          userImg={profileUser}
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
          showDivider
          profileView={styles.profileView}
          onLogOutPress={() => {
            navigation.navigate('EcommerceSignIn');
          }}
        />
      )}
      initialRouteName="EcommerceHome">
      <Drawer.Screen
        options={{headerShown: false}}
        name="EcommerceTab"
        component={EcommerceTab}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="ShopPage"
        component={ShopPage}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="ProductDetails"
        component={ProductDetails}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="EcommerceCart"
        component={EcommerceCart}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="EcommerceShop"
        component={EcommerceShop}
      />
    </Drawer.Navigator>
  );
}
