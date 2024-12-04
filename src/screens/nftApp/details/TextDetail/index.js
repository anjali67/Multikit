import {t} from 'i18next';
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from '../styles';
import {Global} from '@assets/images/nft_theme/svg/global';
import {Twitter} from '@assets/images/nft_theme/svg/twitter';
import {Instagram} from '@assets/images/nft_theme/svg/instagram';
import {Star} from '@assets/images/nft_theme/svg/star';
import {cryptoCurruncy} from '@utils/json/nft';
import {fontSizes} from '@theme/appConstant';
import TextView from './textView';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function textDetail(props) {
  const {isDark, isRTL} = useValues();
  return (
    <View style={styles.center}>
      <TextView
        selectCategory={props.selectCategory}
        title={'nft.kurtTheRoadie'}
        content={'nft.detailContent'}
      />
      <View style={[styles.row, styles.iconView]}>
        <Global width={'40'} />
        <Twitter width={'40'} />
        <Instagram width={'40'} />
        <Star />
      </View>
      <FlatList
        inverted={isRTL ? true : false}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={cryptoCurruncy}
        renderItem={({item, index}) => (
          <View style={styles.margin}>
            <Text
              style={[
                styles.title,
                {
                  fontSize: fontSizes.FONT18HALF,
                  color: isDark ? appColors.white : appColors.nftTitle,
                },
              ]}>
              {t(item.curruncy)} {t(item.unit)}
            </Text>
            <Text style={[styles.name, {fontSize: fontSizes.FONT17}]}>
              {t(item.name)}
            </Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.verticalLine}></View>}
      />
    </View>
  );
}
