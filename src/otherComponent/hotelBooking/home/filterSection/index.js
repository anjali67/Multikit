import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import {t} from 'i18next';
import {filterData} from '@utils/json/hotelBooking';
import LinearGradient from 'react-native-linear-gradient';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import {windowWidth} from '../../../../theme/appConstant';

export default function filterSection(props) {
  const {viewRTLStyle, textRTLStyle, isRTL, isDark} = useValues();
  const [selectedItems, setSelectedItems] = useState([]);
  const onFilterBtn = itemId => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter(id => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  return (
    <View style={styles.topView}>
      <Text
        style={[
          styles.title,
          {
            textAlign: textRTLStyle,
            color: isDark ? appColors.white : appColors.reviewText,
          },
        ]}>
        {t('hotelBooking.popularFilter')}
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        inverted={isRTL ? true : false}
        data={filterData}
        renderItem={({item, index}) => {
          const isSelected = selectedItems.includes(item.id);
          return (
            <>
              <LinearGradient
                colors={[appColors.onBoardGradiant, appColors.onBoardGradiant1]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={[
                  styles.linearGradient,
                  {
                    marginRight: isRTL ? 0 : windowWidth(13),
                    marginLeft: isRTL ? windowWidth(13) : 0,
                  },
                  props.linearGradientStyle,
                ]}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => {
                    onFilterBtn(index);
                  }}
                  style={[
                    styles.innerContainer,
                    {
                      backgroundColor: isSelected
                        ? null
                        : isDark
                        ? appColors.darkTheme
                        : appColors.white,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.title,
                      {
                        color: isSelected
                          ? appColors.white
                          : isDark
                          ? appColors.white
                          : appColors.reviewText,
                      },
                    ]}>
                    {t(item.name)}
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </>
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}
