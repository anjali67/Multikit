import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {bodyFocusData} from '@utils/json/fitness';
import {t} from 'i18next';
import styles from '../styles/styles';
import appColors from '@theme/appColors';
import {windowHeight} from '@theme/appConstant';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';

export default function focusSection(props) {
  const {isDark, textRTLStyle, isRTL} = useValues();
  return (
    <View style={styles.margin}>
      <FlatList
        numColumns={2}
        data={bodyFocusData}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => props.navigation.navigate('ExerciseVideo')}
            style={[styles.containerView]}>
            <Image source={item.image} style={styles.imageStyle} />
            <Text
              style={[
                styles.name,
                {
                  marginTop: windowHeight(9),
                  color: isDark ? appColors.white : appColors.fontColor,
                  textAlign: textRTLStyle,
                  right: isRTL ? windowWidth(10) : null,
                  width:windowWidth(200)
                },
              ]}>
              {t(item.name)}
            </Text>
            <Text
              style={[
                styles.name,
                {
                  color: appColors.fitnessContent1,
                  textAlign: textRTLStyle,
                  right: isRTL ? windowWidth(10) : null,
                },
              ]}>
              {item.minutes} <Text>{t('fitness.min')}</Text>
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
