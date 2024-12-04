import {t} from 'i18next';
import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import styles from '../styles';
import {Articles} from '@utils/json/blog';
import ProgressBar from '@commonComponents/ProgressBar';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import { useNavigation } from '@react-navigation/native';

export default function article(props) {
  const {setIsRTL, isRTL, isDark, setIsDark, textRTLStyle, viewRTLStyle} =
    useValues();
    const navigation = useNavigation()
  return (
    <View style={styles.marginTop}>
      <Text
        style={[
          styles.title,
          {
            textAlign: textRTLStyle,
            color: isDark ? appColors.white : appColors.fontColor,
          },
        ]}>
        {t('blog.lastReadingArticle')}
      </Text>
      <FlatList
        data={Articles}
        renderItem={({index, item}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                navigation.navigate('BlogListing');
              }}
              style={[
                styles.row,
                styles.rowContainer,
                {
                  flexDirection: viewRTLStyle,
                  backgroundColor: isDark
                    ? appColors.darkTheme
                    : appColors.white,
                },
              ]}>
              <Image source={item.image} style={styles.imageStyle} />
              <View style={styles.textContainer}>
                <Text
                  style={[
                    styles.name,
                    {
                      textAlign: textRTLStyle,
                      color: isDark ? appColors.white : appColors.fontColor,
                    },
                  ]}>
                  {t(item.title)}
                </Text>
                <ProgressBar
                  containerStyle={styles.containerStyle}
                  progress={item.progress}
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
