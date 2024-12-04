import React from 'react';
import {View} from 'react-native';
import nftStyle from '../style';
import WalletSection from './walletSection';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Tokens from './walletSection/tokens';
import Collectibles from './walletSection/collectibles';
import {MyTabBar} from './walletSection/myTabBar';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import HomeHeader from '@commonComponents/homeHeader';
import {nftLogo, nftDarkLogo, blogUser} from '@utils/images/images';
import {t} from 'i18next';

const Tab = createMaterialTopTabNavigator();

export default function nftWallet({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        nftStyle.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <HomeHeader
        logoIcon={nftLogo}
        userIcon={blogUser}
        navigation={navigation}
        user={blogUser}
        mainContainer={{marginTop: 8}}
        darkLogo={nftDarkLogo}
      />
      <WalletSection />
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name={t('nft.tokens')} component={Tokens} />
        <Tab.Screen name={t('nft.collectibles')} component={Collectibles} />
      </Tab.Navigator>
    </View>
  );
}
