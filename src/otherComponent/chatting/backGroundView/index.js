import React from 'react'
import { View, Text,Image} from 'react-native'
import styles from './styles'
import { chatBg } from '@utils/images/images'


export default function backgroundView(props) {
  return (
    <View style={styles.mainContainer}>
      <Image  source={chatBg} style={styles.image}/>
      <View>
       {props.content}
      </View>
    </View>
  )
}