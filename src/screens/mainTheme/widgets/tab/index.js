import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {ecommerceCategories} from '@utils/json/ecommerce';
import Categories from '../../../ecommerceApp/search/categories';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import styles from './styles';
import {t} from 'i18next';
import WidgetsBg from '@otherComponent/mainTheme/widgets/background';

export default function tab({navigation}) {
  const [selectedCategory, setCategory] = useState(0);
  const {isDark, textRTLStyle, isRTL} = useValues();
  const getCategory = category => {
    setCategory(category);
  };
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <WidgetsBg
        navigation={navigation}
        title={t('mainTheme.tab')}
        subContent={t('mainTheme.tabContent')}
        content={
          <View style={{marginTop: 10}}>
            <Categories
              data={ecommerceCategories}
              navigation={navigation}
              getCategory={getCategory}
              selectedCategory={selectedCategory}
            />
            <View
              style={[
                styles.horizontalLine,
                {
                  borderTopColor: isDark
                    ? appColors.blackColor
                    : appColors.divider,
                },
              ]}></View>
            <Text style={styles.contentView}>
              {t('mainTheme.tebDiscription')}
            </Text>
          </View>
        }
      />
    </View>
  );
}
