import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';
import nftStyle from '../style';
import HeaderRow from '@otherComponent/nft/headerRow';
import {t} from 'i18next';
import TextDetail from './TextDetail';
import CategoriesView from '../home/singleDetail/categoriesView';
import {filterData} from '@utils/json/nft';
import {detailAttributeData} from '@utils/json/nft';
import Items from './items';
import Analytics from './analytics';
import Activity from './activity';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import ImageSection from './imageSection';

export default function details({navigation}) {
  const [selectCategory, setSelectCategory] = useState(0);
  const {isDark} = useValues();

  return (
    <ScrollView
      style={[
        nftStyle.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <View style={styles.containerView}>
        <HeaderRow title={t('nft.kurtTheRoadie')} />
        <ImageSection selectCategory={selectCategory} />
        <TextDetail selectCategory={selectCategory} />
        <View>
          <CategoriesView
            filterView={{marginHorizontal: 20}}
            filters={filterData}
            categoryData={detailAttributeData}
            filterItem={Items}
            filterItem1={Analytics}
            filterItem2={Activity}
            selectCategory={selectCategory}
            setSelectCategory={setSelectCategory}
            navigation={navigation}
          />
        </View>
      </View>
    </ScrollView>
  );
}
