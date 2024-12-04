import React, {useState} from 'react';
import {View, FlatList, Text, TextInput} from 'react-native';
import WidgetsBg from '@otherComponent/mainTheme/widgets/background';
import mainStyle from '../../style';
import {t} from 'i18next';
import {filterData} from '@utils/json/mainTheme';
import {ArrowUpRight} from '@assets/images/main_theme_images/svg/arrowupright';
import styles from './styles';
import {useValues} from '@App';
import appColors from '../../../../theme/appColors';

export default function searchBar({navigation}) {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState(filterData);

  const {viewRTLStyle, isDark, textRTLStyle} = useValues();

  const handleSearch = text => {
    setSearchText(text);
    const searchingData = data.filter(item =>
      t(item.name).toLowerCase().includes(text.toLowerCase()),
    );
    setData(searchingData);
  };

  return (
    <View
      style={[
        mainStyle.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.grayLight},
      ]}>
      <WidgetsBg
        navigation={navigation}
        title={t('mainTheme.searchBar')}
        subContent={t('mainTheme.searchBarContent')}
        content={
          <View style={styles.container}>
            <TextInput
              value={searchText}
              onChangeText={handleSearch}
              placeholder={t('bottomTab.Search')}
              style={[
                styles.inputStyle,
                {
                  textAlign: textRTLStyle,
                  backgroundColor: isDark
                    ? appColors.darkTheme
                    : appColors.bgColor,
                },
              ]}
              placeholderTextColor={
                isDark ? appColors.white : appColors.fontColor
              }
            />
            <FlatList
              data={data}
              renderItem={({item, index}) => (
                <View
                  style={[
                    styles.row,
                    {
                      flexDirection: viewRTLStyle,
                      backgroundColor: isDark
                        ? appColors.darkTheme
                        : appColors.bgColor,
                    },
                  ]}>
                  <Text
                    style={[
                      mainStyle.title,
                      {color: isDark ? appColors.white : appColors.fontColor},
                    ]}>
                    {t(item.name)}
                  </Text>
                  <ArrowUpRight
                    color={isDark ? appColors.white : appColors.blackColor}
                  />
                </View>
              )}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        }
      />
    </View>
  );
}
