import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from '../../../styles';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';
import {useValues} from '@App';

export default function property(props) {
  const {isDark} = useValues();
  return (
    <View>
      {
        <FlatList
          data={props.item.items}
          renderItem={({item, index}) => (
            <View style={styles.propertyView}>
              <Text
                style={[
                  styles.name,
                  {
                    color: appColors.nftBg,
                    fontFamily: appFonts.MontserratRegular,
                    marginTop: 4,
                  },
                ]}>
                {t(item.type)}
              </Text>
              <Text
                style={[
                  styles.name,
                  {
                    marginTop: 8,
                    fontFamily: appFonts.MontserratSemiBold,
                    color: isDark ? appColors.white : appColors.nftTitle,
                  },
                ]}>
                {t(item.title)}
              </Text>
              <Text
                style={[
                  styles.content,
                  {
                    marginTop: 6,
                    color: appColors.cabContent,
                    fontSize: fontSizes.FONT19,
                  },
                ]}>
                {t(item.trait)} {t('nft.propertyContent')}
              </Text>
            </View>
          )}
        />
      }
    </View>
  );
}
