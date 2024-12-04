import {View, ScrollView} from 'react-native';
import React from 'react';
import foodOrderStyle from '../style/styles';
import HeaderBar from '@otherComponent/food/headerBar';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import styles from './styles';
import ViewCartItem from './viewCartItem';
import CouponView from './CouponView';
import {useValues} from '@App';

export default function FoodCart({navigation, route}) {
  const notDisplayBottomTab = route.params?.notShowBottomTab;
  const addItemsToCart = route.params?.viewCartItem;
  const {isDark} = useValues();

  return (
    <ScrollView
      contentContainerStyle={[styles.containerView, {marginHorizontal: 10}]}
      showsVerticalScrollIndicator={false}
      style={[
        foodOrderStyle.mainContainer,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.foodPrimary},
      ]}>
      <View style={notDisplayBottomTab && styles.mainView}>
        <HeaderBar
          notShowheaderBg
          title={t('NearbyArr.soupFactory')}
          backColor={isDark ? appColors.white : appColors.foodSecondary}
          titleStyle={[
            styles.titleStyle,
            {color: isDark ? appColors.white : appColors.foodSecondary},
          ]}
          textView={styles.textView}
          color={isDark ? appColors.white : appColors.black}
          showRightIcons
        />
        <View style={styles.mainContainer}>
          <ViewCartItem addItemsToCart={addItemsToCart} />
          <CouponView navigation={navigation} />
        </View>
      </View>
    </ScrollView>
  );
}
