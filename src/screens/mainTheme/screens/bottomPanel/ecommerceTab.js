import {View} from 'react-native';
import React from 'react';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import {Home} from '@assets/images/ecommerce_theme/svg/home';
import {Search} from '@assets/images/ecommerce_theme/svg/search';
import {Shop} from '@assets/images/ecommerce_theme/svg/shop';
import {Account} from '@assets/images/ecommerce_theme/svg/account';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';
import {useValues} from '@App';
import CommonView from './commonView';

export default function ecommerceBottomTab() {
  const Tab = AnimatedTabBarNavigator();
  const {isDark} = useValues();
  return (
    <View style={{flex:1}}>
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
          component={CommonView}
          options={{
            tabBarLabel: t('bottomTab.home'),
            tabBarIcon: () => <Home />,
            activeTabBarIcon: () => <Home />,

            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={CommonView}
          options={{
            tabBarLabel: t('ecommerce.explore'),
            tabBarIcon: () => <Search />,
            activeTabBarIcon: () => <Search />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Shop"
          component={CommonView}
          options={{
            tabBarLabel: t('ecommerce.shop'),
            tabBarIcon: () => <Shop />,
            activeTabBarIcon: () => <Shop />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Account"
          component={CommonView}
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
