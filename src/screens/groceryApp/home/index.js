import {View, ScrollView, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Categories from '@otherComponent/grocery/categories';
import {categories} from '@utils/json/grocery';
import HomeSlider from '@commonComponents/homeSlider';
import {t} from 'i18next';
import {homeBanner} from '@utils/json/grocery';
import HeadingText from '@commonComponents/headingText';
import {lowestPrices, EverydayEssential, offersData} from '@utils/json/grocery';
import HorizontalView from '../component/horizontalView';
import {windowHeight} from '@theme/appConstant';
import {bannerImg} from '@utils/images/images';
import OfferView from '../component/offerView';
import Header from '../component/header';
import {Micline} from '@assets/images/grocery_assets/svg/micline';
import {Search} from '@assets/images/grocery_assets/svg/search';
import SearchBar from '@commonComponents/searchBar';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function Home({navigation}) {
  const {textRTLStyle, isDark} = useValues();
  return (
    <View
      style={[
        styles.mainView,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <Header locationText navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar
          placeholder={'homeHeader.Searchproductshere'}
          rightIcon={<Micline />}
          leftIcon={<Search color={appColors.groceryFont} />}
          inputStyle={[styles.inputStyle, {backgroundColor: 'red'}]}
          inputText={[
            styles.inputText,
            {color: isDark ? appColors.white : appColors.black},
          ]}
        />
        <Text
          style={[
            styles.title,
            {
              textAlign: textRTLStyle,
              color: isDark ? appColors.white : appColors.black,
            },
          ]}>
          {t('common.Categories')}
        </Text>
        <Categories data={categories} navigation={navigation} />
        <HomeSlider
          gotoScreen={() => {
            navigation.navigate('CategoryShop');
          }}
          swiperData={homeBanner}
        />
        <HeadingText
          textStyle={[
            styles.textStyle,
            {color: isDark ? appColors.white : appColors.black},
          ]}
          title={'common.LowestPrice'}
          seeAllStyle={[
            styles.seeAllStyle,
            {color: isDark ? appColors.white : appColors.groceryBtn},
          ]}
        />
        <HorizontalView
          onPress={() => {
            navigation.navigate('GroceryProduct');
          }}
          data={lowestPrices}
        />
        <HeadingText
          textStyle={[
            styles.textStyle,
            {color: isDark ? appColors.white : appColors.black},
          ]}
          title={'common.Everyday Essentials'}
          seeAllStyle={[
            styles.seeAllStyle,
            {color: isDark ? appColors.white : appColors.groceryBtn},
          ]}
          top={windowHeight(20)}
        />
        <HorizontalView
          onPress={() => {
            navigation.navigate('GroceryProduct');
          }}
          data={EverydayEssential}
        />
        <View style={styles.benner}>
          <Image source={bannerImg} style={styles.bannerImg} />
        </View>
        <HeadingText
          textStyle={[
            styles.textStyle,
            {color: isDark ? appColors.white : appColors.black},
          ]}
          title={'homePage.Say hello to Offers!'}
          seeAllStyle={[
            styles.seeAllStyle,
            {color: isDark ? appColors.white : appColors.groceryBtn},
          ]}
          top={windowHeight(22)}
        />
        <OfferView
          onPress={() => {
            navigation.navigate('GroceryProduct');
          }}
          data={offersData}
        />
      </ScrollView>
    </View>
  );
}
