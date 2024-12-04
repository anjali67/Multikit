import {View, ScrollView, Text} from 'react-native';
import React from 'react';
import HomeHeader from '@otherComponent/ecommerce/homeHeader';
import SearchTextInput from '@otherComponent/ecommerce/searchTextInput';
import ecommerceStyles from '../style';
import HomeBanner from './homeBanner';
import HeadingText from '@commonComponents/headingText';
import {useValues} from '@App';
import styles from './styles';
import appColors from '@theme/appColors';
import {t} from 'i18next';
import {categories} from '@utils/json/ecommerce';
import Categories from './categories';
import JustForYouSection from './justForyouView';
import BottomView from './bottomView';
import {productData} from '@utils/json/ecommerce';

export default function EcommerceHome({navigation}) {
  const {isDark, textRTLStyle} = useValues();
  return (
    <View
      style={[
        ecommerceStyles.mainView,
        {
          backgroundColor: isDark ? appColors.darkTheme : appColors.white,
        },
      ]}>
      <HomeHeader showLogo navigation={navigation} />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <SearchTextInput />
        <HomeBanner />
        <HeadingText
          textStyle={[
            styles.textStyle,
            {color: isDark ? appColors.white : appColors.black},
          ]}
          seeAllStyle={[
            styles.seeAllStyle,
            {color: isDark ? appColors.white : appColors.subTitle},
          ]}
          title={t('common.Categories')}
          rowStyle={styles.rowStyle}
          seeAll={t('ecommerce.seeAll')}
        />
        <Categories data={categories} navigation={navigation} />
        <Text
          style={[
            styles.textStyle,
            {
              marginHorizontal: 20,
              textAlign: textRTLStyle,
              color: isDark ? appColors.white : appColors.ecommorcePrimary,
            },
          ]}>
          {t('ecommerce.justForYou')}
        </Text>
        <JustForYouSection data={productData} navigation={navigation} />
        <BottomView navigation={navigation} />
      </ScrollView>
    </View>
  );
}
