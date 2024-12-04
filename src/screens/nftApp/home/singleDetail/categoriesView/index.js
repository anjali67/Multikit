import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import style from '../../styles';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function categoriesView(props) {
  const {isDark, viewRTLStyle, textRTLStyle, isRTL} = useValues();
  const filters = props.filters;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    selectValue(0);
  }, []);

  const selectValue = id => {
    props.setSelectCategory(id);
    var category = props.categoryData;
    var arr = [];
    category.map(item => {
      if (item.id == id + 1) {
        arr.push(item);
      }
    });
    setCategories(arr);
  };

  return (
    <View style={style.mainView}>
      <View
        style={[
          style.filterView,
          props.filterView,
          {
            backgroundColor: isDark ? appColors.darkTheme : appColors.grayLight,
            flexDirection: viewRTLStyle,
          },
        ]}>
        {filters.map((item, key) => (
          <TouchableOpacity
            style={[
              style.borderView,
              {borderBottomWidth: props.selectCategory == key ? 1.4 : null},
            ]}
            key={key}
            activeOpacity={0.8}
            onPress={() => selectValue(key)}>
            <Text
              style={[
                style.name,
                {
                  color:
                    props.selectCategory == key
                      ? appColors.nftBg
                      : isDark
                      ? appColors.white
                      : appColors.nftTitle,
                },
              ]}>
              {t(item.name)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={categories}
        renderItem={({item, index}) => (
          <View>
            {item.id === 1 && <props.filterItem item={item} />}
            {item.id === 2 && <props.filterItem1 item={item} />}
            {item.id === 3 && <props.filterItem2 item={item} />}
          </View>
        )}
      />
    </View>
  );
}
