import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useValues} from '@App';
import CabBookingHome from '@screens/cabBookingApp/home';
import CustomDrawer from './drawer';
import ChooseRide from '@screens/cabBookingApp/ride';
import RideDetails from '@screens/cabBookingApp/rideDetail';
import CabPayment from '@screens/cabBookingApp/payment';
import BookedRide from '@screens/cabBookingApp/bookedRide';

const Drawer = createDrawerNavigator();
export default function cabBookingDrawer({navigation}) {
  const {isRTL} = useValues();
  return (
    <Drawer.Navigator
      drawerStyle={{
        borderRadius: 20,
      }}
      initialRouteName="CabBookingHome"
      screenOptions={{
        drawerPosition: isRTL ? 'right' : 'left',
        swipeEnabled: true,
      }}
      drawerContent={props => <CustomDrawer navigation={navigation} />}>
      <Drawer.Screen
        options={{headerShown: false}}
        name="CabBookingHome"
        component={CabBookingHome}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="ChooseRide"
        component={ChooseRide}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="RideDetails"
        component={RideDetails}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="CabPayment"
        component={CabPayment}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="BookedRide"
        component={BookedRide}
      />
    </Drawer.Navigator>
  );
}
