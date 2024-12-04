import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import RowContainer from '../../progressBar/rowContainer';
import styles from './styles';
import {t} from 'i18next';
import {windowHeight} from '@theme/appConstant';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function rowContainer(props) {
  const {viewRTLStyle, isDark} = useValues();
  return (
    <View>
      <RowContainer
        containerStyle={styles.containerStyle}
        title={'mainTheme.radioButton'}
      />
      <FlatList
        data={props.data}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => props.onRadioClick(index)}
            activeOpacity={0.9}
            style={[styles.container, {flexDirection: viewRTLStyle}]}>
            <View
              style={[
                styles.radioBtn,
                {
                  borderRadius: props.checkBox
                    ? windowHeight(1)
                    : windowHeight(20),
                  backgroundColor: isDark
                    ? appColors.darkTheme
                    : appColors.verticalLine,
                },
              ]}>
              {props.selectdBtn === index && (
                <View
                  style={[
                    styles.innerCircle,
                    {
                      borderRadius: props.checkBox
                        ? windowHeight(1)
                        : windowHeight(20),
                    },
                  ]}></View>
              )}
            </View>
            <Text
              style={[
                styles.name,
                {color: isDark ? appColors.white : appColors.fontColor},
              ]}>
              {t(item.name)}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
