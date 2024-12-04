import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import nftStyles from '../style';
import {t} from 'i18next';
import TopCollection from '@otherComponent/nft/home/topCollections';
import {cartData} from '@utils/json/nft';
import {Delete} from '@assets/images/grocery_assets/svg/delete';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import Button from '@commonComponents/button/button';
import HeaderRow from '@otherComponent/nft/headerRow';

export default function cart({navigation, onPress}) {
  const {textRTLStyle, isDark, currSymbol, currValue} = useValues();
  return (
    <View
      style={[
        nftStyles.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <View style={styles.container}>
        <HeaderRow title={'bottomTab.Cart'} onPress={onPress} />
        <View style={[styles.marginTop, {marginHorizontal: 10}]}>
          <TopCollection
            navigation={navigation}
            data={cartData}
            showIcon
            icon={<Delete color={isDark ? appColors.white : '#1B1B3E'} />}
          />
        </View>
        <View style={styles.seperator}></View>
        <View style={styles.row}>
          <Text
            style={[
              styles.title,
              {
                fontSize: fontSizes.FONT20,
                color: isDark ? appColors.white : appColors.cabContent,
              },
            ]}>
            {t('nft.total')}
          </Text>
          <Text
            style={[
              styles.title,
              {
                fontSize: fontSizes.FONT20,
                color: isDark ? appColors.white : appColors.nftTitle,
              },
            ]}>
            200 {t('nft.eth')} / {currSymbol}
            {currValue * 50}
          </Text>
        </View>
        <View style={styles.blankView}></View>
        <Button
          text={t('nft.checkOut')}
          style={[
            styles.btnStyle,
            {borderColor: isDark ? appColors.white : appColors.ecommerceFont},
          ]}
          btnTextStyle={[
            styles.checkoutBtn,
            {color: isDark ? appColors.white : appColors.nftTitle},
          ]}
          onPress={() => {}}
        />
      </View>
    </View>
  );
}
