import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HotelBookingTab from '../../bottomTab/hoteBookingTab';
import {useValues} from '@App';
import CustomDrawer from './customDrawer';
import HotelBookingHome from '@screens/hotelBookingApp/home';
import HotelBookingProfile from '@screens/hotelBookingApp/profile';
import HotelBookings from '@screens/hotelBookingApp/booking';
import HotelBookingWishlist from '@screens/hotelBookingApp/wishlist';
import HotelLogin from '@screens/hotelBookingApp/auth/login';

const Drawer = createDrawerNavigator();

export default function hotelBookingDrawer() {
  const {isRTL} = useValues();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: isRTL ? 'right' : 'left',
        swipeEnabled: true,
      }}
      drawerContent={props => <CustomDrawer />}>
      <Drawer.Screen
        options={{headerShown: false}}
        name="HotelBookingTab"
        component={HotelBookingTab}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="HotelBookingHome"
        component={HotelBookingHome}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="HotelBookingProfile"
        component={HotelBookingProfile}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="HotelBookings"
        component={HotelBookings}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="HotelBookingWishlist"
        component={HotelBookingWishlist}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="HotelLogin"
        component={HotelLogin}
      />
    </Drawer.Navigator>
  );
}
