import {View, Text} from 'react-native';
import React from 'react';
import foodOrderStyle from '../style/styles';
import FoodTextInput from '@otherComponent/food/textInput';
import styles from './styles';
import {t} from 'i18next';
import RecentSearch from '@commonComponents/recentSearch';
import {ClockOutline} from '@assets/images/common/svg/clockoutline';
import appColors from '@theme/appColors';
import CuisineCategory from '@otherComponent/food/cuisineCategory';
import {cuisineData} from '@utils/json/food';
import {resentSearchData} from '@utils/json/food';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';

export default function FoodSearch({navigation}) {
  const {isRTL, isDark, textRTLStyle} = useValues();
  return (
    <View
      style={[
        foodOrderStyle.mainContainer,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.foodPrimary},
      ]}>
      <FoodTextInput
        textInputContainer={[
          foodOrderStyle.textInputContainer,
          styles.marginTop,
        ]}
        placeholder={t('homeHeader.searchContent')}
      />
      <RecentSearch
        onPress={() => {}}
        title={'search.recentSearch'}
        searchArr={resentSearchData}
        viewContainer={styles.viewContainer}
        icon={<ClockOutline strokeWidth={1.6} />}
        titleStyle={[
          styles.titleStyle,
          {left: isRTL ? windowWidth(-6) : windowWidth(3)},
          {color: isDark ? appColors.white : appColors.foodSecondary},
        ]}
        contentStyle={styles.contentStyle}
        crossColor={appColors.foodContent}
      />
      <View style={styles.blankView}></View>
      <Text
        style={[
          styles.titleStyle,
          {
            textAlign: textRTLStyle,
            left: isRTL ? windowWidth(-6) : windowWidth(3),
            color: isDark ? appColors.white : appColors.foodSecondary,
          },
        ]}>
        {t('foodSearch.title')}
      </Text>
      <CuisineCategory data={cuisineData} navigation={navigation} />
    </View>
  );
}
