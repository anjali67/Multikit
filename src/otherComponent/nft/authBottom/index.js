import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import styles from './styles'
import ButtonView from '../button'

export default function authBottom(props) {
  return (
    <View style={styles.mainView}>
    <ButtonView  onBtnClick={props.onPress} btnTitle={props.btnTitle}/>
    <TouchableOpacity
      onPress={props.onBtnPress}
      style={styles.center}
      activeOpacity={0.9}>
      <Text style={styles.accountText}>{props.accountText}</Text>
    </TouchableOpacity>
  </View>
  )
}