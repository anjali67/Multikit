import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {t} from 'i18next';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {useValues} from '@App';

export default function HeadingText(props) {
  const {viewRTLStyle} = useValues();
  return (
    <View
      style={[
        props.rowStyle ? props.rowStyle : styles.container,
        {
          marginTop: props.top ? props.top : windowHeight(8),
          flexDirection: viewRTLStyle,
        },
      ]}>
      <Text style={props.textStyle}>{t(props.title)}</Text>
      <TouchableOpacity activeOpacity={0.9} onPress={props.seeAllBtn}>
        <Text style={props.seeAllStyle}>
          {props.seeAll ? props.seeAll : t('common.See All')}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: windowWidth(25),
  },
});
