import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import {windowHeight, windowWidth} from '@theme/appConstant';

export default function ViewCart(props) {
  return (
    <View style={[styles.counterView,props.styles]}>
              {props.content}
        </View>
  )
}

const styles = StyleSheet.create({
  counterView: {
      position: 'absolute',
      bottom: windowHeight(10),
      backgroundColor: appColors.groceryBtn,
      width: '94%',
      height: windowHeight(50),
      justifyContent:'center',
      paddingRight: windowWidth(10),
      alignSelf: 'center',
      borderRadius: windowHeight(4),
      paddingLeft: windowWidth(20)
  },
})