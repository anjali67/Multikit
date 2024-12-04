import FinanceHome from '@screens/financialApp/home';
import FinanceCards from '@screens/financialApp/cards';
import FinancePayment from '@screens/financialApp/payment';
import FinanceActivity from '@screens/financialApp/activity';
import FinanceProfile from '@screens/financialApp/profile';
import {Home} from '@assets/images/ecommerce_theme/svg/home';
import {Card} from '@assets/images/finance_theme/svg/card';
import {Payment} from '@assets/images/finance_theme/svg/payment';
import {Activity} from '@assets/images/finance_theme/svg/activity';
import {UserLine} from '@assets/images/grocery_assets/svg/userline';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import styles from './styles';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import FinanceTabBar from './tab';
import {View} from 'react-native';
import {t} from 'i18next';

const Tab = createMaterialTopTabNavigator();
export default function FinanceTab() {
  const {isDark} = useValues();
  return (
    <View
      style={[
        styles.mainTabContainer,
      
      ]}>
      <Tab.Navigator
        tabBarPosition="bottom"
        tabBar={props => <FinanceTabBar {...props} />}
        screenOptions={{
          swipeEnabled: false,
        
        }}>
        <Tab.Screen
          name={t('bottomTab.home')}
          component={FinanceHome}
          options={{
            tabBarIcon: () => (
              <Home
                height={'20'}
                width={'20'}
                color={isDark ? appColors.darkTheme : appColors.inActiveIcon}
              />
            ),
            activeTabBarIcon: () => (
              <Home
                height={'20'}
                width={'20'}
                color={appColors.gradient1}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name={t('financial.Cards')}
          component={FinanceCards}
          options={{
            tabBarIcon: () => (
              <Card
                height={'20'}
                width={'20'}
                color={isDark ? appColors.darkTheme : appColors.inActiveIcon}
              />
            ),
            activeTabBarIcon: () => (
              <Card
                height={'20'}
                width={'20'}
                color={appColors.gradient1}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name={t('financial.Payment')}
          component={FinancePayment}
          options={{
            tabBarIcon: () => (
              <Payment
                height={'20'}
                width={'20'}
                color={isDark ? appColors.darkTheme : appColors.inActiveIcon}
              />
            ),
            activeTabBarIcon: () => (
              <Payment
                height={'20'}
                width={'20'}
                color={appColors.gradient1}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name={t('financial.Activity')}
          component={FinanceActivity}
          options={{
            tabBarIcon: () => (
              <Activity
                height={'20'}
                width={'20'}
                color={isDark ? appColors.darkTheme : appColors.inActiveIcon}
              />
            ),
            activeTabBarIcon: () => (
              <Activity
                height={'20'}
                width={'20'}
                color={appColors.gradient1}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name={t('bottomTab.Profile')}
          component={FinanceProfile}
          options={{
            tabBarIcon: () => (
              <UserLine
                color={isDark ? appColors.darkTheme : appColors.inActiveIcon}
              />
            ),
            activeTabBarIcon: () => (
              <UserLine
                color={appColors.gradient1}
              />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
