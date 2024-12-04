import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import GradiantbtnView from '../../button';

export default function bottomView(props) {
  return (
    <View style={styles.mainView}>
      <View style={styles.blankView}></View>
      <GradiantbtnView
        onBtnPress={props.onBtnPress}
        btnTitle={props.btnTitle}
      />
      <TouchableOpacity
        onPress={props.onPress}
        style={styles.center}
        activeOpacity={0.9}>
        <Text style={styles.accountText}>{props.accountText}</Text>
      </TouchableOpacity>
    </View>
  );
}
