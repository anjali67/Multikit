import React, {useState} from 'react';
import NftHome from '../../screens/nftApp/home';
import NftSearch from '../../screens/nftApp/search';
import NftCart from '../../screens/nftApp/cart';
import NftWallet from '../../screens/nftApp/wallet';
import NftProfile from '../../screens/nftApp/profile';
import appColors from '../../theme/appColors';
import {fontSizes} from '../../theme/appConstant';
import {windowHeight, windowWidth} from '../../theme/appConstant';
import appFonts from '../../theme/appFonts';
import {HomeLine} from '@assets/images/grocery_assets/svg/homeLine';
import {t} from 'i18next';
import {Search} from '@assets/images/grocery_assets/svg/search';
import {Cart} from '../../assets/images/ecommerce_theme/svg/cart';
import {Wallet} from '../../assets/images/nft_theme/svg/wallet';
import {UserLine} from '@assets/images/grocery_assets/svg/userline';
import {useValues} from '@App';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import style from '../style/styles'

export default function nftTab({navigation}) {
  const [selected, setSelected] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const arr = [
    {
      name: t('bottomTab.home'),
      unfocused: <HomeLine color={appColors.cabContent} />,
      focused: <HomeLine color={appColors.nftTitle} />,
    },
    {
      name: t('bottomTab.Search'),
      unfocused: <Search color={appColors.cabContent} />,
      focused: <Search color={appColors.nftTitle} />,
    },
    {
      name: t('bottomTab.Cart'),
      unfocused: <Cart color={appColors.white} />,
      focused: <Cart color={appColors.white} />,
    },
    {
      name: t('cabBooking.Wallet'),
      unfocused: <Wallet color={appColors.cabContent} />,
      focused: <Wallet color={appColors.nftTitle} />,
    },
    {
      name: t('bottomTab.Profile'),
      unfocused: <UserLine color={appColors.cabContent} />,
      focused: <UserLine color={appColors.nftTitle} />,
    },
  ];

  const {isDark} = useValues();

  const selectTabValue = key => {
    setSelected(key);
    if (key === 2) setShowModal(true);
  };

  const changeTab = () => {
    setSelected(0);
    setShowModal(false);
  };

  return (
    <View style={{flex: 1}}>
      {selected === 0 ? (
        <NftHome />
      ) : selected === 1 ? (
        <NftSearch />
      ) : selected === 2 ? null : selected === 3 ? (
        <NftWallet />
      ) : (
        <NftProfile />
      )}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          height: windowHeight(50),
          backgroundColor: isDark ? appColors.blackColor : appColors.white,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: windowWidth(20),
          elevation: 6,
          alignItems: 'center',
        }}>
        {arr.map((item, key) => (
          <TouchableOpacity activeOpacity={0.7}
            style={key == 2 ? style.cartTab : style.tab }
            key={key}
            onPress={() => selectTabValue(key)}>
            {key === selected ? item.focused : item.unfocused}
            {key != 2 && (
              <Text
                style={{
                  fontSize: fontSizes.FONT17,
                  fontFamily: appFonts.PublicSansMedium,
                  color: appColors.cabContent,
                }}>
                {item.name}
              </Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
      <View style={{position: 'absolute'}}>
        <Modal transparent animationType="slide" visible={showModal}>
          <NftCart onPress={changeTab} navigation={navigation} />
        </Modal>
      </View>
    </View>
  );
}
