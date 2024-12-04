import {View, ScrollView, Text} from 'react-native';
import React, {useState} from 'react';
import ecommerceStyle from '../../style';
import HomeHeader from '@otherComponent/ecommerce/homeHeader';
import Slider from './slider';
import TextView from './textView';
import StarRating from '@commonComponents/starRating';
import styles from './styles';
import {t} from 'i18next';
import ColorSection from './colorSection';
import SizeSection from './sizeSection';
import ProcutBanner from '@otherComponent/ecommerce/productBanner';
import DiscriptionView from './discriptionView';
import AddCartView from './addCartView';
import ReviewSection from './reviewSection';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function ProductDetails({navigation}) {
  const [selectedColor, setSelectedColor] = useState(0);

  const {isDark, viewRTLStyle} = useValues();
  const setColor = val => {
    setSelectedColor(val);
  };

  return (
    <View
      style={[
        ecommerceStyle.mainView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <HomeHeader
        title={'ecommerce.productDetails'}
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Slider selectedColor={selectedColor} />
        <TextView />
        <View style={[styles.starView, {flexDirection: viewRTLStyle}]}>
          <StarRating />
          <Text style={styles.textStyle}>(20 {t('foodOrder.Ratings')})</Text>
        </View>
        <ColorSection setColor={setColor} selectedColor={selectedColor} />
        <SizeSection />
        <ProcutBanner />
        <DiscriptionView />
        <ReviewSection />
      </ScrollView>
      <AddCartView
        heading={t('ecommerce.addToWishlist')}
        title={t('ecommerce.addToCart')}
        onPress={() => {
          navigation.navigate('EcommerceCart', {navigation: navigation});
        }}
      />
    </View>
  );
}
