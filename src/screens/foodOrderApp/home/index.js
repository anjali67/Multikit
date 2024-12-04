import {ScrollView, View, Text} from 'react-native';
import React from 'react';
import foodOrderStyle from '../style/styles';
import HomeHeader from '@otherComponent/food/homeHeader';
import FoodTextInput from '@otherComponent/food/textInput';
import {t} from 'i18next';
import styles from './styles';
import HomeSlider from '@otherComponent/food/homeSlider';
import CuisineCategory from '@otherComponent/food/cuisineCategory';
import {cuisineData} from '@utils/json/food';
import {DeliverData} from '@utils/json/food';
import DeliveredData from '@otherComponent/food/deliveryData';
import HeadingText from '@commonComponents/headingText';
import NearByRestaurants from '@otherComponent/food/nearByRestaurants';
import {nearByData} from '@utils/json/food';
import FeaturedResturants from '@otherComponent/food/featuredResturants';
import {productData} from '@utils/json/food';
import {foodData} from '@utils/json/food';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function FoodHome({navigation}) {
  const {isDark} = useValues();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        foodOrderStyle.mainContainer,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.foodPrimary},
      ]}
      contentContainerStyle={styles.scrollView}>
      <HomeHeader />
      <FoodTextInput
        textInputContainer={foodOrderStyle.textInputContainer}
        placeholder={t('homeHeader.searchContent')}
      />
      <View style={styles.container}>
        <HomeSlider />
      </View>

      <CuisineCategory
        data={cuisineData}
        scrollViewStyle={styles.scrollViewStyle}
        navigation={navigation}
      />
      <DeliveredData data={DeliverData} />
      <HeadingText
        textStyle={[
          styles.textStyle,
          {color: isDark ? appColors.white : appColors.black},
        ]}
        seeAllStyle={styles.seeAllStyle}
        title={t('foodBanner.NearbyRestaurants')}
        rowStyle={styles.rowStyle}
      />
      <NearByRestaurants data={nearByData} navigation={navigation} />
      <HeadingText
        textStyle={[
          styles.textStyle,
          {color: isDark ? appColors.white : appColors.black},
        ]}
        seeAllStyle={styles.seeAllStyle}
        title={t('foodBanner.feruredRestaurants')}
        rowStyle={styles.rowStyle}
      />
      <FeaturedResturants data={productData} />
      <HeadingText
        textStyle={[
          styles.textStyle,
          {color: isDark ? appColors.white : appColors.black},
        ]}
        seeAllStyle={styles.seeAllStyle}
        title={t('foodBanner.mustFood')}
        rowStyle={styles.rowStyle}
      />
      <FeaturedResturants data={foodData} />
    </ScrollView>
  );
}
