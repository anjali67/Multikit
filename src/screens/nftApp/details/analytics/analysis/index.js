import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import styles from '../../styles';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import {DownArrow} from '@assets/images/common/svg/downArrow';
import {chart} from '@utils/images/images';
import {useValues} from '@App';

export default function analysis(props) {
  const {isDark, isRTL, textRTLStyle, viewRTLStyle} = useValues();
  return (
    <View style={[styles.margin, styles.marginHorizontal]}>
      <FlatList
        inverted={isRTL ? true : false}
        horizontal
        data={props.item.item.items}
        renderItem={({item, index}) => (
          <View style={styles.analySisview}>
            <Text style={[styles.name, {textAlign: textRTLStyle}]}>
              {t(item.name)}
            </Text>
            <View style={[styles.singleRow, {flexDirection: viewRTLStyle}]}>
              <Text style={styles.eth}>
                {t(item.eth)} {t(item.unit)}
              </Text>
              <Text style={[styles.eth, {color: '#038800'}]}>
                {t(item.analytics)}
              </Text>
            </View>
          </View>
        )}
      />
      <View
        style={[
          styles.singleRow,
          {marginTop: 10, flexDirection: viewRTLStyle},
        ]}>
        <Text
          style={[
            styles.content,
            {
              color: isDark ? appColors.white : appColors.nftTitle,
              marginHorizontal: 9,
            },
          ]}>
          {t('nft.volumePrice')}
        </Text>
        <View
          style={[
            styles.dropdownView,
            {
              backgroundColor: isDark
                ? appColors.darkTheme
                : appColors.lightBorder,
              flexDirection: viewRTLStyle,
            },
          ]}>
          <Text
            style={[
              styles.content,
              {color: isDark ? appColors.white : appColors.cabContent},
            ]}>
            2022
          </Text>
          <View style={{marginTop: 6}}>
            <DownArrow
              color={appColors.cabContent}
              height={'20'}
              width={'12'}
            />
          </View>
        </View>
      </View>
      <Image source={chart} style={styles.chartImg} />
    </View>
  );
}
