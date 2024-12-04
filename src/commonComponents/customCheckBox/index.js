import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Checkbox} from '../../assets/images/common/svg/checkbox';
import Checksquare from 'react-native-vector-icons/AntDesign';
import appColors from '../../theme/appColors';

export default function CustomCheckboxItem({item, isChecked, toggleCheckbox}) {
  return (
    <TouchableOpacity
      style={{marginTop: 10}}
      activeOpacity={0.7}
      onPress={() => toggleCheckbox(item.id)}>
      {isChecked ? (
        <>
          <Checksquare name="checksquare" size={22} color={appColors.foodBtn} />
        </>
      ) : (
        <>
          <Checkbox />
        </>
      )}
    </TouchableOpacity>
  );
}
