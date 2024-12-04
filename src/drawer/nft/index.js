import React from 'react';
import nftTab from '../../bottomTab/nftTab';
import {createDrawerNavigator} from '@react-navigation/drawer';
import NftWallet from '@screens/nftApp/wallet';
import auction from '@screens/nftApp/auction';
import CustomDrawer from '@commonComponents/CustomDrawer';
import appColors from '@theme/appColors';
import {nftDrawerItems} from '@utils/json/nft';
import {useValues} from '@App';
import styles from './styles';
import {nftProfile} from '@utils/images/images';
import NftProfile from '../../screens/nftApp/profile';

const Drawer = createDrawerNavigator();

export default function nftDrawer({navigation}) {
  const {isRTL, isDark} = useValues();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: isRTL ? 'right' : 'left',
        swipeEnabled: true,
      }}
      drawerContent={props => (
        <CustomDrawer
          showDivider
          menuItems={nftDrawerItems}
          userImg={nftProfile}
          {...props}
          containerStyle={[
            styles.container,
            {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
          ]}
          textStyle={[
            styles.textStyle,
            {color: isDark ? appColors.white : appColors.ecommerceFont},
          ]}
          mail={[
            styles.mail,
            {color: isDark ? appColors.white : appColors.ecommerceFont},
          ]}
          title={[
            styles.textStyle,
            {color: isDark ? appColors.white : appColors.ecommerceFont},
          ]}
          logoutView={[
            styles.logoutView,
            {backgroundColor: isDark && appColors.blackColor},
          ]}
          logOutText={[
            styles.textStyle,
            {color: isDark ? appColors.white : appColors.ecommerceFont},
          ]}
          profileView={styles.profileView}
          imageStyle={styles.imageStyle}
          onLogOutPress={() => navigation.navigate('NftLogin')}
        />
      )}>
      <Drawer.Screen
        options={{headerShown: false}}
        name="Home"
        component={nftTab}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="NftWallet"
        component={NftWallet}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="auction"
        component={auction}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="NftProfile"
        component={NftProfile}
      />
    </Drawer.Navigator>
  );
}
