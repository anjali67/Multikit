import React from 'react'
import { View } from 'react-native'
import mainStyle from '../../../style'
import RowContainer from '../../progressBar/rowContainer'

export default function inputContainer(props) {
  return (
    <View style={mainStyle.marginTop}> 
        <RowContainer title={props.title} containerStyle={{marginHorizontal:5}}/> 
        {props.textInputView}
    </View>
  )
}