import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import GroceryTab from '../../bottomTab/groceryTab/groceryTab';
import {useValues} from '@App';
import GroceryCart from '@screens/groceryApp/cart';
import GroceryProduct from '@screens/groceryApp/home/product';
import GroceryPayment from '@screens/groceryApp/cart/payment';
import GroceryOrderSucess from '@screens/groceryApp/cart/orderSucess';
import GroceryAddress from '../../screens/groceryApp/cart/address';
import CustomDrawer from '@commonComponents/CustomDrawer';
import {user} from '@utils/images/images';
import {menuItems} from '@utils/json/grocery';
import {megaThemeLogo} from '@utils/images/images';

const Drawer = createDrawerNavigator();

export default function GroceryDrawer({navigation}) {
  const {isRTL} = useValues();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: isRTL ? 'right' : 'left',
        swipeEnabled: true,
      }}
      drawerContent={props => (
        <CustomDrawer
          showLangugeIcon={true}
          menuItems={menuItems}
          userImg={user}
          {...props}
          navigation={navigation}
          logoImg={megaThemeLogo}
          onLogOutPress={() => {
            navigation.navigate('GrocerySignIn');
          }}
        />
      )}>
      <Drawer.Screen
        options={{headerShown: false}}
        name="GroceryTab"
        component={GroceryTab}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="GroceryCart"
        component={GroceryCart}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="GroceryProduct"
        component={GroceryProduct}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="GroceryPayment"
        component={GroceryPayment}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="GroceryOrderSucess"
        component={GroceryOrderSucess}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="GroceryAddress"
        component={GroceryAddress}
      />
    </Drawer.Navigator>
  );
}
