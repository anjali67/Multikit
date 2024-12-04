import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../component/header';
import {t} from 'i18next';
import styles from './styles';
import {CategoriesData} from '@utils/json/grocery';
import {Micline} from '@assets/images/grocery_assets/svg/micline';
import {Search} from '@assets/images/grocery_assets/svg/search';
import SearchBar from '@commonComponents/searchBar';
import {useValues} from '@App';
import appColors from '../../../theme/appColors';

export default function GroceryCategory({navigation}) {
  const {textRTLStyle, isDark} = useValues();

  const _renderItem = ({item, index}) => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate('CategoryShop');
      }}
      style={styles.mainView}>
      <View
        style={[
          styles.container,
          {backgroundColor: isDark ? appColors.darkTheme : appColors.category},
        ]}>
        <Image source={item.image} style={styles.image} />
      </View>
      <Text
        style={[
          styles.titleStyle,
          {color: isDark ? appColors.white : appColors.black},
        ]}>
        {t(item.title)}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View
      style={[
        styles.mainContainer,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <Header locationText navigation={navigation} />
      <SearchBar
        placeholder={'homeHeader.Searchproductshere'}
        rightIcon={<Micline />}
        leftIcon={<Search color={appColors.groceryFont} />}
        inputStyle={[styles.inputStyle]}
        inputText={[styles.inputText, {color: isDark ? appColors.white : null}]}
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
      <View>
        <FlatList
          data={CategoriesData}
          renderItem={_renderItem}
          keyExtractor={item => item.id}
          numColumns={3}
        />
      </View>
    </View>
  );
}
