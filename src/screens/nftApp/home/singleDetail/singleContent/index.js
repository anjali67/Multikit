import {t} from 'i18next';
import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import {Global} from '@assets/images/nft_theme/svg/global';
import {Twitter} from '@assets/images/nft_theme/svg/twitter';
import {Instagram} from '@assets/images/nft_theme/svg/instagram';
import {Star} from '@assets/images/nft_theme/svg/star';
import {useValues} from '@App';

export default function singleContent(props) {
  const {isDark, viewRTLStyle, textRTLStyle, isRTL} = useValues();
  return (
    <View showsVerticalScrollIndicator={false} style={styles.mainView}>
      <Text
        style={[
          styles.title,
          {
            color: isDark ? appColors.white : appColors.nftTitle,
            textAlign: textRTLStyle,
          },
        ]}>
        {t(props.data.title ? props.data.title : t('nft.collectionTitle'))}
      </Text>
      <Text
        style={[
          styles.content,
          {
            color: isDark ? appColors.white : appColors.nftTitle,
            textAlign: textRTLStyle,
          },
        ]}>
        {t(props.data.content ? props.data.title : t('nft.collectionContent'))}
      </Text>
      <Text
        style={[
          styles.content,
          {
            marginTop: 6,
            color: appColors.cabContent,
            fontSize: fontSizes.FONT18HALF,
            textAlign: textRTLStyle,
          },
        ]}>
        {t('nft.detailContent')}
      </Text>
      <View style={{flexDirection: viewRTLStyle}}>
        <View style={styles.iconView}>
          <Global />
          <Twitter />
          <Instagram />
          <Star />
        </View>
      </View>
    </View>
  );
}
