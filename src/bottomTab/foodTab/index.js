import {View} from 'react-native';
import React from 'react';
import FoodHome from '@screens/foodOrderApp/home';
import FoodCart from '@screens/foodOrderApp/cart';
import FoodSearch from '@screens/foodOrderApp/search';
import FoodOffers from '@screens/foodOrderApp/offers';
import FoodProfile from '@screens/foodOrderApp/profile';
import {FoodTabBar} from './foodTabBar';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Foodhome} from '@assets/images/food_ordering_theme/svg/foodHome';
import {Foodsearch} from '@assets/images/food_ordering_theme/svg/foodSearch';
import {FoodUser} from '@assets/images/food_ordering_theme/svg/foodUser';
import {FoodOffer} from '@assets/images/food_ordering_theme/svg/foodOffer';
import {Foodcart} from '@assets/images/food_ordering_theme/svg/foodCart';
import appColors from '@theme/appColors';
import {t} from 'i18next';
import styles from './styles';
import {useValues} from '@App';

const Tab = createMaterialTopTabNavigator();
export default function FoodTab() {
  const {isDark} = useValues();
  return (
    <View
      style={[
        styles.mainTabContainer,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.foodPrimary},
      ]}>
      <Tab.Navigator
        tabBarPosition="bottom"
        tabBar={props => <FoodTabBar {...props} />}
        screenOptions={{
          swipeEnabled: false,
        }}>
        <Tab.Screen
          name="Home"
          component={FoodHome}
          options={{
            tabBarLabel: t('bottomTab.home'),
            tabBarIcon: () => (
              <Foodhome
                color={isDark ? appColors.white : appColors.foodContent}
              />
            ),
            activeTabBarIcon: () => (
              <Foodhome
                color={isDark ? appColors.white : appColors.foodSecondary}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={FoodSearch}
          options={{
            tabBarLabel: t('bottomTab.Search'),
            tabBarIcon: () => (
              <Foodsearch
                color={isDark ? appColors.white : appColors.foodContent}
              />
            ),
            activeTabBarIcon: () => (
              <Foodsearch
                color={isDark ? appColors.white : appColors.foodSecondary}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Cart"
          component={FoodCart}
          options={{
            tabBarLabel: t('bottomTab.Cart'),
            tabBarIcon: () => (
              <Foodcart
                color={isDark ? appColors.white : appColors.foodContent}
              />
            ),
            activeTabBarIcon: () => (
              <Foodcart
                color={isDark ? appColors.white : appColors.foodSecondary}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Offers"
          component={FoodOffers}
          options={{
            tabBarLabel: t('bottomTab.Offers'),
            tabBarIcon: () => (
              <FoodOffer
                color={isDark ? appColors.white : appColors.foodContent}
              />
            ),
            activeTabBarIcon: () => (
              <FoodOffer
                color={isDark ? appColors.white : appColors.foodSecondary}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={FoodProfile}
          options={{
            tabBarLabel: t('bottomTab.Profile'),
            tabBarIcon: () => (
              <FoodUser
                color={isDark ? appColors.white : appColors.foodContent}
              />
            ),
            activeTabBarIcon: () => (
              <FoodUser
                color={isDark ? appColors.white : appColors.foodSecondary}
              />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
