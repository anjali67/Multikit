import React from 'react';
import {View, FlatList, Text, ScrollView} from 'react-native';
import learningStyle from '../../../style';
import {Morecourses} from '@utils/json/learning';
import style from '../../style';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function moreCourses() {
  const {isDark} = useValues();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={learningStyle.contentContainerStyle}
      style={[
        learningStyle.container,
        {backgroundColor: isDark ? appColors.darkPrimary : appColors.white},
      ]}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Morecourses}
        renderItem={({item, index}) => (
          <View style={style.margin}>
            <View
              style={[
                style.inputView,
                {backgroundColor: isDark ? appColors.darkPrimary1 : '#eff1f3'},
              ]}></View>
            <View
              style={[
                style.input,
                {backgroundColor: isDark ? appColors.darkPrimary2 : '#F5F7F7'},
              ]}>
              {isDark ? item.darkIcon : item.icon}
              <Text
                style={[
                  style.nameStyle,
                  {color: isDark ? appColors.white : appColors.learningBtn},
                ]}>
                {t(item.name)}
              </Text>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
}
