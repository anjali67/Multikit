import React, {useState} from 'react';
import {View, Image, ScrollView} from 'react-native';
import styles from '../styles';
import nftStyle from '../../style';
import HeaderRow from '@otherComponent/nft/headerRow';
import SingleContent from './singleContent';
import CategoriesView from './categoriesView';
import BottomView from '@otherComponent/nft/bottomView';
import {categoryFilter, categoryData} from '@utils/json/nft';
import Property from './categoriesView/property';
import Offer from './categoriesView/offer';
import Info from './categoriesView/info';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function singleDetails({route}) {
  const [data, setData] = useState(route.params.topcollections);
  const [selectCategory, setSelectCategory] = useState(0);
  const {isDark} = useValues();

  return (
    <View
      style={[
        nftStyle.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <ScrollView
        contentContainerStyle={{paddingBottom: 40}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.containerView}>
          <HeaderRow title={data.title} />
          <View style={{marginHorizontal: 20, marginTop: 15}}>
            <View style={styles.borderRadiusView}>
              <Image source={data.image} style={styles.image} />
            </View>
            <SingleContent data={data} />
            <CategoriesView
              filters={categoryFilter}
              categoryData={categoryData}
              filterItem={Property}
              filterItem1={Offer}
              filterItem2={Info}
              selectCategory={selectCategory}
              setSelectCategory={setSelectCategory}
            />
          </View>
        </View>
      </ScrollView>
      <View>
        <BottomView />
      </View>
    </View>
  );
}
