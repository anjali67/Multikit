import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {t} from 'i18next';
import styles from '../styles';
import {tags} from '@utils/json/blog';
import CategoryRow from '../../home/categories/categoryRow';
import {newsData} from '@utils/json/blog';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function trendingTags({navigation}) {
  const {isDark, viewRTLStyle, textRTLStyle, isRTL} = useValues();
  return (
    <View style={styles.containerView}>
      <Text
        style={[
          styles.title,
          {
            textAlign: textRTLStyle,
            color: isDark ? appColors.white : appColors.fontColor,
          },
        ]}>
        {t('blog.trendingTags')}
      </Text>
      <FlatList
        numColumns={3}
        data={tags}
        renderItem={({item}) => (
          <View style={styles.tagsView}>
            <Text style={styles.name}> #{t(item.name)}</Text>
          </View>
        )}
      />
      <Text
        style={[
          styles.title,
          {
            marginBottom: 0,
            marginTop: 15,
            textAlign: textRTLStyle,
            color: isDark ? appColors.white : appColors.fontColor,
          },
        ]}>
        {t('blog.trendingNews')}
      </Text>
      <CategoryRow
        leftStyle={{left: isRTL ? null : -10}}
        articalContent
        navigation={navigation}
        data={newsData}
      />
    </View>
  );
}
