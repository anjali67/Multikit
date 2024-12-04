import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styles';
import {CabDrawer} from '@assets/images/cab_theme/svg/drawer';
import {Search} from '@assets/images/grocery_assets/svg/search';
import appColors from '@theme/appColors';
import {t} from 'i18next';
import {useNavigation} from '@react-navigation/native';
import {useValues} from '@App';

export default function homeHeader(props) {
  const navigation = useNavigation();
  const {viewRTLStyle, isDark, textRTLStyle} = useValues();
  return (
    <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}
        activeOpacity={0.9}
        style={[
          styles.outerContainer,
          {backgroundColor: isDark ? appColors.blackColor : appColors.white},
        ]}>
        <CabDrawer />
      </TouchableOpacity>
      <View
        style={[
          styles.textInputView,
          {
            flexDirection: viewRTLStyle,
            backgroundColor: isDark ? appColors.blackColor : appColors.white,
          },
        ]}>
        <Search height={'44'} width={'20'} color={appColors.foodContent} />
        <TextInput
          style={[
            styles.textInput,
            {
              textAlign: textRTLStyle,
              color: isDark ? appColors.white : appColors.cabText,
            },
          ]}
          placeholder={t('cabBooking.searchLocation')}
          placeholderTextColor={isDark ? appColors.white : appColors.cabText}
        />
      </View>
    </View>
  );
}
