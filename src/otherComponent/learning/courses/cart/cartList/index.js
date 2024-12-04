import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {summaryData} from '@utils/json/learning';
import style from '../styles';
import {t} from 'i18next';
import {Cross} from '@assets/images/common/svg/cross';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';

export default function cartListItem(props) {
  const {viewRTLStyle, textRTLStyle, isDark, currSymbol, currValue, isRTL} =
    useValues();
  return (
    <View>
      <FlatList
        data={summaryData}
        renderItem={({item, index}) => (
          <View
            style={[
              style.row,
              {
                flexDirection: viewRTLStyle,
                backgroundColor: isDark ? appColors.darkTheme : '#F5F6F7',
              },
            ]}>
            <View style={[style.rowView, {flexDirection: viewRTLStyle}]}>
              <Image source={item.image} style={style.imageStyle} />
              <View style={{marginVertical: 8, marginHorizontal: 8}}>
                <Text
                  style={[
                    style.title,
                    {
                      textAlign: textRTLStyle,
                      width: windowWidth(227),
                      color: isDark ? appColors.white : appColors.learningBtn,
                    },
                  ]}>
                  {t(item.title)}
                </Text>
                <View style={[style.rowView, {flexDirection: viewRTLStyle}]}>
                  <Text
                    style={[
                      style.price,
                      {color: isDark ? appColors.white : appColors.learningBtn},
                    ]}>
                    {currSymbol}
                    {(currValue * item.price).toFixed(2)}
                  </Text>
                  <Text
                    style={[
                      style.price,
                      {
                        textDecorationLine: 'line-through',
                        color: isDark ? appColors.white : appColors.learningBtn,
                      },
                    ]}>
                    {currSymbol}
                    {(currValue * item.price).toFixed(2)}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={[
                style.crossIconView,
                props.crossStyle,
                {
                  backgroundColor: isDark
                    ? appColors.blackColor
                    : appColors.white,
                },
              ]}>
              <Cross
                height={'17'}
                width={'17'}
                color={isDark ? appColors.white : appColors.learningBtn}
                strokeWidth={'1.3'}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}
