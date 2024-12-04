import {View, Image, Text} from 'react-native';
import React from 'react';
import {nftSplashBg} from '@utils/images/images';
import styles from './styles';
import {t} from 'i18next';
import nftStyles from '../style';
import ButtonView from '@otherComponent/nft/button';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function onBoarding({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        nftStyles.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <Image source={nftSplashBg} style={styles.image} />
      <View style={styles.center}>
        <Text
          style={[
            styles.title,
            {color: isDark ? appColors.white : appColors.nftTitle},
          ]}>
          {t('chatting.welcomeText')}
        </Text>
        <Text style={styles.content}>{t('nft.spalshContent')}</Text>
        <ButtonView
          onBtnClick={() => {
            navigation.navigate('NftLogin');
          }}
          btnTitle={'chatting.joinNow'}
        />
      </View>
    </View>
  );
}
