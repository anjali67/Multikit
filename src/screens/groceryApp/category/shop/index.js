import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import {t} from 'i18next';
import Header from '../../component/header';
import CategoryData from '../../component/categoryData';
import appColors from '@theme/appColors';
import {Micline} from '@assets/images/grocery_assets/svg/micline';
import {Search} from '@assets/images/grocery_assets/svg/search';
import SearchBar from '@commonComponents/searchBar';
import OfferView from '../../component/offerView';
import {shopData} from '@utils/json/grocery';
import ViewCart from '@commonComponents/viewCart';
import ViewCartContainer from '@otherComponent/grocery/viewCartContainer';
import {useValues} from '@App';

export default function CategoryShop({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDark ? appColors.blackColor : appColors.white,
      }}>
      <Header backIcon locationText navigation={navigation} />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
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
        <Text
          style={[
            styles.title,
            {color: isDark ? appColors.white : appColors.black},
          ]}>
          {t('common.Categories')}
        </Text>
        <CategoryData />
        <OfferView data={shopData} />
      </ScrollView>
      <ViewCart
        content={
          <View>
            <ViewCartContainer navigation={navigation} />
          </View>
        }
      />
    </View>
  );
}
