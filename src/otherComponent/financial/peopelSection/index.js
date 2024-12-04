import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {peopleData} from '@utils/json/financial';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {windowWidth} from '@theme/appConstant';

export default function PeopleSection(props) {
  const {isRTL, isDark} = useValues();

  return (
    <View>
      <FlatList
        style={[styles.flatlist, {marginHorizontal: !isRTL && windowWidth(10)}]}
        contentContainerStyle={styles.contentContainerStyle}
        horizontal
        inverted={isRTL ? true : false}
        showsHorizontalScrollIndicator={false}
        data={peopleData}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => props.navigation.navigate('FinancePay')}
              style={styles.container}>
              <Image source={item.image} style={styles.image} />
              <Text
                style={[
                  styles.name,
                  {color: isDark ? appColors.darkTheme : appColors.gray},
                ]}>
                {t(item.name)}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
