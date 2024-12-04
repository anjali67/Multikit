import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {statusProfileData} from '@utils/json/chatting';
import styles from './styles';
import {t} from 'i18next';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default function profileStatusHeader() {
  const {isRTL, isDark} = useValues();
  return (
    <View>
      <FlatList
        inverted={isRTL ? true : false}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={statusProfileData}
        renderItem={({index, item}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              style={[
                styles.container,
                {
                  marginRight: isRTL ? windowWidth(6) : windowWidth(16),
                  marginLeft: isRTL ? windowWidth(8) : null,
                },
              ]}>
              <View>
                <Image
                  source={item.image}
                  style={[
                    styles.image,
                    {borderWidth: item.displayStatus ? 3 : 0},
                  ]}
                />
                {index === 0 && (
                  <View style={styles.mainView}>
                    <View style={styles.circleView}>
                      <Text style={styles.plusIcon}>+</Text>
                    </View>
                  </View>
                )}
              </View>
              <Text
                style={[
                  styles.name,
                  {color: isDark ? appColors.white : appColors.chatText},
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
