import {View} from 'react-native';
import React from 'react';
import {HotelTabBar} from './hotelTabBar';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import appColors from '@theme/appColors';
import {t} from 'i18next';
import styles from './styles/styles';
import {useValues} from '@App';
import HotelBookingHome from '@screens/hotelBookingApp/home';
import HotelBookingSearch from '@screens/hotelBookingApp/search';
import HotelBookings from '@screens/hotelBookingApp/booking';
import HotelBookingWishlist from '@screens/hotelBookingApp/wishlist';
import {HotelHomeIcon} from '@assets/images/hotel_theme/svg/home';
import {HotelWishlistIcon} from '@assets/images/hotel_theme/svg/heart';
import {HotelProfileIcon} from '@assets/images/hotel_theme/svg/profile';
import {HotelSearchIcon} from '@assets/images/hotel_theme/svg/hotelSearch';
import {Paper} from '../../assets/images/hotel_theme/svg/Paper';

import HotelBookingProfile from '@screens/hotelBookingApp/profile';

const Tab = createMaterialTopTabNavigator();
export default function hotelBookingTab() {
  const {isDark} = useValues();
  return (
    <View
      style={[
        styles.mainTabContainer,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <Tab.Navigator
        tabBarPosition="bottom"
        tabBar={props => <HotelTabBar {...props} />}
        screenOptions={{
          swipeEnabled: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HotelBookingHome}
          options={{
            tabBarLabel: t('bottomTab.home'),
            tabBarIcon: () => (
              <HotelHomeIcon
                color={isDark ? appColors.white : appColors.reviewText}
              />
            ),

            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={HotelBookingSearch}
          options={{
            tabBarLabel: t('bottomTab.Search'),
            tabBarIcon: () => (
              <HotelSearchIcon
                color={isDark ? appColors.white : appColors.reviewText}
              />
            ),

            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Cart"
          component={HotelBookings}
          options={{
            tabBarLabel: t('hotelBooking.bookings'),
            tabBarIcon: () => (
              <Paper color={isDark ? appColors.white : appColors.reviewText} />
            ),

            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Offers"
          component={HotelBookingWishlist}
          options={{
            tabBarLabel: t('ecommerce.whishlist'),
            tabBarIcon: () => (
              <HotelWishlistIcon
                color={isDark ? appColors.white : appColors.reviewText}
              />
            ),

            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={HotelBookingProfile}
          options={{
            tabBarLabel: t('bottomTab.Profile'),
            tabBarIcon: () => (
              <HotelProfileIcon
                color={isDark ? appColors.white : appColors.reviewText}
              />
            ),

            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
