import React, {useState} from 'react';
import {Text, TouchableOpacity, FlatList} from 'react-native';
import appColors from '@theme/appColors';
import {t} from 'i18next';
import {Check} from '@assets/images/ecommerce_theme/svg/check';
import style from './styles';
import {useValues} from '@App';

export default function multipleCheckBox(props) {
  const [selectedItems, setSelectedItems] = useState([]);
  const {isDark, viewRTLStyle, isRTL} = useValues();
  const handleItemSelection = itemId => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter(id => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const renderItem = ({item}) => {
    const isSelected = selectedItems.includes(item.id);
    const itemBackgroundColor = isSelected
      ? '#4466F2'
      : isDark
      ? appColors.darkTheme
      : appColors.verticalLine;
    const displayCheckIcon = isSelected ? <Check strokeWidth={'0.8'} /> : null;
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={[style.row, {flexDirection: viewRTLStyle}]}
        onPress={() => handleItemSelection(item.id)}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => handleItemSelection(item.id)}
          style={[
            style.checkbox,
            {
              backgroundColor: itemBackgroundColor,
              marginHorizontal: isRTL ? 4 : null,
            },
          ]}>
          {displayCheckIcon}
        </TouchableOpacity>
        <Text
          style={[
            style.itemStyle,
            {color: isDark ? appColors.white : appColors.fontColor},
          ]}>
          {t(item.name)}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={props.data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
}
