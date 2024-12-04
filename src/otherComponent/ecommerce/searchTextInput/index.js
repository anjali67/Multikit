import {View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {Search} from '@assets/images/ecommerce_theme/svg/search';
import {t} from 'i18next';
import {Filter} from '@assets/images/ecommerce_theme/svg/filter';
import {windowWidth} from '@theme/appConstant';
import {Micline} from '@assets/images/grocery_assets/svg/micline';

export default function SearchTextInput(props) {
  const {viewRTLStyle, textRTLStyle, isDark, isRTL} = useValues();
  return (
    <View style={[styles.container, props.container]}>
      <View
        style={[
          props.showFilter && styles.inputRow,
          {flexDirection: props.showFilter && viewRTLStyle, right: isRTL && 6},
        ]}>
        <View
          style={[
            styles.sectionStyle,

            {
              flexDirection: viewRTLStyle,
              backgroundColor: isDark
                ? appColors.blackColor
                : appColors.bgColor,
            },
            props.inputContainer,
          ]}>
          {props.notShowSerachIcon ? null : (
            <View style={{paddingLeft: isRTL ? windowWidth(10) : null}}>
              {props.searchIcon ? (
                props.searchIcon
              ) : (
                <Search color={appColors.subTitle} height={22} width={22} />
              )}
            </View>
          )}
          <TextInput
            style={[
              {textAlign: textRTLStyle},
              [props.textInput ? props.textInput : styles.textInput],
            ]}
            placeholder={
              props.placeholder
                ? props.placeholder
                : t('ecommerce.searchContent')
            }
            underlineColorAndroid="transparent"
            placeholderTextColor={
              props.placeholderTextColor
                ? props.placeholderTextColor
                : appColors.subTitle
            }
          />
          <View style={styles.margin}>
            <Micline
              color={
                props.micIconColor ? props.micIconColor : appColors.subTitle
              }
            />
          </View>
        </View>
        {props.showFilter && (
          <TouchableOpacity activeOpacity={0.9} style={styles.filterView}>
            <Filter />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
