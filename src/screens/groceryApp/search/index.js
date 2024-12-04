import {View, ScrollView, Text} from 'react-native';
import React from 'react';
import appColors from '@theme/appColors';
import Header from '../component/header';
import SearchBar from '@commonComponents/searchBar';
import {Micline} from '@assets/images/grocery_assets/svg/micline';
import {Search} from '@assets/images/grocery_assets/svg/search';
import RecentSearch from '@commonComponents/recentSearch';
import {searchArr} from '@utils/json/grocery';
import styles from './styles';
import Categories from '@otherComponent/grocery/categories';
import {trendingCategory} from '@utils/json/grocery';
import {t} from 'i18next';
import {useValues} from '@App';
import {windowWidth} from '../../../theme/appConstant';

export default function GrocerySearch({navigation}) {
  const {textRTLStyle, isDark, isRTL} = useValues();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <Header navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar
          placeholder={'homeHeader.Searchproductshere'}
          rightIcon={<Micline />}
          leftIcon={<Search color={appColors.groceryFont} />}
          inputStyle={[styles.inputStyle]}
          inputText={[
            styles.inputText,
            {color: isDark ? appColors.white : null},
          ]}
        />
        <RecentSearch
          onPress={() => {
            navigation.navigate('CategoryShop');
          }}
          title={'search.recentSearch'}
          searchArr={searchArr}
        />
        <Text
          style={[
            styles.title,
            {
              color: isDark ? appColors.white : appColors.black,
              textAlign: textRTLStyle,
              left: isRTL ? windowWidth(-4) : windowWidth(10),
            },
          ]}>
          {t('common.trendingCategory')}
        </Text>
        <Categories data={trendingCategory} navigation={navigation} />
      </ScrollView>
    </View>
  );
}
