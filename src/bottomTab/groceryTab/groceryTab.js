import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GroceryHome from '../../screens/groceryApp/home';
import GroceryCart from '@screens/groceryApp/cart';
import GroceryProfile from '@screens/groceryApp/profile';
import GroceryCategory from '@screens/groceryApp/category';
import GrocerySearch from '@screens/groceryApp/search';
import {fontSizes, windowHeight} from '@theme/appConstant';
import {HomeLine} from '@assets/images/grocery_assets/svg/homeLine';
import {Category} from '@assets/images/grocery_assets/svg/category';
import {ShoppingCart} from '@assets/images/grocery_assets/svg/shoppingcart';
import {UserLine} from '@assets/images/grocery_assets/svg/userline';
import {Search} from '@assets/images/grocery_assets/svg/search';
import appColors from '@theme/appColors';
import styles from '../style/styles';
import appFonts from '@theme/appFonts';
import {windowWidth} from '@theme/appConstant';
import {t} from 'i18next';

const Tab = createBottomTabNavigator();

export default function GroceryTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: appColors.white,
        tabBarInactiveTintColor: appColors.inActiveTab,
        tabBarStyle: {
          height: '9%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: appColors.groceryBtn,
        },

        tabBarLabelStyle: {
          fontSize: fontSizes.FONT17,
          fontFamily: appFonts.PublicSansMedium,
          bottom: windowHeight(9),
          left: windowWidth(2),
        },
        tabBarOptions: {
          style: {
            flexDirection: 'row-reverse',
          },
        },
      }}>
      <Tab.Screen
        name={t('bottomTab.home')}
        component={GroceryHome}
        options={{
          tabBarLabel: t('bottomTab.home'),
          tabBarIcon: ({size, focused, color}) => {
            return focused ? (
              <HomeLine style={styles.top} color={appColors.white} />
            ) : (
              <HomeLine style={styles.top} />
            );
          },
        }}
      />
      <Tab.Screen
        name={t('bottomTab.Category')}
        component={GroceryCategory}
        options={{
          tabBarLabel: t('bottomTab.Category'),
          tabBarIcon: ({size, focused, color}) => {
            return focused ? (
              <Category style={styles.top} color={appColors.white} />
            ) : (
              <Category style={styles.top} />
            );
          },
        }}
      />
      <Tab.Screen
        name={t('bottomTab.Search')}
        component={GrocerySearch}
        options={{
          tabBarLabel: t('bottomTab.Search'),
          tabBarIcon: ({size, focused, color}) => {
            return focused ? (
              <Search style={styles.top} color={appColors.white} />
            ) : (
              <Search style={styles.top} />
            );
          },
        }}
      />
      <Tab.Screen
        name={t('bottomTab.Cart')}
        component={GroceryCart}
        options={{
          tabBarLabel: t('bottomTab.Cart'),
          tabBarIcon: ({size, focused, color}) => {
            return focused ? (
              <ShoppingCart style={styles.top} color={appColors.white} />
            ) : (
              <ShoppingCart style={styles.top} />
            );
          },
        }}
      />
      <Tab.Screen
        name={t('bottomTab.Profile')}
        component={GroceryProfile}
        options={{
          tabBarLabel: t('bottomTab.Profile'),
          tabBarIcon: ({size, focused, color}) => {
            return focused ? (
              <UserLine style={styles.top} color={appColors.white} />
            ) : (
              <UserLine style={styles.top} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
