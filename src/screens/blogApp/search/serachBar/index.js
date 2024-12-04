import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import style from '../styles';
import {windowHeight} from '@theme/appConstant';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {Micline} from '@assets/images/grocery_assets/svg/micline';
import {Search} from '@assets/images/grocery_assets/svg/search';
import {t} from 'i18next';

export default function SearchComponent(props) {
  const {isDark, textRTLStyle, isRTL} = useValues();
  return (
    <View style={{marginTop: windowHeight(9)}}>
      <View
        style={[
          style.inputView,
          {
            backgroundColor: isDark ? appColors.darkTheme : appColors.white,
          },
          props.inputView,
        ]}>
        <TextInput
          placeholder={t('homeHeader.Searchproductshere')}
          placeholderTextColor={appColors.subTitle}
          style={[
            style.inputText,
            {
              textAlign: textRTLStyle,
              color: isDark ? appColors.white : null,
              marginLeft: isRTL ? windowHeight(10) : windowHeight(35),
            },
          ]}
        />
        <TouchableOpacity
          style={style.leftIcon}
          onPress={() => {}}
          activeOpacity={0.7}>
          <Search color={appColors.subTitle} />
        </TouchableOpacity>
        <TouchableOpacity
          style={style.rightIcon}
          onPress={() => {}}
          activeOpacity={0.7}>
          <Micline color={appColors.subTitle} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
