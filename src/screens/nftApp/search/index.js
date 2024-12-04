import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import SearchInput from './searchInput';
import nftStyle from '../../nftApp/style';
import RecentSearch from '@commonComponents/recentSearch';
import {fontSizes, windowWidth} from '@theme/appConstant';
import {recentSearch} from '@utils/json/nft';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import {topCategories} from '@utils/json/nft';
import Categories from '../../ecommerceApp/search/categories';
import {t} from 'i18next';
import appFonts from '@theme/appFonts';
import TopCollection from '@otherComponent/nft/home/topCollections';
import {RightArrow} from '@assets/images/common/svg/rightArrow';
import {windowHeight} from '@theme/appConstant';
import {BackArrow} from '@assets/images/common/svg/backArrow';

export default function search({navigation}) {
  const {isDark, viewRTLStyle, isRTL, textRTLStyle} = useValues();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        nftStyle.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <SearchInput navigation={navigation} />
      <RecentSearch
        onPress={() => {}}
        title={'search.recentSearch'}
        searchArr={recentSearch}
        viewContainer={styles.viewContainer}
        titleStyle={[
          styles.titleStyle,
          {left: isRTL ? windowWidth(-6) : windowWidth(7)},
          {color: isDark ? appColors.white : appColors.foodSecondary},
        ]}
        contentStyle={styles.contentStyle}
        crossColor={appColors.cabContent}
      />
      <Text
        style={[
          styles.title,
          {
            color: isDark ? appColors.white : appColors.nftTitle,
            textAlign: textRTLStyle,
          },
        ]}>
        {t('common.trendingCategory')}
      </Text>

      <Categories
        titleStyle={{
          fontFamily: appFonts.MontserratMedium,
          fontSize: fontSizes.FONT18,
        }}
        data={topCategories}
        navigation={navigation}
      />
      <Text
        style={[
          styles.title,
          {
            color: isDark ? appColors.white : appColors.nftTitle,
            marginTop: windowHeight(27),
            textAlign: textRTLStyle,
          },
        ]}>
        {t('nft.topCollection')}
      </Text>
      <View style={styles.margin}>
        <TopCollection
          navigation={navigation}
          showIcon
          icon={
            isRTL ? (
              <BackArrow />
            ) : (
              <RightArrow
                color={isDark ? appColors.white : appColors.nftTitle}
                strokeWidth={'1.9'}
              />
            )
          }
        />
      </View>
    </ScrollView>
  );
}
