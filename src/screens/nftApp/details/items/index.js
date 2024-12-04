import React from 'react';
import {View, FlatList, Text, Image} from 'react-native';
import styles from '../styles';
import SearchTextInput from './searchTextInput';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function items(props) {
  const {isDark, isRTL, textRTLStyle} = useValues();
  return (
    <View>
      <View style={{marginHorizontal: 20}}>
        <SearchTextInput />
      </View>
      <View style={{marginHorizontal: 6}}>
        <FlatList
          inverted={isRTL ? true : false}
          numColumns={2}
          data={props.item.items}
          renderItem={({item, index}) => (
            <View
              style={[
                styles.boxContainer,
                {
                  backgroundColor: isDark
                    ? appColors.darkTheme
                    : appColors.white,
                },
              ]}>
              <Image source={item.image} style={styles.imageView} />
              <Text
                style={[
                  styles.name,
                  {
                    color: isDark ? appColors.white : appColors.nftTitle,
                    marginTop: 10,
                    marginHorizontal: 5,
                    textAlign: textRTLStyle,
                  },
                ]}>
                {t(item.name)}
              </Text>
              <Text
                style={[
                  styles.name,
                  {
                    color: isDark ? appColors.white : appColors.cabContent,
                    marginTop: 3,
                    marginHorizontal: 5,
                    textAlign: textRTLStyle,
                  },
                ]}>
                {t(item.content)} {t('nft.eth')}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
