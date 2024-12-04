import {View, Text} from 'react-native';
import React from 'react';
import HomeHeader from '@otherComponent/ecommerce/homeHeader';
import SearchTextInput from '@otherComponent/ecommerce/searchTextInput';
import ecommerceStyles from '../style';
import RecentSearch from '@commonComponents/recentSearch';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';
import styles from './styles';
import appColors from '@theme/appColors';
import {t} from 'i18next';
import Categories from './categories';
import {ecommerceCategories} from '@utils/json/ecommerce';
import {recentSearch} from '@utils/json/ecommerce';

export default function EcommerceSearch({navigation}) {
  const {isRTL, isDark, textRTLStyle} = useValues();
  return (
    <View
      style={[
        ecommerceStyles.mainView,
        {
          backgroundColor: isDark ? appColors.darkTheme : appColors.white,
        },
      ]}>
      <HomeHeader
        title={'bottomTab.Search'}
        titleStyle={[
          styles.titleStyle,
          {
            marginBottom: 0,
            marginTop: 2,
            color: isDark ? appColors.white : appColors.ecommorcePrimary,
          },
        ]}
        navigation={navigation}
      />
      <SearchTextInput />
      <RecentSearch
        onPress={() => {
          navigation.navigate('ShopPage');
        }}
        title={'search.recentSearch'}
        searchArr={recentSearch}
        viewContainer={styles.viewContainer}
        titleStyle={[
          styles.titleStyle,
          {left: isRTL ? windowWidth(-6) : windowWidth(7)},
          {color: isDark ? appColors.white : appColors.foodSecondary},
        ]}
        contentStyle={styles.contentStyle}
        crossColor={appColors.foodContent}
      />
      <View style={styles.blankView}></View>
      <Text
        style={[
          styles.recommendedText,
          {
            textAlign: textRTLStyle,
            left: isRTL ? windowWidth(-6) : windowWidth(3),
            color: isDark ? appColors.white : appColors.foodSecondary,
          },
        ]}>
        {t('ecommerce.recommended')}
      </Text>
      <Categories data={ecommerceCategories} navigation={navigation} />
    </View>
  );
}
