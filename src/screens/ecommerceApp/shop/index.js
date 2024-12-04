import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import HomeHeader from '@otherComponent/ecommerce/homeHeader';
import styles from './styles';
import SearchTextInput from '@otherComponent/ecommerce/searchTextInput';
import ecommerceStyles from '../style';
import Categories from '../search/categories';
import {ecommerceCategories} from '@utils/json/ecommerce';
import {t} from 'i18next';
import ShopCategory from './shopCategory';
import {shopData} from '@utils/json/ecommerce';
import {windowHeight} from '@theme/appConstant';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function EcommerceShop({navigation}) {
  const [selectedCategory, setCategory] = useState(0);
  const {isDark, textRTLStyle, isRTL} = useValues();
  const getCategory = category => {
    setCategory(category);
  };

  return (
    <View
      style={[
        ecommerceStyles.mainView,
        {
          backgroundColor: isDark ? appColors.darkTheme : appColors.white,
        },
      ]}>
      <HomeHeader
        title={'common.Categories'}
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
      <ScrollView
        contentContainerStyle={{paddingBottom: windowHeight(90)}}
        showsVerticalScrollIndicator={false}>
        <SearchTextInput />
        <Categories
          data={ecommerceCategories}
          navigation={navigation}
          getCategory={getCategory}
          mainContainer={styles.mainContainer}
          selectedCategory={selectedCategory}
        />
        <View
          style={[
            styles.horizontalLine,
            {borderTopColor: isDark ? appColors.blackColor : appColors.divider},
          ]}></View>
        <View style={styles.categoryView}>
          <Text
            style={[
              styles.titleStyle,
              {
                textAlign: textRTLStyle,
                right: isRTL ? 6 : null,
                color: isDark ? appColors.white : appColors.ecommorcePrimary,
              },
            ]}>
            {t('common.Categories')}
          </Text>
        </View>
        <ShopCategory data={shopData} navigation={navigation} />
      </ScrollView>
    </View>
  );
}
