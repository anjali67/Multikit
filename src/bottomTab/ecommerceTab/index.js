import {View} from 'react-native';
import React from 'react';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import style from './style';
import EcommerceHome from '@screens/ecommerceApp/home';
import {Home} from '@assets/images/ecommerce_theme/svg/home';
import EcommerceSearch from '@screens/ecommerceApp/search';
import {Search} from '@assets/images/ecommerce_theme/svg/search';
import EcommerceShop from '@screens/ecommerceApp/shop';
import {Shop} from '@assets/images/ecommerce_theme/svg/shop';
import EcommerceAccount from '@screens/ecommerceApp/account';
import {Account} from '@assets/images/ecommerce_theme/svg/account';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';
import {useValues} from '@App';

export default function index() {
  const Tab = AnimatedTabBarNavigator();
  const {isDark} = useValues();
  return (
    <View style={style.tabContainer}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: appColors.subTitle,
          inactiveTintColor: appColors.ecommerceFont,
          activeBackgroundColor: 'transparant',
          labelStyle: {
            fontFamily: appFonts.MontserratMedium,
            fontSize: fontSizes.FONT19,
          },
        }}
        appearance={{
          tabBarBackground: isDark
            ? appColors.blackColor
            : appColors.ecommorcePrimary,
          shadow: true,
          floating: true,
        }}>
        <Tab.Screen
          name="Home"
          component={EcommerceHome}
          options={{
            tabBarLabel: t('bottomTab.home'),
            tabBarIcon: () => <Home />,
            activeTabBarIcon: () => <Home />,

            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={EcommerceSearch}
          options={{
            tabBarLabel: t('ecommerce.explore'),
            tabBarIcon: () => <Search />,
            activeTabBarIcon: () => <Search />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Shop"
          component={EcommerceShop}
          options={{
            tabBarLabel: t('ecommerce.shop'),
            tabBarIcon: () => <Shop />,
            activeTabBarIcon: () => <Shop />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Account"
          component={EcommerceAccount}
          options={{
            tabBarLabel: t('foodProfile.account'),
            tabBarIcon: () => <Account />,
            activeTabBarIcon: () => <Account />,
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
