import React from 'react';
import {View, Image, Text} from 'react-native';
import nftStyle from '../style';
import {nftProfile} from '@utils/images/images';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import {profileData} from '@utils/json/nft';
import TopCollection from '@otherComponent/nft/home/topCollections';
import {RightArrow} from '@assets/images/common/svg/rightArrow';
import {useValues} from '@App';
import {BackArrow} from '@assets/images/common/svg/backArrow';
import styles from './styles';

import HomeHeader from '@commonComponents/homeHeader';
import {nftLogo, nftDarkLogo, blogUser} from '@utils/images/images';

export default function Profile({navigation}) {
  const {isDark, isRTL} = useValues();
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
      <View style={styles.center}>
        <Image source={nftProfile} style={styles.image} />
        <Text
          style={[
            styles.title,
            {color: isDark ? appColors.white : appColors.nftTitle},
          ]}>
          {t('nft.walletTitle')}
        </Text>
        <Text style={styles.content}>{t('nft.walletContent')}</Text>
      </View>
      <View style={styles.top}>
        <TopCollection
          imageStyle={styles.imageStyle}
          navigation={navigation}
          data={profileData}
          showIcon
          icon={
            isRTL ? (
              <BackArrow />
            ) : (
              <RightArrow
                color={isDark ? appColors.white : appColors.blackColor}
                height={'15'}
                width={'15'}
              />
            )
          }
          seperator={{marginTop: 0, marginBottom: 7}}
          showLastLine
        />
      </View>
    </View>
  );
}
