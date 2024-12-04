import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import HomeHeader from '@otherComponent/ecommerce/homeHeader';
import SearchTextInput from '@otherComponent/ecommerce/searchTextInput';
import styles from '../styles';
import {windowHeight} from '@theme/appConstant';
import JustForYouSection from '../../home/justForyouView';
import {t} from 'i18next';
import {womenCollection} from '@utils/json/ecommerce';
import {useValues} from '../../../../../App';
import appColors from '../../../../theme/appColors';

export default function ShopPage({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        ecommerceStyles.mainView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <HomeHeader
        title={'ecommerce.womenCollection'}
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
        contentContainerStyle={{paddingBottom: windowHeight(10)}}
        showsVerticalScrollIndicator={false}>
        <SearchTextInput
          container={styles.container}
          showFilter
          inputContainer={styles.inputContainer}
        />
        <Text style={styles.contentStyle}>
          45 {t('ecommerce.productsFound')}
        </Text>
        <JustForYouSection data={womenCollection} navigation={navigation} />
      </ScrollView>
    </View>
  );
}
